import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BiSave } from "react-icons/bi";
import { Portofolio } from "../interface/Portofolio";
import Editor from "../../utils/Editor";
import { useFirebase } from "../../utils/FirebaseContext";

const AdminPortofolioEditor: React.FC = () => {
    const {getFromDatabase, saveToDatabase, uploadImage} = useFirebase()
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [dataEdit, setDataEdit] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [tag, setTag] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [img, setImg] = useState<string>("");
    const [HTML, setHTML] = useState<string>("");
    const [isUpload, setIsUpload] = useState<boolean>(false);

    const handleSendData = (e: React.FormEvent) => {
        e.preventDefault();
        if (!img) {
            console.log("Image can't be empty!");
            return;
        }

        setIsUpload(true);
        const newData: Portofolio = {
            title,
            tag,
            content: dataEdit,
            desc: description,
            img: img,
        };

        saveToDatabase(`portofolio/${id || Date.now()}`, newData)
            .then(() => {
                setIsUpload(false);
                navigate("/admin/portofolio");
            })
            .catch((error) => {
                console.error("Error sending data to Firebase:", error);
                setIsUpload(false);
            });
    };

    useEffect(() => {
        if (id) {
            getFromDatabase(`portofolio/${id}`).then(data => {
                if (data) {
                    setHTML(data.content);
                    setDataEdit(data.content);
                    setTitle(data.title);
                    setTag(data.tag);
                    setDescription(data.desc);
                    setImg(data.img);
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
                            placeholder="Judul Portofolio"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="mt-4 text-xs my-2" htmlFor="tag">
                            Tag
                        </label>
                        <input
                            className="px-2 py-1 border-b-2 border-base-dark w-full"
                            required={true}
                            value={tag}
                            onChange={(e) => setTag(e.currentTarget.value)}
                            name="tag"
                            id="tag"
                            type="text"
                            placeholder="Tag Portofolio"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="mt-4 text-xs my-2" htmlFor="description">
                            Desc
                        </label>
                        <textarea
                            className="px-2 py-1 border-b-2 border-base-dark w-full"
                            
                            required={true}
                            value={description}
                            onChange={(e) => setDescription(e.currentTarget.value)}
                            name="description"
                            id="description"
                            placeholder="Desc Portofolio"
                        ></textarea>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-xs my-2" htmlFor="image">
                            Gambar
                        </label>
                        <div className="flex items-center gap-x-5">
                            {img && (
                                <a href={img} target="_blank" rel="noreferrer">
                                    <img className="w-16 h-16" src={img} alt="Portofolio" />
                                </a>
                            )}
                            <input
                                required={true}
                                onChange={(e)=>uploadImage(e,setImg)}
                                name="image"
                                id="image"
                                type="file"
                            />
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <Editor HTML={HTML} setDataEdit={setDataEdit}/>
                    </div>
                    <div className="flex w-full justify-end items-center gap-x-5">
                        <Link
                            className="mt-4 px-6 py-2 inline-flex justify-center items-center bg-white text-primary border border-primary rounded-full font-semibold"
                            to="/admin/portofolio"
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

export default AdminPortofolioEditor;
