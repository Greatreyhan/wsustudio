import { FIREBASE_STORE,  } from "../config/firebaseinit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const handleUpload = (e: React.ChangeEvent<HTMLInputElement>, setImage: (value: string) => void) => {
        const file = e.target.files?.[0];
        if (file) {
            const storageRef = ref(FIREBASE_STORE, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    console.log("Upload is " + progress + "% done");
                },
                (error) => console.error(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImage(downloadURL);
                    });
                }
            );
        }
    };
