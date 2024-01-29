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
  featuredProductsText,
  contactUsWrapper,
  contactSubText,
  formRoot,
  formEmail,
  formTextArea,
  callButton,
  contactButtonWrapper,
  submitButtonWrapper,
  submitButton
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
        filterBy={"Laptops"}
        productTypes={data?.allShopifyProduct?.productTypes}
      />
      <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"Desktops"}
        productTypes={data?.allShopifyProduct?.productTypes}
      />
      <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"All-In-Ones"}
        productTypes={data?.allShopifyProduct?.productTypes}
      />
      <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"Phones"}
        productTypes={data?.allShopifyProduct?.productTypes}
      />  <ProductTypeSection
        products={data?.allShopifyProduct?.edges.map(obj => obj.node)}
        filterBy={"Networking"}
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
      <div id="contact-us"></div>
      <div className={contactUsWrapper}>
        <h1 className={featuredProductsText}>Contact Us</h1>
        <div className={contactButtonWrapper}>
          <a
            href="tel:(585) 520-3840">
            <button className={callButton}>
              (585) 520-3840

            </button>
          </a>
          <a
            href="mailto: fairportcomputersales@gmail.com">
            <button className={callButton}>
              Email Us
            </button>
          </a>
        </div>

        <br />
        <h2 className={contactSubText}>How can we help you?</h2>
        <br />
        <p>Please fill out the form below:</p>

        <div className={formRoot}>
          <form
            name="Fairport Computers Contact Form"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
            action="/thank-you"
          >
            <input type="hidden" name="form-name" value="Fairport Computers Contact Form" />

            <div className={formEmail}>
              <label style={{ marginRight: "10px" }}>Email:</label>
              <input type="email" name="email" />
            </div>
            <div className={formEmail}>
              <label style={{ marginRight: "10px" }}>Phone:</label>
              <input type="tel" name="phone" />
            </div>
            <div className={formTextArea}>
              <label>How can we help?</label>
              <textarea name="message" />
            </div>
            {/* <div className={classes.captchaWrapper}>
          <ReCAPTCHA sitekey="6LevMeshAAAAAJ3QDvN0h3-gystjzxxMGZj094DL" />
        </div> */}
            <div
              className={submitButtonWrapper}
            >
              <button
                className={submitButton}
                type="submit"
              >Send</button>
            </div>
          </form>
        </div>
        <h1 className={featuredProductsText}>Location</h1>
        <h3>150 Packetts Landing, Fairport, NY 14450</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11652.681646745279!2d-77.4418089!3d43.1009335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6ccab11802f45%3A0xf8dfc66de116cb77!2sFairport%20Computers!5e0!3m2!1sen!2sus!4v1706284306625!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />
