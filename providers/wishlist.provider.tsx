import { getAllWishList, addToWishList, removeWishList } from '@/api/wishList.api'
import WishListContext from '@/contexts/wishlist.context'
import { TWishlist } from '@/types/wishlist.type'
import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { Children } from 'react'
import toast from 'react-hot-toast'

const WishlistProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const queryClient = useQueryClient()
    const {data, isLoading} = useQuery({
        queryFn: getAllWishList,
        queryKey: ["get-wish-list"]
    })

    const {mutate: create, isPending: createPending} = useMutation({
        mutationFn: addToWishList,
        onSuccess: (response)=>{
            toast.success(response.message ?? "product added to wishlist")
            queryClient.invalidateQueries({queryKey: ["get-wish-list"]})
        },
        onError: (error:any)=>{
            toast.error(error.message ?? "something went wrong")
        }
    })

    const {mutate: remove, isPending: removePending} = useMutation({
        mutationFn: removeWishList,
        onSuccess: (response)=>{
            toast.success(response.message ?? "product removed from wishlist")
            queryClient.invalidateQueries({queryKey: ["get-wish-list"]})

        },
        onError: (error:any)=>{
            toast.error(error.message ?? "something went wrong")
        }
    })
    const addToWishlist = (productId: string)=>{
        create(productId)
    }
    const removeFromWishlist = (productId: string)=>{
        remove(productId);
    }
    const isExists = (productId: string)=>{
        const list = data?.data.find((list: TWishlist)=> list.product._id === productId);
        return !!list;
    }
  return (
    <WishListContext.Provider value ={{
        wishlist: data?.data,
        addToWishlist ,
        removeFromWishlist ,
        isExists ,
        isLoading : !!isLoading || !!createPending || !!removePending,
    }}>

        {children}
      
    </WishListContext.Provider>
  )
}

export default WishlistProvider
