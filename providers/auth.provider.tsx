'use client'
import { addToWishList, getAllWishList, removeWishList } from '@/api/wishList.api'
import WishlistContext from '@/contexts/wishlist.context'
import { IProduct } from '@/types/product.type'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = useQueryClient()
    const { isLoading, data } = useQuery({
        queryFn: getAllWishList,
        queryKey: ['get-wishlist'],
        retry: false,
    })

    const { mutate: create, isPending: createPending } = useMutation({
        mutationFn: addToWishList,
        onSuccess: (response) => {
            toast.success(response.message ?? 'product added to wishlist')
            queryClient.invalidateQueries({ queryKey: ['get-wishlist'], })
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            toast.error(error.message ?? 'something went wrong')
        },
    })

    const { mutate: remove, isPending: removePending } = useMutation({
        mutationFn: removeWishList,
        onSuccess: (response) => {
            toast.success(response.message ?? 'product removed wishlist')
            queryClient.invalidateQueries({ queryKey: ['get-wishlist'], })

        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            toast.error(error.message ?? 'something went wrong')
        },
    })



    const addToWishlist = (productId: string) => {
        create(productId)
    }

    const removeFromWishlist = (productId: string) => {
        remove(productId)
    }

    const isExists = (productId: string) => {
        const list = data?.data?.products?.find((product: IProduct) => product._id === productId)
        return !!list
    }



    return (
        <WishlistContext.Provider value={{
            wishlist: data?.data,
            addToWishlist,
            isLoading: !!isLoading || !!removePending || !!createPending,
            removeFromWishlist,
            isExists,
        }}>
            {children}

        </WishlistContext.Provider>
    )
}

export default WishlistProvider