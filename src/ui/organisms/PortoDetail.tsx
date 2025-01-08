import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onValue, ref as rtdbref } from "firebase/database";
import { FIREBASE_DB } from "../../config/firebaseinit";
import parse from "html-react-parser";
import "../styles/PortoStyle.css";

interface PortoData {
  img?: string;
  title?: string;
  content?: string;
}

const PortoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Ensure `id` is a string
  const [dataDB, setDataDB] = useState<PortoData | null>(null);

  useEffect(() => {
    if (id) {
      const dataRef = rtdbref(FIREBASE_DB, "portodata/" + id);
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        setDataDB(data || null);
      });
    }
  }, [id]);

  return (
    <div className="w-full">
      {dataDB ? (
        <>
          <div className="w-full">
            <div className="w-full h-96">
              <img
                className="w-full h-full object-cover"
                src={dataDB.img}
                alt={dataDB.title || "Portfolio Image"}
              />
            </div>
            <div className="-mt-48 w-10/12 mx-auto">
              <h2 className="text-white font-bold text-5xl w-8/12">
                {dataDB.title}
              </h2>
            </div>
          </div>
          <div className="md:w-7/12 w-11/12 mx-auto mt-48">
            <div className="mt-8 componentArt">
              {dataDB.content ? parse(dataDB.content) : null}
            </div>
          </div>
        </>
      ) : (
        <p className="text-center mt-8">Loading...</p>
      )}
    </div>
  );
};

export default PortoDetail;
