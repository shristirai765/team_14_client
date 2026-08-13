"use client"
import React from 'react'
import ProductCard from '../product-card'
import { IProduct } from '@/types/product.type'
import { useQuery } from '@tanstack/react-query'
import { getAllFeaturedProducts } from '@/api/product.api'

// const products = [
//     {
//         name: "Product",
//         price: 1200,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque perspiciatis ad! Unde fugiat, eos delectus mollitia itaque cum voluptate aperiam, neque deleniti magnam similique necessitatibus qui! Possimus, praesentium obcaecati.",
//         _id:"1",
//         cover_image:{
//             path: "/hero.png",
//             public_id: "1"
//         },
//         brand:{
//             name: "Brand"
//         },
//         category:{
//             name: "Category"
//         },
//         images:[
//             {
//                 path: "/hero.png",
//                 public_id: "1"
//             },
//             {
//                 path: "/hero.png",
//                 public_id: "2"
//             }
//         ]
//     }
// ]

const FeaturedProductList = () => {

    const {isLoading, data} = useQuery({
        queryFn: getAllFeaturedProducts,
        queryKey: ["get-featured-products"]
    })
    console.log(data)
  return (
    <div className='grid grid-cols-4 gap-10 mt-5 '>
        {
            data?.data?.map((product: IProduct)=> <ProductCard key={product._id} product={product}/>)
        }
    </div>
  )
}

export default FeaturedProductList
