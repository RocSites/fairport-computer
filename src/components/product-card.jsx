import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"
import Logo from "../icons/logo"
import NoImagePlaceholder from "../images/no_image_available.jpeg"

import {
  productCardStyle,
  productHeadingStyle,
  productImageStyle,
  productDetailsStyle,
  productVendorStyle,
  productPrice,
} from "./product-card.module.css"

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    media,
    vendor,
    storefrontImages,
  } = product


  let firstImage;

  if (media === undefined) {
    firstImage = []
  } else {
    firstImage = media[0]?.preview.image
  }

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  const defaultImageHeight = 200
  const defaultImageWidth = 200
  let storefrontImageData = {}
  let storefrontImage;

  if (storefrontImages) {
    if (storefrontImages.edges[0] === undefined) {
      storefrontImage = "";
    } else {
      storefrontImage = storefrontImages.edges[0].node
    }
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: defaultImageWidth,
        height: defaultImageHeight,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const hasImage = firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length
  return (
    <Link
      className={productCardStyle}
      to={slug}
      aria-label={`View ${title} product page`}
    >
      {hasImage
        ? (
          <div className={productImageStyle} data-name="product-image-box">
            {storefrontImageData.images !== undefined ||  firstImage?.gatsbyImageData !== undefined ? (
              <GatsbyImage
                alt={firstImage?.altText ?? title}
                image={firstImage?.gatsbyImageData ?? storefrontImageData}
                loading={eager ? "eager" : "lazy"}
              />
            ) : <img style={{margin: "auto", height: "200px", width: "200px"}} src={NoImagePlaceholder} />
            }

          </div>
        ) : (
          <div style={{ height: defaultImageHeight, width: defaultImageWidth }}>
            <img style={{margin: "auto !important"}} src={NoImagePlaceholder} />
          </div>
        )
      }
      <div className={productDetailsStyle}>
        <div className={productVendorStyle}>{vendor}</div>
        <h2 as="h2" className={productHeadingStyle}>
          {title}
        </h2>
        <div className={productPrice}>{price}</div>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    media {
      preview {
        image {
          altText
          gatsbyImageData(aspectRatio: 1, width: 640)

        }
      }
      id
    }
    # images {
    #   id
    #   altText
    #   gatsbyImageData(aspectRatio: 1, width: 640)
    # }

    
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
  }
`
