import { IProduct } from '@/types/product.type'
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Button from '../common/button';
import Link from 'next/link';
import { FaRegHeart } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import WishListContext from '@/contexts/wishlist.context';


interface IProps{
    product: IProduct,
}
const ProductCard = ({product:{cover_image,name, description, category, brand, price, _id}}: IProps) => {

    // use mutation 
    const {addToWishlist, isExists, isLoading, removeFromWishlist} = useContext(WishListContext);
    
  return (
    
        <article className='min-w-80 max-w-90 border border-gray-300 p-1.5 rounded-md relative'>

            {/* add to wishlist */}
                <button
                    disabled = {isLoading} 
                    onClick={(e)=>{
                        e.stopPropagation()
                        if(isExists(_id)){
                            removeFromWishlist(_id);
                        }else{
                            addToWishlist(_id);
                        }
                    }}
                    title={isExists(_id) ? "remove from wishList": 'add to wishlist' }
                    className='border border-primary w-fit absolute top-2 right-3 z-100 h-12 aspect-square bg-primary/20 rounded-full flex justify-center items-center'
                >
                    {isExists(_id) ? <IoMdHeart size={24} className='text-primary' /> : <FaRegHeart size={22} className='text-gray-800' />}
                </button>
            {/* image: cover image */}
            <div className='w-full h-50 aspect-video border border-primary/50 rounded-md'>
                <Image
                    src={cover_image?.path || '/placeholder-hero.jpg'}
                    alt={name + "-" + "cover image"}
                    height={800}
                    width={800}
                    className='w-full h-full rounded-t-md'
                />
            </div>
            
            <div className='px-1'>
                {/* name */}
                <p className='text-lg line-clamp-1 font-semibold text-primary mt-2'>{name}</p>
                <div className='flex gap-2 my-2'>
                    {category && <p className='p-0.5 px-2 rounded-md text-xs font-semibold bg-primary-light border border-primary text-gray-600'>{category.name}</p>}
                    {brand && <p className='p-0.5 px-2 rounded-md text-xs font-semibold bg-primary-light border border-primary text-gray-600'>{brand.name}</p>}
                </div>
                {/* price */}
                <div className='flex gap-1 items-center mb-1'>
                    <TbCurrencyRupeeNepalese />
                    <p className='text-primary font-semibold'>{price}</p>
                </div>
                {/* desc */}
                <p className='line-clamp-3 text-sm leading-4.5 mb-4 text-gray-500'>{description}</p>
            </div>
            <Link className='' href={`/products/${_id}?q=${name}&d=${description}`}>
                {/* button */}
                <Button label='View Detail' />
            </Link>
        </article>
    
  )
}

export default ProductCard
