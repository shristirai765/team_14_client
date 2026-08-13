import { Image } from "./global.types"

export type ICategory= {
    _id: string,
    name: string,
    logo: Image;
    description?: string;
};