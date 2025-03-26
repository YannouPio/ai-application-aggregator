import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div
      className="p-10 bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 text-white
            flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold">浏览所有的模板</h2>
      <p className="text-lg">在这里你可以找到所有的模板</p>
      <div className="w-full  flex justify-center">
        <div
          className="flex gap-2 items-center
             p-2 border rounded-md bg-white my-5 w-[50%]"
        >
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="搜索"
            onChange={(e) => onSearchInput(e.target.value)}
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
