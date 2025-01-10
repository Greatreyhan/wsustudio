import React, { useEffect, useState } from "react";
import { onValue, ref as rtdbref, remove } from "firebase/database";
import { FIREBASE_DB } from "../../config/firebaseinit";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

interface CareerItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

const AdminCareer: React.FC = () => {
  const [careers, setCareers] = useState<Record<string, CareerItem>>({});
  const [careerKeys, setCareerKeys] = useState<string[]>([]);

  useEffect(() => {
    onValue(rtdbref(FIREBASE_DB, "career"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const keys = Object.keys(data);
        setCareerKeys(keys);
        setCareers(data);
      }
    });
  }, []);

  const handleDeleteCareer = (e: React.MouseEvent<HTMLButtonElement>, key: string) => {
    e.preventDefault();
    const recordRef = rtdbref(FIREBASE_DB, `career/${key}`);
    remove(recordRef)
      .then(() => {
        console.log("Delete success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const truncateText = (text:string, limit:number) => {
    return text?.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  return (
    <div className="w-10/12 mx-auto pt-8">
      <div className="flex items-center justify-between py-8">
        <p>Total Careers: {careerKeys ? careerKeys.length : 0}</p>
        <Link
          className="inline-flex items-center px-6 py-1.5 bg-primary rounded-full text-white"
          to={"/admin/add-career"}
        >
          <span className="text-2xl mr-2">+</span>Add
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <table className="table p-4 bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="border p-4 font-normal text-gray-900">#</th>
              {/* <th className="border p-4 font-normal text-gray-900">ID</th> */}
              <th className="border p-4 font-normal text-gray-900">Title</th>
              <th className="border p-4 font-normal text-gray-900">Description</th>
              <th className="border p-4 font-normal text-gray-900">Link</th>
              <th className="border p-4 font-normal text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {careerKeys.map((key, i) => (
              <tr key={key} className="text-gray-700">
                <td className="border p-4">{i + 1}</td>
                {/* <td className="border p-4">{key}</td> */}
                <td className="border p-4">{careers[key]?.title}</td>
                <td className="border p-4">{truncateText(careers[key]?.description,50)}</td>
                <td className="border p-4">
                  <a
                    href={careers[key]?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-900 underline"
                  >
                    {careers[key]?.link}
                  </a>
                </td>
                <td className="border p-4 flex gap-x-3 justify-around items-center">
                  <Link
                    className="p-2 text-sky-800 rounded-full bg-base-white"
                    to={`/admin/edit-career/${key}`}
                  >
                    <MdEdit />
                  </Link>
                  <button
                    className="p-2 text-rose-800 rounded-full bg-rose-100"
                    type="button"
                    onClick={(e) => handleDeleteCareer(e, key)}
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

export default AdminCareer;
