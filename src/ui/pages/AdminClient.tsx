import React, { useEffect, useState } from "react";
import { onValue, ref as rtdbref, remove } from "firebase/database";
import { FIREBASE_DB } from "../../config/firebaseinit";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa6";

interface ClientItem {
  title: string;
  image: string;
}

const AdminClient: React.FC = () => {
  const [clients, setClients] = useState<Record<string, ClientItem>>({});
  const [clientKeys, setClientKeys] = useState<string[]>([]);

  useEffect(() => {
    onValue(rtdbref(FIREBASE_DB, "client"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const keys = Object.keys(data);
        setClientKeys(keys);
        setClients(data);
      }
    });
  }, []);

  const handleDeleteClient = (e: React.MouseEvent<HTMLButtonElement>, key: string) => {
    e.preventDefault();
    const recordRef = rtdbref(FIREBASE_DB, `client/${key}`);
    remove(recordRef)
      .then(() => {
        console.log("Delete success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-10/12 mx-auto pt-8">
      <div className="flex items-center justify-between py-8">
        <p>Total Clients: {clientKeys ? clientKeys.length : 0}</p>
        <Link
          className="inline-flex items-center px-6 py-1.5 bg-primary rounded-full text-white"
          to={"/admin/client/add"}
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
              <th className="border p-4 font-normal text-gray-900">Image</th>
              <th className="border p-4 font-normal text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {clientKeys.map((key, i) => (
              <tr key={key} className="text-gray-700">
                <td className="border p-4">{i + 1}</td>
                <td className="border p-4">{clients[key]?.title}</td>
                <td className="border p-4 w-10 h-10"><img src={clients[key]?.image} /></td>
                <td className="border p-4 flex gap-x-3 justify-around items-center">
                  <Link
                    className="p-2 text-sky-800 rounded-full bg-base-white"
                    to={`/admin/client/${key}`}
                  >
                    <MdEdit />
                  </Link>

                  <button
                    className="p-2 text-rose-800 rounded-full bg-rose-100"
                    type="button"
                    onClick={(e) => handleDeleteClient(e, key)}
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

export default AdminClient;
