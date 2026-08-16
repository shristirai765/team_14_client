import { IProduct } from "./product.type"
import { TUser } from "./user.type";

export type TWishlist = {
    _id: string
    product: IProduct;
    user: TUser;
}