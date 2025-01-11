import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  let products = [
    {
      title: "Cula",
      altText:
        "Web Design, Webflow Development, Creative Development, 3D Animations",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
    },
    {
      title: "BCG Platinion",
      altText:
        "Strategy, Web Design, Webflow Development, Creative Development",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
      live: true,
    },
    {
      title: "Arqitel",
      altText:
        "Web Design, Webflow Development, Creative Development, 3D Animations",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
    },
    {
      title: "Lavender",
      altText:
        "Branding, Web Design, Webflow Development, Creative Development",
      description:
        "An interactive website that blends playful design with smart functionality to highlight Thymbs’ innovative platform.",
      live: true,
    },
    {
      title: "Sevdesk",
      altText: "Srategy, Webflow Development",
      description:
        "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
      live: true,
    },
  ];

  let vIDS = [
    { vid: "/cula-43.webm" },
    { vid: "/bcgp-43.webm" },
    { vid: "/arqitel-43.webm" },
    { vid: "/lavender-43.webm" },
    { vid: "/sevdesk-43.webm" },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 18.5);
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col gap-1">
      {products.map((elem, index) => (
        <Product elem={elem} mover={mover} count={index} key={index} />
      ))}
      <div className="h-full w-full hidden md:block absolute -top-3 pointer-events-none">
        {/* i have to apply the effect on this one */}
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
          className="window absolute w-[30rem] h-[18.5rem] left-1/4 top-0 rounded-lg overflow-hidden"
          style={{ scale: 1.15 }}
        >
          {vIDS.map((item, i) => (
            <motion.div
              key={i}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
              className="w-full h-full"
            >
              <video
                loop
                autoPlay
                muted
                src={item.vid}
                className="h-full w-full object-cover"
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
