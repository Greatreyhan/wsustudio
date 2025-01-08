import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Define props type
interface BlogCardProps {
  imgArt: string; // URL or path to the image
  title: string;
  tag: string;
  desc: string;
  dateTime: string; // Assuming dateTime is a string representation of a timestamp
}

const BlogCard: React.FC<BlogCardProps> = ({ imgArt, title, tag, desc, dateTime }) => {
  const [dateString, setDateString] = useState<string>('');

  useEffect(() => {
    const date = new Date(parseInt(dateTime, 10)); // Ensure the timestamp is parsed as a number
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    setDateString(formattedDate);
  }, [dateTime]);

  const truncateText = (text: string, maxLength: number): string =>
    text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;

  return (
    <div className="w-80 my-4 pb-10 bg-white rounded-xl shadow-lg relative">
      <div>
        <div className="w-full h-48">
          <img
            src={imgArt}
            alt="Blog cover"
            className="object-cover rounded-t-lg h-full w-full"
          />
        </div>
        <div className="pb-4">
          <div className="-mt-1 ml-3">
            <span className="px-5 bg-sky-700 text-white py-1.5 rounded-b-lg text-xs">{tag}</span>
          </div>
          <h4 className="text-lg mx-3 font-semibold text-gray-950 mt-4">{title}</h4>
          <p className="text-sm text-gray-700 mx-3 mt-1">{truncateText(desc, 100)}</p>
          <div className="flex justify-between items-center mx-3 mt-4 absolute bottom-5 w-11/12">
            <p className="text-xs text-slate-700">{dateString}</p>
            <Link
              to={`/article/${dateTime}`}
              className="px-6 py-1.5 text-white bg-sky-800 rounded-full"
            >
              Read
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
