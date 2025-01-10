import React from "react";
import Product from "./Product";

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
  return (
    <div className="min-h-screen w-full">
      {products.map((elem, index) => (
        <Product key={index} elem={elem} />
      ))}
    </div>
  );
};

export default Products;
