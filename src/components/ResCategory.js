import React from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showlist, setShowlist }) => {
  return (
    <div className="w-6/12 mx-auto my-6">
      <div className="bg-white shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={setShowlist}
        >
          <span className="text-xl font-semibold text-gray-900">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-gray-600 text-lg transition-transform duration-300">
            {showlist ? "▲" : "▼"}
          </span>
        </div>
        {showlist && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
