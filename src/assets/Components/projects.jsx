import React from "react";

import Waffle from "../../assets/image-waffle-mobile.jpg";
import crime from "../../assets/image-creme-brulee-mobile.jpg";
import Macaron from "../../assets/image-macaron-mobile.jpg";
import Tiramisu from "../../assets/image-tiramisu-mobile.jpg";
import Baklava from "../../assets/image-baklava-mobile.jpg";
import Pie from "../../assets/image-tiramisu-desktop.jpg";
import Cake from "../../assets/image-cake-mobile.jpg";
import Brownie from "../../assets/image-brownie-mobile.jpg";

const projects = [
  {
    id: 1,
    name: "Waffile",
    productName: "Waffle with berries",
    image: Waffle,
    India$: "$2.00",
  },
  {
    id: 2,
    name: "crime",
    productName: "Vanilla Bean Crime Brulee",
    image: crime,
    India$: "",
  },
  {
    id: 3,
    name: "Macaron",
    productName: "Macaron mix of Five",
    image: Macaron,
    India$: "",
  },
  {
    id: 4,
    name: "Tiranmisu",
    productName: "Classic Tiramisu",
    image: Tiramisu,
    India$: "",
  },
  {
    id: 5,
    name: "Baklava",
    productName: "Pistachio Baklava",
    image: Baklava,
    India$: "",
  },
  {
    id: 6,
    name: "Pie",
    productName: "Lemon Meringue Pie",
    image: Pie,
    India$: "",
  },
  {
    id: 7,
    name: "Cake",
    productName: "Red velvet cake ",
    image: Cake,
    India$: "",
  },
  {
    id: 8,
    name: "Browine ",
    productName: "satted Caramel Brownie",
    image: Brownie,
    India$: "",
  },
  {
    id: 8,
    name: "Browine ",
    productName: "satted Caramel Brownie",
    image: Brownie,
    India$: "",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img src={project.image} alt={project.name} />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.productName}</p>

              <a
                href={project.India$}
                className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                add to cart
              </a>
              <p className="text-[red] ">$2.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
