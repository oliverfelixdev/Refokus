import React from "react";
import Button from "./Button";

const Product = ({ elem }) => {
  return (
    <div className="w-full bg-slate-600 mt-2 min-h-64 py-4 px-4">
      <div className="wrap w-full h-auto md:h-64 flex flex-col md:flex-row bg-zinc-500 items-center justify-between overflow-auto">
        <div className="aboutColumn bg-zinc-300 w-full md:w-52 py-5 h-full flex flex-row md:flex-col items-start justify-between md:justify-evenly">
          <h3 className="text-2xl md:text-3xl font-medium break-words">
            {elem.title}
          </h3>
          <div>
            {elem.altText.split(",").map((word, index) => (
              <span
                key={index}
                className="block text-xs md:text-base font-medium uppercase break-words"
              >
                {word.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="videoColumn bg-blue-500 w-full md:w-auto h-32 md:h-auto flex-grow md:flex-grow-0"></div>

        <div className="detailsColumn bg-zinc-300 w-full md:w-2/6 h-full flex flex-col items-start justify-evenly gap-6 md:gap-0">
          <p className="text-md md:text-lg leading-relaxed break-words">
            {elem.description}
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Product;
