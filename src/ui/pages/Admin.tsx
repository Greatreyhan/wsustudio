import React, { useEffect, useState } from "react";
import { onValue, ref as rtdbref } from "firebase/database";
import { FIREBASE_DB } from "../../config/firebaseinit";

interface ArticleData {
  [key: string]: {
    tag?: string;
    [key: string]: any; // Allows for other optional fields
  };
}

interface PortfolioData {
  [key: string]: any; // Define specific fields if available
}

const Admin: React.FC = () => {
  const [dataArt, setDataArt] = useState<ArticleData>({});
  const [keyArticle, setKeyArticle] = useState<string[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);

  const [dataPorto, setDataPorto] = useState<PortfolioData>({});
  const [keyPorto, setKeyPorto] = useState<string[]>([]);

  useEffect(() => {
    // Fetch articles
    onValue(rtdbref(FIREBASE_DB, "article"), (snapshot) => {
      const data: ArticleData | null = snapshot.val();
      if (data) {
        const keys = Object.keys(data);
        const tags = keys.map((key) => data[key].tag || "");
        setTagList(tags);
        setKeyArticle(keys);
        setDataArt(data);
      }
    });

    // Fetch portfolios
    onValue(rtdbref(FIREBASE_DB, "portofolio"), (snapshot) => {
      const data: PortfolioData | null = snapshot.val();
      if (data) {
        const keys = Object.keys(data);
        setKeyPorto(keys);
        setDataPorto(data);
      }
    });
  }, []);

  return (
    <div className="w-10/12 mx-auto flex justify-around pt-16 gap-x-10 bg-white">
      {/* Display Number of Articles */}
      <div className="w-4/12 bg-slate-100 px-8 py-4 rounded-md">
        <h2 className="text-lg text-slate-900">Total Artikel</h2>
        <p className="text-4xl text-primary flex justify-end items-end mt-4 font-bold">
          {keyArticle.length}
          <span className="text-sm font-light ml-2">artikel</span>
        </p>
      </div>

      {/* Display Number of Portfolios */}
      <div className="w-4/12 bg-slate-100 px-8 py-4 rounded-md">
        <h2 className="text-lg text-slate-900">Total Portofolio</h2>
        <p className="text-4xl text-primary flex justify-end items-end mt-4 font-bold">
          {keyPorto.length}
          <span className="text-sm font-light ml-2">portofolio</span>
        </p>
      </div>
    </div>
  );
};

export default Admin;
