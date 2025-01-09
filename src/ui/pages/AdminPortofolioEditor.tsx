import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { onValue, ref as rtdbRef, set } from "firebase/database";
import { FIREBASE_STORE, FIREBASE_DB } from "../../config/firebaseinit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { BiSave } from "react-icons/bi";

interface PortofolioData {
    title: string;
    tag: string;
    desc: string;
    img: string;
    content: string;
}

const AdminPortofolioEditor: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [dataEdit, setDataEdit] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [tag, setTag] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [img, setImg] = useState<string>("");
    const [HTML, setHTML] = useState<string>("");
    const [isUpload, setIsUpload] = useState<boolean>(false);

    const custom_config = {
        extraPlugins: [MyCustomUploadAdapterPlugin],
        table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
    };

    class MyUploadAdapter {
        loader: any;

        constructor(loader: any) {
            this.loader = loader;
        }

        upload() {
            return this.loader.file.then(
                (file: File) =>
                    new Promise((resolve, reject) => {
                        const storageRef = ref(FIREBASE_STORE, `images/${file.name}`);
                        const uploadTask = uploadBytesResumable(storageRef, file);
                        uploadTask.on(
                            "state_changed",
                            (snapshot) => {
                                const progress =
                                    Math.round(
                                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                                    );
                                console.log("Upload is " + progress + "% done");
                            },
                            (error) => {
                                switch (error.code) {
                                    case "storage/unauthorized":
                                        reject("User doesn't have permission to access the object");
                                        break;
                                    case "storage/canceled":
                                        reject("User canceled the upload");
                                        break;
                                    case "storage/unknown":
                                        reject(
                                            "Unknown error occurred, inspect error.serverResponse"
                                        );
                                        break;
                                }
                            },
                            () => {
                                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                    resolve({
                                        default: downloadURL,
                                    });
                                });
                            }
                        );
                    })
            );
        }

        abort() {
            // Optional method
        }
    }

    function MyCustomUploadAdapterPlugin(editor: any) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
            return new MyUploadAdapter(loader);
        };
    }

    const handleSendData = (e: React.FormEvent) => {
        e.preventDefault();
        if (!img) {
            console.log("Image can't be empty!");
            return;
        }

        setIsUpload(true);
        const timestamp = Date.now();
        const dbRef = rtdbRef(FIREBASE_DB, `portofolio/${id || timestamp}`);

        const newData: PortofolioData = {
            title,
            tag,
            content: dataEdit,
            desc: description,
            img: img,
        };

        set(dbRef, newData)
            .then(() => {
                setIsUpload(false);
                navigate("/admin/portofolio");
            })
            .catch((error) => {
                console.error("Error sending data to Firebase:", error);
                setIsUpload(false);
            });
    };

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                        setImg(downloadURL);
                    });
                }
            );
        }
    };

    useEffect(() => {
        if (id) {
            onValue(rtdbRef(FIREBASE_DB, `portofolio/${id}`), (snapshot) => {
                const data = snapshot.val() as PortofolioData | null;
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

    const handlerCKEDITOR = (_event: any, editor: any) => {
        const data = editor.getData();
        setDataEdit(data);
    };

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
                            className="px-2 py-1 border-b-2 border-sky-950 w-full"
                            required
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
                            className="px-2 py-1 border-b-2 border-sky-950 w-full"
                            required
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
                            className="px-2 py-1 border-b-2 border-sky-950 w-full"
                            maxLength={200}
                            required
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
                                required
                                onChange={handleUpload}
                                name="image"
                                id="image"
                                type="file"
                            />
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <CKEditor
                            editor={ClassicEditor}
                            config={custom_config}
                            data={HTML}
                            onReady={(editor) => {
                                console.log("Editor is ready to use!", editor);
                            }}
                            onChange={(event, editor) => handlerCKEDITOR(event, editor)}
                        />
                    </div>
                    <div className="flex w-full justify-end items-center gap-x-5">
                        <Link
                            className="mt-4 px-6 py-2 inline-flex justify-center items-center bg-white text-sky-900 border border-sky-800 rounded-full font-semibold"
                            to="/admin/portofolio"
                        >
                            Kembali
                        </Link>
                        <button
                            onClick={handleSendData}
                            className="mt-4 px-6 py-2 inline-flex justify-center items-center bg-sky-900 rounded-full text-white font-semibold"
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
