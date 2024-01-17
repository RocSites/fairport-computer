import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { ProductTypeSection } from "../components/product-type-section"
import { Seo } from "../components/seo"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
  featuredProductsText
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
    allShopifyProduct(filter: {}) {
    edges {
      node {
        ...ProductCard
        productType
      }
    }
    productTypes: distinct(field: {productType: SELECT})
  }
  }
`
function Hero(props) {
  return (
    <div className={container}>
      <h1 className={intro}>The Best Brands at Better Prices.</h1>
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <h1 className={featuredProductsText}>Featured Products/Services</h1>
      {/* <div style={{minHeight: "50vh"}}>background picture or featured content goes here</div> */}
      <ProductListing products={data?.shopifyCollection?.products} />

      {/* TODO - refactor to be dynamic like navigation is  */}
      <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"Laptop"}
        productTypes={data?.allShopifyProduct?.productTypes} 
      />
         <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"Desktop"}
        productTypes={data?.allShopifyProduct?.productTypes} 
      />
         <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"All-In-One"}
        productTypes={data?.allShopifyProduct?.productTypes} 
      />
         <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"Accessories & Parts"}
        productTypes={data?.allShopifyProduct?.productTypes} 
      />
         <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"Service & Drop Off"}
        productTypes={data?.allShopifyProduct?.productTypes} 
      />

    </Layout>
  )
}

export const Head = () => <Seo />
