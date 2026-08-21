"use client"
import { getAllWishList } from '@/api/wishList.api';
import { IProduct, TProduct } from '@/types/product.type';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from '@/components/common/button';
import Image from 'next/image';
import { TWishlist } from '@/types/wishlist.type';
import { useWishlist } from '@/hooks/wishlist.hook';
import { IoMdHeart } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa6';
import { TbCurrencyRupeeNepalese } from 'react-icons/tb';
import Link from 'next/link';

interface IProps{
    product: IProduct,
}

const WishListPage = ({product:{cover_image ,name, description, category, brand, price, _id}}: IProps) => {

    // const {isLoading, data} = useQuery({
    //     queryFn: getAllWishList,
    //     queryKey: ["get-all-wishlist"]
    // })
    // if (isLoading) return <div>Loading...</div>;

    // const rawWishlist = data?.data;
    // const wishlistProducts = Array.isArray(rawWishlist) 
    //     ? rawWishlist[0]?.product 
    //     : rawWishlist?.product;

    // if (!wishlistProducts || wishlistProducts.length === 0) {
    //     return <div className="p-4 text-gray-500">Your wishlist is empty.</div>;
    // }

    // console.log(data?.data)
    const {addToWishlist, isExists, isLoading, removeFromWishlist} = useWishlist();
    

    return (
        <article className='min-w-80 max-w-90 border border-gray-300 p-1.5 rounded-md relative'>

            {/* add to wishlist */}
                <button
                    disabled = {isLoading} 
                    onClick={(e)=>{
                        e.stopPropagation()
                        removeFromWishlist(_id);
                        
                    }}
                    className='border border-primary w-fit absolute top-2 right-3 z-100 h-12 aspect-square bg-primary/20 rounded-full flex justify-center items-center cursor-pointer'
                >
                     <IoMdHeart size={24} className='text-primary' />
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
        // <div className='container px-4 py-4 w-300'>
        //     <h1 className='font-bold text-lg mb-5 text-gray-700'>Wish List</h1>

        //     <div className='overflow-x-auto border border-gray-400 rounded-md shadow-md'>
        //         <table className=' text-sm text-left min-w-full divide-y divide-gray-400 bg-white '>
        //             <thead className='g-gray-50 text-md font-semibold uppercase text-gray-700'>
        //                 <tr className='divide-x'>
        //                     <th className='px-6 py-4'>Product</th>
        //                     <th className='px-6 py-4'>Quantity</th>
        //                     <th className='px-6 py-4'>Price</th>
        //                     <th className='px-6 py-4'>Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody className='divide-y divide-gray-400'>
        //                 {
        //                     data?.data[0].product?.map((product: IProduct)=>(
        //                         <tr key={product._id} className='hover:bg-amber-100  divide-x'>
        //                             <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{product.name}</td>
        //                             <Image
        //                                 src={product.cover_image?.path || '/placeholder-hero.jpg'}
        //                                 alt={name + "-" + "cover image"}
        //                                 height={800}
        //                                 width={800}
        //                                 className='w-full h-full rounded-t-md'
        //                             />
        //                             {/* <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{product.cover_image}</td> */}
        //                             {/* <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'></td> */}
        //                             <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{product.price}</td>
        //                             <td>
        //                                 <div className='flex gap-3'>
        //                                     <Button label='Add To Cart'/>
        //                                     <RiDeleteBin5Line size={24} />
        //                                 </div>
        //                             </td>

        //                         </tr>
        //                     ))
        //                 }
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    )
}

export default WishListPage;
