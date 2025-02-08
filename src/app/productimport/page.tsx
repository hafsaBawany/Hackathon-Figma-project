'use client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanity = createClient({
  projectId: "ggvovqvl",
  dataset: "production",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description?: string;
  imageUrl?: string;
  category?: string;
  inventory?: number;
  colors?: string[];
  status?: string;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        "title": productName,
        price,
        description,
        "imageUrl": image.asset->url,
        category,
        inventory,
        colors,
        status
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("ERROR: Something went wrong", error);
    }
  };

  const truncateDescription = (description?: string) => {
    return description && description.length > 50
      ? description.substring(0, 50) + "..."
      : description || "No description available.";
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        {/* Sidebar */}
        <div className="w-full md:w-[360px] h-auto bg-gray-100 p-4 shadow-md">
          <div className="section1 space-y-3 mb-8">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Categories</h2>
            <div className="products_Name cursor-pointer hover:text-blue-600">All variety Shoes</div>
            <div className="products_Name cursor-pointer hover:text-blue-600">Banyan</div>
            <div className="products_Name cursor-pointer hover:text-blue-600">T-shirt branded</div>
            <div className="products_Name cursor-pointer hover:text-blue-600">Shorts with pockets</div>
            <div className="products_Name cursor-pointer hover:text-blue-600">Mittens with white gloves</div>
            <div className="products_Name cursor-pointer hover:text-blue-600">Nike joggers</div>
          </div>
          <div className="section2 flex flex-wrap justify-center gap-4">
            <img src="/Frame-1.svg" alt="Frame 1" className="w-[192px] h-[163px] rounded-md shadow-sm" />
            <img src="/Frame-2.svg" alt="Frame 2" className="w-[192px] h-[134px] rounded-md shadow-sm" />
            <img src="/Frame-3.svg" alt="Frame 3" className="w-[192px] h-[238px] rounded-md shadow-sm" />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 flex-1">
          <h2 className="text-center text-blue-700 mt-4 mb-4">Products from API Data</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white shadow-md rounded-lg hover:shadow-lg"
                >
                  <Image
                    src={product.imageUrl || "/placeholder.png"}
                    alt={product.title}
                    width={348}
                    height={348}
                    className="w-full h-[348px] object-cover rounded-t-lg"
                  />
                  <div className="p-4 text-[15px]">
                    <h1 className="text-[#9E3500] font-semibold">Just In</h1>
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-[#757575]">
                      {product.category || "Category not specified"}
                    </p>
                    <p className="text-[#757575]">
                      {product.colors && product.colors.length > 0
                        ? `Color-${product.colors.length}`
                        : "No colors available"}
                    </p>
                    <p className="font-bold">MRP: ₹ {product.price.toLocaleString()}</p>
                    <p className="text-gray-600 mt-2">
                      {truncateDescription(product.description)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCards;




