import React from 'react'
import { ProductListing } from "../components/product-listing"


export function ProductTypeSection(props) {
    const filteredProducts = props.products.filter(prod => prod.productType === `${props.filterBy}`)
  return (
    <div>
        <h1>{props.filterBy}</h1>
        <ProductListing products={filteredProducts} />

    </div>
  )
}

