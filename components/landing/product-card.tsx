import { IProduct } from '@/types/product.type'
import Image from 'next/image';
import React from 'react'
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Button from '../common/button';
import Link from 'next/link';


interface IProps{
    product: IProduct
}
const ProductCard = ({product:{cover_image,name, description, category, brand, price, _id}}: IProps) => {
  return (
    <Link className='' href={`/products/${_id}?q=${name}&d=${description}`}>
        <article className='min-w-80 max-w-90 border border-gray-300 p-1.5 rounded-md'>
            {/* image: cover image */}
            <div className='w-full h-50 aspect-video border border-primary/50 rounded-md'>
                <Image
                    src={cover_image.path}
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

            {/* button */}
            <Button label='View Detail'/>
        </article>
    </Link>
  )
}

export default ProductCard
