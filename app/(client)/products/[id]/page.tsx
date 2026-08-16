import AllProductList from '@/components/landing/featured-products/all-list'
import SelectedListProduct from '@/components/landing/featured-products/select-list'
import React from 'react'

const ProductDetailPage = () => {
  return (
    <section className="px-10 py-10">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold"></h1>

        <p className="text-sm text-text-secondary">Explore all our products</p>
      </div>

      All products
      {/* <SelectedListProduct/> */}
      {/* <AllProductList /> */}
    </section>
  )
}

export default ProductDetailPage
