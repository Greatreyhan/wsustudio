import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BiSave } from "react-icons/bi";
import { handleUpload } from "../../utils/ImageUploader";
import { useFirebase } from "../../utils/FirebaseContext";
import { Client } from "../interface/Client";

const AdminClientEditor: React.FC = () => {
    const navigate = useNavigate();
    const {getFromDatabase, saveToDatabase} = useFirebase();
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [isUpload, setIsUpload] = useState<boolean>(false);

    const handleSendData = (e: React.FormEvent) => {
        e.preventDefault();

        if (!image) {
            console.log("Image can't be empty!");
            return;
        }

        setIsUpload(true);
        const newData: Client = {
            title,
            image,
        };

        saveToDatabase(`client/${id || Date.now()}`, newData)
            .then(() => {
                setIsUpload(false);
                navigate("/admin/client");
            })
            .catch((error) => {
                setIsUpload(false);
                console.error("Error sending data to Firebase:", error);
            });
    };

    useEffect(() => {
        if (id) {
            getFromDatabase(`client/${id}`).then(data => {
                if (data) {
                    setTitle(data.title);
                    setImage(data.image)
                }
            });
        }
    }, [id]);


    return (
        <div className="App overflow-x-hidden">
            <div className="pt-16">
                {isUpload && (
                    <div className="w-full h-full fixed bg-black bg-opacity-50 z-50 top-0 flex justify-center items-center">
                        <div className="loader"></div>
                    </div>
                )}
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
                            placeholder="Judul client"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-xs my-2" htmlFor="image">
                            Gambar
                        </label>
                        <div className="flex items-center gap-x-5">
                            {image && (
                                <a href={image} target="_blank" rel="noreferrer">
                                    <img className="w-16 h-16" src={image} alt="Article" />
                                </a>
                            )}
                            <input
                                required
                                onChange={(e)=>handleUpload(e,setImage)}
                                name="image"
                                id="image"
                                type="file"
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-end items-center gap-x-5">
                        <Link
                            className="mt-4 px-6 py-2 inline-flex justify-center items-center bg-white text-primary border border-primary-light rounded-full font-semibold"
                            to="/admin/client"
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

export default AdminClientEditor;
