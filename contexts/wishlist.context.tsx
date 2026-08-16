
import { TWishlist } from "@/types/wishlist.type";
import { createContext } from "react";

// wishlist data -> []
// add to wishlist ()=>{}
// remove from wish list ()=>{}
// isIxists(productId) => boolean
type TWishlistContext = {
    wishlist: TWishlist | null,
    addToWishlist : (productId: string)=> void,
    removeFromWishlist : (productId: string)=> void,
    isExists : (productId: string) => boolean,
    isLoading: boolean
}
const initialValue : TWishlistContext = {
    wishlist: null,
    isLoading: false,
    addToWishlist: ()=>{},
    removeFromWishlist: ()=>{},
    isExists: ()=> false,
    
}
const WishListContext = createContext<TWishlistContext>(initialValue);

export default WishListContext;