import React from 'react'
import { ProductListing } from "../components/product-listing"


export function ProductTypeSection(props) {
    const filteredProducts = props.products.filter(prod => prod.productType === `${props.filterBy}`)
  return (
    <div style={{backgroundColor: "#f3f3f3", padding: "16px", margin: "24px 0"}}>
        <h1 style={{fontWeight: "600", color: "black", marginLeft: "48px", marginBottom: "16px", fontSize: "1.5rem"}}>{props.filterBy}</h1>
        <ProductListing products={filteredProducts} />
    </div>
  )
}

