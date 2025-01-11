import React from "react";
import Button from "./Button";

const Product = ({ elem, mover, count }) => {
  let frameVideos = [
    { video: "/cula-43.webm" },
    { video: "/bcgp-43.webm" },
    { video: "/arqitel-43.webm" },
    { video: "/lavender-43.webm" },
    { video: "/sevdesk-43.webm" },
  ];
  return (
    <div
      onMouseEnter={() => {
        mover(count);
      }}
      className="productOnly w-full min-h-64 py-4 px-4"
    >
      <div className="wrap w-full h-auto md:h-64 flex flex-col md:flex-row items-center justify-between overflow-auto">
        <div className="aboutColumn w-full md:w-52 py-5 pl-5 h-full flex flex-row md:flex-col items-start justify-between md:justify-evenly">
          <h3 className="text-2xl md:text-3xl font-medium break-words">
            {elem.title}
          </h3>
          <div>
            {elem.altText.split(",").map((word, index) => (
              <span
                key={index}
                className="block text-xs md:text-xs font-medium uppercase break-words"
              >
                {word.trim()}
              </span>
            ))}
          </div>
        </div>
        <div className="videoColumn w-full block md:hidden md:w-auto h-80 md:h-auto rounded-lg flex-grow md:flex-grow-0 overflow-hidden">
          {frameVideos.map((item, i) => (
            <video
              key={i}
              loop
              autoPlay
              muted
              src={frameVideos[count % frameVideos.length].video}
              className="h-full w-full object-cover"
            ></video>
          ))}
        </div>
        <div className="detailsColumn w-full md:w-2/6 h-full py-4 md:py-0 flex flex-col items-start justify-evenly gap-4 md:gap-0">
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
