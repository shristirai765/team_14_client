import BrandForm from "@/components/admin/form/brand.form";
import CategoryForm from "@/components/admin/form/category.form";
import ProductForm from "@/components/admin/form/product.form";

import React from 'react'

const BrandPage = () => {
  return (
    <main>
        <BrandForm/>
        <CategoryForm/>
        <ProductForm/>
    </main>
  )
}

export default BrandPage