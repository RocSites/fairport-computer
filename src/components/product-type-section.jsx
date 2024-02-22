import React from 'react'
import { ProductListing } from "../components/product-listing"
import { Link } from "gatsby"
import slugify from "@sindresorhus/slugify"


export function ProductTypeSection(props) {
  const filteredProducts = props.products.filter(prod => prod.productType === `${props.filterBy}`).slice(0, 4);

  return (
    <>
      {filteredProducts.length > 0 ? (
        <div style={{
          padding: "16px",
          margin: "24px 0"
        }}>
          <h1 style={{ textAlign: "center", fontWeight: "600", color: "black", marginBottom: "16px", fontSize: "2.25rem" }}>{props.filterBy}</h1>
          <ProductListing products={filteredProducts} />
          <Link style={{display: "flex", justifyContent: "center"}} to={`products/${slugify(props.filterBy)}`}>
            <button style={{ backgroundColor: "#016cc7", borderRadius: "16px", padding: "15px", color: "white", margin: "48px" }}>Show all {props.filterBy}</button>
          </Link>
        </div>
      ) : null}

    </>
  )
}

