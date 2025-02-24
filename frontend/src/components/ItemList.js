import React from "react";

const ItemList = ({ items }) => {
  return (
    <div className="mt-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center bg-white shadow-lg p-6 my-4 rounded-xl hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="w-3/4 pr-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                {item.card.info.name}
              </h3>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer shadow-md">
                Add +
              </button>
            </div>
            <p className="text-green-600 font-bold mt-2">
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {item.card.info.description}
            </p>
          </div>
          {item.card.info.imageId && (
            <div className="w-1/4 relative">
              <img
                src={`https://media-assets.swiggy.com/${item.card.info.imageId}`}
                alt={item.card.info.name}
                className="w-[156px] h-[144px] object-cover rounded-xl shadow-lg border-2 border-white hover:border-green-500 transition-all duration-300 ease-in-out"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
