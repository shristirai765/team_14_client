import { IProduct } from "./product.type"
import { TUser } from "./user.type";

export type TWishlist = {
    product: IProduct;
    user: TUser;
}