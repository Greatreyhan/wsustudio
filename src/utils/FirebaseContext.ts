import { FIREBASE_STORE } from "../config/firebaseinit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FIREBASE_AUTH, FIREBASE_DB } from '../config/firebaseinit';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth';
import { ref as rtdbRef, set, get, remove } from 'firebase/database';

// Define the context type
interface FirebaseContextType {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    errorMessage: string;
    getFromDatabase: (path: string) => Promise<any>;
    saveToDatabase: (path: string, data: any) => Promise<void>;
    deleteFromDatabase: (path: string) => Promise<void>;
    uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<string | null>;  // New method signature
}

// Initialize the context
const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

// Hook to use Firebase context
export const useFirebase = (): FirebaseContextType => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error('useFirebase must be used within a FirebaseProvider');
    }
    return context;
};

// Provider component
export const FirebaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
            setUser(authUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const signIn = async (email: string, password: string): Promise<void> => {
        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            setErrorMessage('');
        } catch (err: any) {
            setErrorMessage(err.message || 'Error signing in');
            console.error('Error Sign In:', err);
        }
    };

    const signUp = async (email: string, password: string): Promise<void> => {
        try {
            await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            setErrorMessage('');
        } catch (err: any) {
            setErrorMessage(err.message || 'Error signing up');
            console.error('Error Sign Up:', err);
        }
    };

    const signOutUser = async (): Promise<void> => {
        try {
            await signOut(FIREBASE_AUTH);
            setErrorMessage('');
        } catch (err: any) {
            setErrorMessage(err.message || 'Error signing out');
            console.error('Error Sign Out:', err);
        }
    };

    const getFromDatabase = async (path: string): Promise<any> => {
        try {
            const dbRef = rtdbRef(FIREBASE_DB, path);
            const snapshot = await get(dbRef);
            return snapshot.exists() ? snapshot.val() : null;
        } catch (err: any) {
            console.error('Error fetching data from Firebase:', err);
            throw new Error(err.message || 'Error fetching data');
        }
    };

    const saveToDatabase = async (path: string, data: any): Promise<void> => {
        try {
            const dbRef = rtdbRef(FIREBASE_DB, path);
            await set(dbRef, data);
        } catch (err: any) {
            console.error('Error saving data to Firebase:', err);
            throw new Error(err.message || 'Error saving data');
        }
    };

    const deleteFromDatabase = async (path: string): Promise<void> => {
        try {
            const recordRef = rtdbRef(FIREBASE_DB, path);
            await remove(recordRef);
            console.log("Delete success");
        } catch (error: any) {
            console.error("Delete failed: ", error.message);
        }
    };

    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>): Promise<string | null> => {
        const file = e.target.files?.[0];
        if (file) {
            const storageRef = ref(FIREBASE_STORE, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
    
            return new Promise((resolve, reject) => {
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        console.log("Upload is " + progress + "% done");
                    },
                    (error) => {
                        console.error(error);
                        reject(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then((downloadURL) => {
                                resolve(downloadURL);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    }
                );
            });
        } else {
            return null;
        }
    };
    

    const value: FirebaseContextType = {
        user,
        loading,
        signIn,
        signUp,
        signOut: signOutUser,
        errorMessage,
        getFromDatabase,
        saveToDatabase,
        deleteFromDatabase,
        uploadImage, 
    };

    return (
        <FirebaseContext.Provider value={value}>
            {children}
        </FirebaseContext.Provider>
    );
};
