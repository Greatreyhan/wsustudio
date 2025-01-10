import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FIREBASE_STORE, FIREBASE_DB } from "../../config/firebaseinit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { onValue, ref as rtdbRef, set } from "firebase/database";
import { BiSave } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";

// Custom types for article data
interface ArticleData {
  title: string;
  subtitle: string;
  tag: string;
  desc: string;
  article: string;
  image: string;
}

interface Params extends Record<string, string | undefined> {
  id: string;
}

// CKEditor custom plugin configuration
function MyCustomUploadAdapterPlugin(editor: any) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  upload(): Promise<{ default: string }> {
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
              console.log(`Upload is ${progress}% done`);
            },
            (error) => {
              console.error("Upload failed:", error);
              reject(error.message || "Unknown upload error");
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
    console.warn("Upload aborted");
  }
}

const AdminEditor: React.FC = () => {
  const navi = useNavigate();
  const { id } = useParams<Params>();
  const [dataEdit, setDataEdit] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubTitle] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [descArt, setDescArt] = useState<string>("");
  const [imgArt, setImgArt] = useState<string>("");
  const [articleHTML, setArticleHTML] = useState<string>("");
  const [isUpload, setIsUpload] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      const dbRef = rtdbRef(FIREBASE_DB, `data/${id}`);
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val() as ArticleData;
        if (data) {
          setArticleHTML(data.article);
          setDataEdit(data.article);
          setTitle(data.title);
          setSubTitle(data.subtitle);
          setTag(data.tag);
          setDescArt(data.desc);
        }
      });
    }
  }, [id]);

  const handleCKEditorChange = (event: any, editor: any) => {
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

    const dbRef = rtdbRef(FIREBASE_DB, `data/${id}`);
    const newData: ArticleData = {
      title,
      subtitle,
      tag,
      desc: descArt,
      article: dataEdit,
      image: imgArt,
    };

    set(dbRef, newData)
      .then(() => {
        setIsUpload(false);
        navi("/blog");
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
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImgArt(downloadURL);
          });
        }
      );
    }
  };

  return (
    <div className="App overflow-x-hidden">
      <div className="pt-16">
        {isUpload && (
          <div className="w-full h-full fixed bg-black bg-opacity-50 z-50 top-0 flex justify-center items-center">
            <div className="loader"></div>
          </div>
        )}
        <form className="w-10/12 mx-auto my-8 flex justify-around items-center">
          <div className="flex flex-col">
            <label className="mt-4 text-xs my-2" htmlFor="title">
              Judul
            </label>
            <input
              className="px-2 py-1 border-b-2 border-blue-950 w-80"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              placeholder="Judul Artikel"
            />

            <label className="mt-4 text-xs my-2" htmlFor="subtitle">
              Sub-judul
            </label>
            <input
              className="px-2 py-1 border-b-2 border-blue-950 w-80"
              required
              value={subtitle}
              onChange={(e) => setSubTitle(e.target.value)}
              id="subtitle"
              type="text"
              placeholder="Sub-Judul Artikel"
            />

            <label className="mt-4 text-xs my-2" htmlFor="tag">
              Tag
            </label>
            <input
              className="px-2 py-1 border-b-2 border-blue-950 w-80"
              required
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              id="tag"
              type="text"
              placeholder="Tag Artikel"
            />
          </div>

          <div className="flex-col flex">
            <label className="mt-4 text-xs my-2" htmlFor="descArt">
              Desc
            </label>
            <textarea
              className="px-2 py-1 border-b-2 border-blue-950 w-80"
              
              required
              value={descArt}
              onChange={(e) => setDescArt(e.target.value)}
              id="descArt"
              placeholder="Desc Artikel"
            ></textarea>

            <label className="text-xs my-2" htmlFor="art-image">
              Gambar
            </label>
            <input
              required
              onChange={handleUpload}
              id="art-image"
              type="file"
            />

            <button
              onClick={handleSendData}
              className="mt-4 px-6 py-2 flex justify-center items-center bg-blue-900 text-white font-semibold"
            >
              <BiSave className="mr-2" />
              Save
            </button>
          </div>
        </form>
      </div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          extraPlugins: [MyCustomUploadAdapterPlugin],
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
        }}
        data={articleHTML}
        onChange={handleCKEditorChange}
      />
    </div>
  );
};

export default AdminEditor;
