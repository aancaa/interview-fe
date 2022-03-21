import React from 'react';
type DetailNews = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

interface NewsProps {
  news: DetailNews;
}
export default function DetailNews({news: {title, description, url, urlToImage}}: NewsProps) {
  return (
    <div className="px-3 py-4 rounded-lg overflow-hidden bg-[#f1efef] shadow group hover:scale-105 hover:bg-gray-800 hover:text-white transition-all flex flex-col justify-between">
      <h1 className="text-lg font-bold">{title}</h1>
      <img
        className="rounded-lg my-3 object-contain"
        src={urlToImage}
        alt=""
      />
      <p>{description}</p>
      <a
        className="group-hover:text-black rounded-md px-2 py-3 bg-slate-300 group-hover:bg-white flex justify-center items-center"
        href={url}
      >
        Read more
      </a>
    </div>
  );
}
