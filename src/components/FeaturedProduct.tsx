import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
   {
      id: 1,
      image: assets.versace,
      title: "Versace Eros",
      description: "A fresh and woody fragrance with notes of mint, green apple, and tonka bean.",
   },
   {
      id: 2,
      image: assets.coco_mademoiselle_chanel,
      title: "Coco Mademoiselle",
      description: "A modern and sophisticated scent with notes of orange, jasmine, and rose.",
   },
   {
      id: 3,
      image: assets.coco_noir_chanel,
      title: "Coco Noir",
      description: "An intense and mysterious fragrance with notes of grapefruit, rose, and patchouli.",
   },
];

const FeaturedProduct = () => {
   return (
      <div className="mt-14">
         <div className="flex flex-col items-center">
            <p className="text-3xl font-medium">Featured Products</p>
            <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
            {products.map(({ id, image, title, description }) => (
               <div key={id} className="relative group h-96">
                  <Image
                     src={image}
                     alt={title}
                     className=" brightness-75 group-hover:brightness-50 transition duration-300 w-full h-full object-cover"
                  />
                  <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
                     <p className="font-medium text-xl lg:text-2xl">{title}</p>
                     <p className="text-sm lg:text-base leading-5 max-w-60">
                        {description}
                     </p>
                     <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                        Buy now <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FeaturedProduct;