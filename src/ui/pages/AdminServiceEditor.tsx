import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BiSave } from "react-icons/bi";
import { useFirebase } from "../../utils/FirebaseContext";
import { Service, Subservice } from "../interface/Service";

const AdminServiceEditor: React.FC = () => {
    const { getFromDatabase, saveToDatabase, uploadImage } = useFirebase();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<string>("");
    const [subtitle, setSubtitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [icon, setIcon] = useState<string>("");
    const [isUpload, setIsUpload] = useState<boolean>(false);
    const [subservice, setSubservice] = useState<Subservice[]>([])

    const handleSendData = (e: React.FormEvent) => {
        e.preventDefault();

        if (!icon || !image) {
            console.log("Image can't be empty!");
            return;
        }

        setIsUpload(true);
        const newData: Service = {
            title,
            subtitle,
            description,
            image,
            icon,
            subservice
        };

        saveToDatabase(`service/${id || Date.now()}`, newData)
            .then(() => {
                setIsUpload(false);
                navigate("/admin/service");
            })
            .catch((error) => {
                setIsUpload(false);
                console.error("Error sending data to Firebase:", error);
            });
    };

    useEffect(() => {
        if (id) {
            getFromDatabase(`service/${id}`).then(data => {
                const dataConverted = data as Service | null;
                if (dataConverted) {
                    setTitle(dataConverted.title);
                    setSubtitle(dataConverted.subtitle);
                    setDescription(dataConverted.description);
                    setImage(dataConverted.image)
                    setIcon(dataConverted.icon)
                    setSubservice(dataConverted.subservice)
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
                <form className="w-10/12 flex flex-col mx-auto my-8 justify-around items-center" onSubmit={handleSendData}>
                    <div className="flex flex-col w-full">
                        <label className="mt-4 text-xs my-2" htmlFor="title">
                            Judul
                        </label>
                        <input
                            className="px-2 py-1 border-b-2 border-base-dark w-full"
                            required={true}
                            value={title}
                            onChange={(e) => setTitle(e.currentTarget.value)}
                            name="title"
                            id="title"
                            type="text"
                            placeholder="Judul Service"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="mt-4 text-xs my-2" htmlFor="title">
                            Sub Judul
                        </label>
                        <input
                            className="px-2 py-1 border-b-2 border-base-dark w-full"
                            required={true}
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.currentTarget.value)}
                            name="subtitle"
                            id="subtitle"
                            type="text"
                            placeholder="Sub Judul Service"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="mt-4 text-xs my-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="px-2 py-1 border-b-2 border-base-dark w-full"
                            required={true}
                            value={description}
                            onChange={(e) => setDescription(e.currentTarget.value)}
                            name="description"
                            id="description"
                            placeholder="Desc Service"
                        ></textarea>
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
                                required={true}
                                onChange={(e) => uploadImage(e, setImage)}
                                name="image"
                                id="image"
                                type="file"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-xs my-2" htmlFor="image">
                            Icon
                        </label>
                        <div className="flex items-center gap-x-5">
                            {icon && (
                                <a href={icon} target="_blank" rel="noreferrer">
                                    <img className="w-16 h-16" src={icon} alt="Article" />
                                </a>
                            )}
                            <input
                                required={true}
                                onChange={(e) => uploadImage(e, setIcon)}
                                name="icon"
                                id="icon"
                                type="file"
                            />
                        </div>
                    </div>
                    <div className="flex w-full justify-end items-center gap-x-5">
                        <Link
                            className="mt-4 px-6 py-2 inline-flex justify-center items-center bg-white text-primary border border-primary-light rounded-full font-semibold"
                            to="/admin/service"
                        >
                            Kembali
                        </Link>
                        <button
                            type="submit"
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

export default AdminServiceEditor;
