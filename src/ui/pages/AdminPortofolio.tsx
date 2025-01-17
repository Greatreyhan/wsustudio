import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { Portofolio } from "../interface/Portofolio";
import { useFirebase } from "../../utils/FirebaseContext";

const AdminPortofolio: React.FC = () => {
  const {getFromDatabase, deleteFromDatabase} = useFirebase()
  const [dataPorto, setDataPorto] = useState<Record<string, Portofolio>>({});
  const [keyPorto, setKeyPorto] = useState<string[]>([]);

  useEffect(() => {
    getFromDatabase("portofolio").then(data => {
      if (data) {
        const keys = Object.keys(data);
        setKeyPorto(keys);
        setDataPorto(data);
      }
    });
  }, []);

  return (
    <div className="w-10/12 mx-auto pt-8">
      <div className="flex items-center justify-between py-8">
        <p>Total Portofolio: {keyPorto ? keyPorto.length : 0}</p>
        <Link
          className="inline-flex items-center px-6 py-1.5 bg-primary rounded-full text-white"
          to={"/admin/add-portofolio"}
        >
          <span className="text-2xl mr-2">+</span>Add
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <table className="table p-4 bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="border p-4 font-normal text-gray-900">#</th>
              <th className="border p-4 font-normal text-gray-900">Title</th>
              <th className="border p-4 font-normal text-gray-900">Tag</th>
              <th className="border p-4 font-normal text-gray-900">Desc</th>
              <th className="border p-4 font-normal text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {keyPorto.map((key, i) => (
              <tr key={key} className="text-gray-700">
                <td className="border p-4">{i + 1}</td>
                <td className="border p-4">{dataPorto[key]?.title}</td>
                <td className="border p-4">{dataPorto[key]?.tag}</td>
                <td className="border p-4">{dataPorto[key]?.desc}</td>
                <td className="border p-4 flex gap-x-3 justify-around items-center">
                  <Link
                    className="p-2 text-sky-800 rounded-full bg-base-white"
                    to={`/admin/edit-portofolio/${key}`}
                  >
                    <MdEdit />
                  </Link>
                  <button
                    className="p-2 text-rose-800 rounded-full bg-rose-100"
                    type="button"
                    onClick={() => deleteFromDatabase("portofolio/"+key)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPortofolio;
