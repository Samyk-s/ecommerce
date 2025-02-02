import React from "react";
import { Link } from "react-router-dom";

const OurCollection = () => {
  const collections = [
    { name: "Products", image: "/image3.jpg", link: "/collection/products" },
    { name: "Products", image: "/image4.jpg", link: "/collection/products" },
    { name: "Products", image: "/image5.jpg", link: "/collection/products" },
    { name: "Products", image: "/image6.jpg", link: "/collection/products" },
    { name: "Products", image: "/image3.jpg", link: "/collection/products" },
    { name: "Products", image: "/image4.jpg", link: "/collection/products" },
    { name: "Products", image: "/image5.jpg", link: "/collection/products" },
    { name: "Products", image: "/image6.jpg", link: "/collection/products" },
    
    
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Collection</h2>
      <div className="grid grid-cols-5 gap-4">
      {collections.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="relative group block overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-55 object-cover mx-auto rounded-md transition duration-300 group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gray-100 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className=" text-xl font-semibold">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurCollection;
