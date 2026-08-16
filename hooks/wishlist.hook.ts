import WishListContext from "@/contexts/wishlist.context"
import { useContext } from "react"

// custom hook 
// cannot use conditional
// for reusable hook
export const useWishlist = ()=>{
    if(!WishListContext){
        console.log("useWishlist hook must be used inside wishlist provider");
    }
    return useContext(WishListContext);
};