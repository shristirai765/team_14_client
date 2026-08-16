"use client"
import { getById } from '@/api/product.api'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProductCard from '../product-card';
import { IProduct } from '@/types/product.type';

interface ProductProps{
    productId: string;
}

const SelectedListProduct = ({productId}: ProductProps) => {
    
    const {isLoading, data} = useQuery({
        queryKey: ["get-by-id", productId],
        queryFn: ()=> getById(productId),

        enabled: !!productId, 
    });

  return (
    <>
        {isLoading && "Loading the products"}

        {/* not found */}
        {!isLoading && data?.data?.length === 0 && (
            <p>Product not found</p>
        )}
        {!isLoading && data?.data?.length > 0 && (
            // <div>
            //     {data?.data?.map((product: IProduct)=>{
            //         <ProductCard
            //             key={product._id}
            //             product={product}
            //         />
            //     })}
            // </div>
            <div>
                <h1>{data?.title || data?.name}</h1>
                <p>{data?.description}</p>
            </div>
        )}
      
    </>
  )
}

export default SelectedListProduct
