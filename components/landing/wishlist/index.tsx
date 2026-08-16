"use client"
import { getAllWishList } from '@/api/wishList.api';
import { IProduct, TProduct } from '@/types/product.type';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from '@/components/common/button';
import Image from 'next/image';

interface IProps{
    product: IProduct,
}

const WishListPage = ({product:{cover_image,name, description, category, brand, price, _id}}: IProps) => {

    const {isLoading, data} = useQuery({
        queryFn: getAllWishList,
        queryKey: ["get-all-wishlist"]
    })
    if (isLoading) return <div>Loading...</div>;

    const rawWishlist = data?.data;
    const wishlistProducts = Array.isArray(rawWishlist) 
        ? rawWishlist[0]?.product 
        : rawWishlist?.product;

    if (!wishlistProducts || wishlistProducts.length === 0) {
        return <div className="p-4 text-gray-500">Your wishlist is empty.</div>;
    }

    return (
        <div className='container px-4 py-4 w-300'>
            <h1 className='font-bold text-lg mb-5 text-gray-700'>Wish List</h1>

            <div className='overflow-x-auto border border-gray-400 rounded-md shadow-md'>
                <table className=' text-sm text-left min-w-full divide-y divide-gray-400 bg-white '>
                    <thead className='g-gray-50 text-md font-semibold uppercase text-gray-700'>
                        <tr className='divide-x'>
                            <th className='px-6 py-4'>Product</th>
                            <th className='px-6 py-4'>Quantity</th>
                            <th className='px-6 py-4'>Price</th>
                            <th className='px-6 py-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-400'>
                        {
                            wishlistProducts.map((product: IProduct)=>(
                                <tr key={product._id} className='hover:bg-amber-100  divide-x'>
                                    <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{product.name}</td>
                                    <Image
                                        src={cover_image?.path || '/placeholder-hero.jpg'}
                                        alt={name + "-" + "cover image"}
                                        height={800}
                                        width={800}
                                        className='w-full h-full rounded-t-md'
                                    />
                                    {/* <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{product.cover_image}</td> */}
                                    <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'></td>
                                    <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{product.price}</td>
                                    <td>
                                        <div className='flex gap-3'>
                                            <Button label='Add To Cart'/>
                                            <RiDeleteBin5Line size={24} />
                                        </div>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WishListPage;
