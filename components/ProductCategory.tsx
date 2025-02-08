"use client"
import { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import Image from "next/image";
import React from "react";

import productsData from "../utils/products.json";

const products = productsData;

export default function ProductCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const categories = ["Tất cả", "Đèn LED", "Mica", "Alu"];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Danh mục sản phẩm</h2>
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products
          .filter(product => selectedCategory === "Tất cả" || product.name.includes(selectedCategory))
          .map((product) => (
            <Card key={product.id} className="shadow-lg hover:shadow-xl transition">
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                  <a href={`/product/${product.id}`}>Xem chi tiết</a>
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
