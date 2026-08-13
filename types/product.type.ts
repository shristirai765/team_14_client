
import * as yup from "yup"
import { Image } from "./global.types"
import { productSchema } from "@/schemas/product.schema"
import { ICategory } from "./category.type"

export type TProduct = yup.InferType<typeof productSchema>

export type IProduct = {
    _id:string,
    name:string,
    price: number,
    category:ICategory,
    brand:ICategory,
    cover_image:Image,
    images:Image[],
    description?:string,
    is_featured:boolean,
    new_arrivals:boolean,
    

}