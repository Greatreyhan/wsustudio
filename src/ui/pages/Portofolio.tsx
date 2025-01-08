import React, { useState, useEffect, ChangeEvent } from "react";
import { FIREBASE_DB } from '../../config/firebaseinit';
import { PortoCard } from "../organisms";
import { Heroimage } from "../../assets/images";
import { onValue, ref as rtdbRef } from "firebase/database";
import { AiOutlineSearch } from "react-icons/ai";

interface PortfolioData {
  id: number;
  title: string;
  type: string;
  pict: string;
  desc: string;
}

const Portofolio: React.FC = () => {
  const [dataPortofolio, setDataPortofolio] = useState<Record<string, ArticleData>>({});
  const [keyPortofolio, setKeyPortofolio] = useState<string[]>([]);
  const [queryText, setQueryText] = useState<string>("");
  const [filteredKey, setFilteredKey] = useState<string[]>([]);
  const [tagKey, setTagKey] = useState<string>("all");
  useEffect(() => {
    onValue(rtdbRef(FIREBASE_DB, "portofolio"), (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      if (data) {
        const keys = Object.keys(data);
        setKeyPortofolio(keys);
        setDataPortofolio(data);
        setFilteredKey(keys);
      }
    });
  }, []);

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQueryText(query);

    const filtered = keyPortofolio.filter((key) =>
      dataPortofolio[key].title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredKey(filtered);
  };

  const handleTag = (tagName: string) => {
    setTagKey(tagName);
    if (tagName.toLowerCase() === "all") {
      setFilteredKey(keyPortofolio);
    } else {
      const filtered = keyPortofolio.filter((key) =>
        dataPortofolio[key].tag.toLowerCase().includes(tagName.toLowerCase())
      );
      setFilteredKey(filtered);
    }
  };

  return (
    <div>
      {/* Hero Image */}
      <div className="w-full pt-32 pb-8">
        <div className="w-10/12 mx-auto flex justify-center items-center text-center">
          <div className="flex-1">
            <h1 className="text-4xl">
              <span className="text-slate-900 font-bold">DISCOVER OUR WORK</span>
            </h1>
            <p className="text-slate-700 text-sm mt-4 w-7/12 mx-auto tracking-wide">
              With years of experience, we transform ideas into impactful solutions. Our portfolio features diverse projects—custom software, mobile apps, and integrated systems—crafted to meet each client's unique needs, delivering growth and efficiency with precision and creativity. Let our work speak for itself.
            </p>
            <div className="w-full flex justify-center mt-8">
              <form className="w-6/12">
                <input
                  value={queryText}
                  onChange={handleQuery}
                  className="w-full px-4 py-3 rounded-full bg-slate-50"
                  type="text"
                  placeholder="Cari Artikel"
                />
              </form>
              <button className="bg-sky-800 rounded-full text-white p-2 ml-2 text-3xl font-semibold">
                <AiOutlineSearch className="text-white w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Menu */}

      {/* Project Show */}
      <div className="w-11/12 mx-auto">
        <div className="flex flex-wrap mt-8 justify-around">

          {filteredKey.map((key) => (
          <PortoCard
            id={key}
            key={key}
            title={dataPortofolio[key].title}
            type={dataPortofolio[key].tag}
            pict={dataPortofolio[key].img}
            desc={dataPortofolio[key].desc}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
