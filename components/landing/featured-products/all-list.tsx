"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";
import { IProduct } from "@/types/product.type";
import ProductCard from "../product-card";
import { getAllProducts } from "@/api/product.api";

const AllProductList = () => {
  const { isLoading, data } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["get-all-products"]
  });

  console.log("all products", data);

  return (
    <>
      {/* Loading state */}
      {isLoading && <p>Loading products...</p>}

      {/* Products not found */}
      {!isLoading && data?.data?.length === 0 && (
        <p>Product not found.</p>
      )}

      {/* Products found */}
      {!isLoading && data?.data?.length > 0 && (
        <div className="grid grid-cols-4 gap-6 mt-5">
          {data.data.map((product: IProduct) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AllProductList;