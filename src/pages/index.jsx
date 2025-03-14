import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
import { ProductListing } from "../components/product-listing"
import { ProductTypeSection } from "../components/product-type-section"
import { Seo } from "../components/seo"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Recaptcha from "../components/recaptcha"
import LocationPicOne from "../images/front_of_store.jpeg"
import LocationPicTwo from "../images/front_of_store_2.jpeg"
import { Helmet } from "react-helmet";


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
  submitButton,
  locationImage,
  locationImageWrapper,
  mapWrapper,
  locationHelpText,
  emailPhotoLink,
  halloweenContestLinkWrapper,
  halloweenLinkHeaderText
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
      <div className={halloweenContestLinkWrapper}>
        <h1 className={halloweenLinkHeaderText}>Happy Spring! Check out our sale items!</h1>
        {/* <Link className={emailPhotoLink} to="/halloweencontest">Click Here!</Link> */}
      </div>
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
            href="mailto: sales@fairportcomputer.com">
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
            action="/thank-you"
          >
            <input type="hidden" name="form-name" value="Fairport Computers Contact Form" />
            <div className={formEmail}>
              <label style={{ marginRight: "10px" }}>Name</label>
              <input type="text" name="name" />
            </div>
            <div className={formEmail}>
              <label style={{ marginRight: "10px" }}>Email</label>
              <input type="email" name="email" />
            </div>
            <div className={formEmail}>
              <label style={{ marginRight: "10px" }}>Phone</label>
              <input type="tel" name="phone" />
            </div>
            <div className={formTextArea}>
              <label>How can we help?</label>
              <textarea name="message" />
            </div>
            <div style={{ margin: "10px" }}>
              <GoogleReCaptchaProvider reCaptchaKey="6LeKGGApAAAAAFHqUMBHjpurs49F61ybKCsbH4Wh">
                <Recaptcha />
              </GoogleReCaptchaProvider>
            </div>
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
        <h2 style={{fontSize: "1.5rem", textAlign: "center"}}>150 Packetts Landing, Fairport, NY 14450</h2>
        <br />
        <p className={locationHelpText}>Located on Main Street, inside Packetts Landing, lower level</p>
        <p className={locationHelpText}>South of the lift bridge, across from the library</p>
        <br />
        <div className={locationImageWrapper}>
          <img className={locationImage} src={LocationPicTwo} />

          <img className={locationImage} src={LocationPicOne} />
        </div>
        <iframe className={mapWrapper} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11652.681646745279!2d-77.4418089!3d43.1009335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6ccab11802f45%3A0xf8dfc66de116cb77!2sFairport%20Computers!5e0!3m2!1sen!2sus!4v1706284306625!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Helmet>
      <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=ec255741-a492-448d-ab5f-6cef6719d5f3"> </script>      </Helmet>
    </Layout>
  )
}

export const Head = () => <Seo />
