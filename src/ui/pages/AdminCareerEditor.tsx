import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { onValue, ref as rtdbRef, set } from "firebase/database";
import { FIREBASE_DB } from "../../config/firebaseinit";
import { BiSave } from "react-icons/bi";

interface CareerData {
    title: string;
    description: string;
    link: string;
  }

const AdminCareerEditor: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<string>("");
    const [link, setLink] = useState<string>("");
    const [description, setDescription] = useState<string>("");


    const handleSendData = (e: React.FormEvent) => {
        e.preventDefault();

        const timestamp = Date.now();
        const dbRef = rtdbRef(FIREBASE_DB, `career/${id || timestamp}`);

        const newData: CareerData = {
            title,
            link,
            description,
        };

        set(dbRef, newData)
            .then(() => {
                navigate("/admin/career");
            })
            .catch((error) => {
                console.error("Error sending data to Firebase:", error);
            });
    };

    useEffect(() => {
        if (id) {
            onValue(rtdbRef(FIREBASE_DB, `career/${id}`), (snapshot) => {
                const data = snapshot.val() as CareerData | null;
                if (data) {
                    setTitle(data.title);
                    setLink(data.link);
                    setDescription(data.description);
                }
            });
        }
    }, [id]);


    return (
        <div className="App overflow-x-hidden">
            <div className="pt-16">
                <form className="w-10/12 flex flex-col mx-auto my-8 justify-around items-center">
                    <div className="flex flex-col w-full">
                        <label className="mt-4 text-xs my-2" htmlFor="title">
                            Judul
                        </label>
                        <input
                            className="px-2 py-1 border-b-2 border-base-dark w-full"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.currentTarget.value)}
                            name="title"
                            id="title"
                            type="text"
                            placeholder="Judul Career"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="mt-4 text-xs my-2" htmlFor="link">
                            Link
                        </label>
                        <input
                            className="px-2 py-1 border-b-2 border-base-dark w-full"
                            required
                            value={link}
                            onChange={(e) => setLink(e.currentTarget.value)}
                            name="link"
                            id="link"
                            type="text"
                            placeholder="link Career"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="mt-4 text-xs my-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="px-2 py-1 border-b-2 border-base-dark w-full"
                            maxLength={200}
                            required
                            value={description}
                            onChange={(e) => setDescription(e.currentTarget.value)}
                            name="description"
                            id="description"
                            placeholder="Desc Career"
                        ></textarea>
                    </div>

                    <div className="flex w-full justify-end items-center gap-x-5">
                        <Link
                            className="mt-4 px-6 py-2 inline-flex justify-center items-center bg-white text-primary border border-primary-light rounded-full font-semibold"
                            to="/admin/Career"
                        >
                            Kembali
                        </Link>
                        <button
                            onClick={handleSendData}
                            className="mt-4 px-6 py-2 inline-flex justify-center items-center bg-primary rounded-full text-white font-semibold"
                        >
                            <BiSave className="mr-2" />
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminCareerEditor;
