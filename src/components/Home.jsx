import React from "react";
const Home = () => {
  let images = [
    {
      url: "./src/assets/media/tr1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "./src/assets/media/tr2.png",
      top: "54%",
      left: "53%",
      isActive: false,
    },
    {
      url: "./src/assets/media/tr3.png",
      top: "58%",
      left: "48%",
      isActive: false,
    },
    {
      url: "./src/assets/media/tr4.png",
      top: "50%",
      left: "45%",
      isActive: false,
    },
    {
      url: "./src/assets/media/tr5.png",
      top: "45%",
      left: "55%",
      isActive: false,
    },
    {
      url: "./src/assets/media/tr6.png",
      top: "50%",
      left: "50%",
      isActive: true,
    },
  ];
  return (
    <div className="w-full min-h-screen pt-px relative select-none">
      <div className="wrap w-full relative">
        <div className="flex items-start justify-start flex-col gap-2 px-5 md:px-10 mt-44">
          <h1 className="text-6xl font-medium tracking-tight sm:text-9xl">
            Portfolio
          </h1>
          <h2 className="text-2xl font-normal sm:text-4xl">
            Web Design, Webflow, Creative Development, and beyond
          </h2>
          <div className="h-0.5 w-[95%] my-7 bg-zinc-50 opacity-35" />
          <div className="w-[95%] pb-5 relative flex items-start justify-between flex-col md:flex-row gap-10 overflow-hidden">
            <p className="text-lg">
              Refokus is a top Webflow Agency combining high-end design with
              Webflow <br /> Development expertise.
            </p>
            <div className="imageOnScroll h-64 w-64 bg-lime-100 rounded relative">
              {images.map(
                (elem, index) =>
                  elem.isActive && (
                    <img
                      key={index}
                      className="w-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded"
                      src={elem.url}
                      style={{ top: elem.top, left: elem.left }}
                      alt="shsss"
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
