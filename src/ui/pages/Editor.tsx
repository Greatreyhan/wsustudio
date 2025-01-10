import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FIREBASE_STORE, FIREBASE_DB } from "../../config/firebaseinit";

import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ref as databaseRef, set } from "firebase/database";
import { BiSave } from "react-icons/bi";
import "../styles/LoadingAnimation.css";
import { useNavigate } from "react-router-dom";

// Custom configuration for CKEditor
const custom_config = {
  extraPlugins: [MyCustomUploadAdapterPlugin],
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};

// Custom upload adapter for CKEditor
class MyUploadAdapter {
  private loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file: File) =>
        new Promise((resolve, reject) => {
          const storageRefInstance = storageRef(FIREBASE_STORE, `images/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRefInstance, file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              console.log("Upload is " + progress + "% done");
            },
            (error) => {
              console.error(error);
              reject(error.message);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                resolve({ default: downloadURL });
              });
            }
          );
        })
    );
  }

  abort() {
    console.log("Upload aborted.");
  }
}

// Custom plugin for CKEditor
function MyCustomUploadAdapterPlugin(editor: any) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
    return new MyUploadAdapter(loader);
  };
}

// Editor component
const Editor: React.FC = () => {
  const navigate = useNavigate();
  const [dataEdit, setDataEdit] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [descArt, setDescArt] = useState<string>("");
  const [imgArt, setImgArt] = useState<string>("");
  const [isUpload, setIsUpload] = useState<boolean>(false);

  const handlerCKEDITOR = (_: any, editor: any) => {
    const data = editor.getData();
    setDataEdit(data);
  };

  const handleSendData = (e: React.FormEvent) => {
    e.preventDefault();

    if (!imgArt) {
      console.error("Image can't be empty!");
      return;
    }

    setIsUpload(true);
    const idArt = Date.now().toString();

    const dbRef = databaseRef(FIREBASE_DB, `data/${idArt}`);
    const newData = {
      title,
      subtitle,
      tag,
      article: dataEdit,
      desc: descArt,
      image: imgArt,
    };

    set(dbRef, newData)
      .then(() => {
        setIsUpload(false);
        navigate("/blog");
      })
      .catch((error) => {
        console.error("Error sending data to Firebase:", error);
        setIsUpload(false);
      });
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const storageRefInstance = storageRef(FIREBASE_STORE, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRefInstance, file);

      setIsUpload(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error(error);
          setIsUpload(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImgArt(downloadURL);
            setIsUpload(false);
          });
        }
      );
    }
  };

  return (
    <div className="App overflow-x-hidden">
      {isUpload && (
        <div className="w-full h-full fixed bg-black bg-opacity-50 z-50 top-0 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
      <form
        onSubmit={handleSendData}
        className="w-10/12 mx-auto my-8 flex justify-around items-center"
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="mt-4 text-xs my-2">
            Judul
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-2 py-1 border-b-2 border-blue-950 w-80"
            placeholder="Judul Artikel"
            required
          />

          <label htmlFor="subtitle" className="mt-4 text-xs my-2">
            Sub-judul
          </label>
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="px-2 py-1 border-b-2 border-blue-950 w-80"
            placeholder="Sub-Judul Artikel"
            required
          />

          <label htmlFor="tag" className="mt-4 text-xs my-2">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="px-2 py-1 border-b-2 border-blue-950 w-80"
            placeholder="Tag Artikel"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="descArt" className="mt-4 text-xs my-2">
            Desc
          </label>
          <textarea
            id="descArt"
            value={descArt}
            onChange={(e) => setDescArt(e.target.value)}
            className="px-2 py-1 border-b-2 border-blue-950 w-80"
            placeholder="Desc Artikel"
            
            required
          ></textarea>

          <label htmlFor="art-image" className="text-xs my-2">
            Gambar
          </label>
          <input
            type="file"
            id="art-image"
            onChange={handleUpload}
            required
          />

          <button
            type="submit"
            className="mt-4 px-6 py-2 flex justify-center items-center bg-blue-900 text-white font-semibold"
          >
            <BiSave className="mr-2" />
            Save
          </button>
        </div>
      </form>
      <CKEditor
        editor={ClassicEditor}
        config={custom_config}
        data="<p>Start Editing Now</p>"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={handlerCKEDITOR}
      />
    </div>
  );
};

export default Editor;
