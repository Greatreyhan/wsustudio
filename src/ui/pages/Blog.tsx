import React, { useEffect, useState, ChangeEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BlogCard } from "../organisms";
import { onValue, ref as rtdbRef } from "firebase/database";
import { FIREBASE_DB } from "../../config/firebaseinit";

interface ArticleData {
  title: string;
  tag: string;
  image: string;
  desc: string;
}

const Blog: React.FC = () => {
  const [dataArt, setDataArt] = useState<Record<string, ArticleData>>({});
  const [keyArticle, setKeyArticle] = useState<string[]>([]);
  const [queryText, setQueryText] = useState<string>("");
  const [filteredKey, setFilteredKey] = useState<string[]>([]);
  const [tagKey, setTagKey] = useState<string>("all");

  useEffect(() => {
    onValue(rtdbRef(FIREBASE_DB, "article"), (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      if (data) {
        const keys = Object.keys(data);
        setKeyArticle(keys);
        setDataArt(data);
        setFilteredKey(keys);
      }
    });
  }, []);

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQueryText(query);

    const filtered = keyArticle.filter((key) =>
      dataArt[key].title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredKey(filtered);
  };

  const handleTag = (tagName: string) => {
    setTagKey(tagName);
    if (tagName.toLowerCase() === "all") {
      setFilteredKey(keyArticle);
    } else {
      const filtered = keyArticle.filter((key) =>
        dataArt[key].tag.toLowerCase().includes(tagName.toLowerCase())
      );
      setFilteredKey(filtered);
    }
  };

  return (
    <div className="w-full mx-auto bg-slate-100 overflow-x-hidden">

      {/* Title Search */}
      <div className="w-full text-center pt-32">
        <h2 className="text-4xl font-medium text-slate-900">Read More Articles</h2>
        <p className="text-sm font-light text-slate-800 mt-2 w-4/12 mx-auto">
          Our team group of creative people, consisting of various backgrounds and specific abilities that are divided into several divisions.
        </p>
      </div>

      {/* Search Feature */}
      <div className="w-10/12 mx-auto flex-col items-center mt-8 justify-center">
        <div className="w-full flex justify-center">
          <form className="w-6/12">
            <input
              value={queryText}
              onChange={handleQuery}
              className="w-full px-4 py-3 rounded-full"
              type="text"
              placeholder="Cari Artikel"
            />
          </form>
          <button className="bg-sky-800 rounded-full text-white p-2 ml-2 text-3xl font-semibold">
            <AiOutlineSearch className="text-white w-8 h-8" />
          </button>
        </div>
        <div className="flex gap-4 justify-center my-6 flex-wrap">
          {["All", "Hukum", "Perusahaan", "Pertambangan", "Konstruksi"].map(
            (tag, idx) => (
              <span
                key={idx}
                onClick={() => handleTag(tag)}
                className={`px-4 rounded-full text-center cursor-pointer ${
                  tagKey === tag
                    ? "text-white bg-sky-800"
                    : "border-sky-800 text-sky-800"
                } py-1.5 border w-36 font-semibold text-sm`}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Articles */}
      <div className="w-11/12 mx-auto py-16 flex flex-wrap md:justify-between justify-center">
        {filteredKey.map((key) => (
          <BlogCard
            key={key}
            title={dataArt[key].title}
            tag={dataArt[key].tag}
            imgArt={dataArt[key].image}
            desc={dataArt[key].desc}
            dateTime={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
