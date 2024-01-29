import { graphql, useStaticQuery, Link } from "gatsby"
import React, { useState } from 'react'
import InstagramIcon from "../icons/instagram"
import FacebookIcon from "../icons/facebook"
import slugify from "@sindresorhus/slugify"
import {
  navStyle,
  navLink,
  activeLink,
  navLinkMobile,
  drawerLinkWrapper,
  navButtonMobile,
  list,
  menuIcon
} from "./navigation.module.css"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { AnchorLink } from "gatsby-plugin-anchor-links";


export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    {
      allShopifyProduct {
        productTypes: distinct(field: { productType: SELECT })
      }
    }
  `)

  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  return (
    <>
      <nav className={[navStyle, className].join(" ")}>
        <Link
          key="All"
          className={navLink}
          to="/products/"
          activeClassName={activeLink}
        >
          All products
        </Link>
        {productTypes.map((name) => (
          <Link
            key={name}
            className={navLink}
            to={`/products/${slugify(name)}`}
            activeClassName={activeLink}
          >
            {name}
          </Link>
        ))}
        <Link to="/services" className={navLink}>Service/Drop Off</Link>
        <AnchorLink
          className={navLink}
          to="#contact-us"
          activeClassName={activeLink}
        >
          Contact Us
        </AnchorLink>
      </nav>
      <nav className={navLinkMobile}>
        <MenuIcon
          className={menuIcon}
          onClick={toggleDrawer}
        />
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer}
          anchor="left"
        // className={classes.drawerRoot}
        >
          <div
            className={list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              <div className={drawerLinkWrapper}>
                <Link
                  key="All"
                  className={navButtonMobile}
                  to="/products/"
                  activeClassName={activeLink}
                >
                  All products
                </Link>
                {productTypes.map((name) => (
                  <Link
                    key={name}
                    className={navButtonMobile}
                    to={`/products/${slugify(name)}`}
                    activeClassName={activeLink}
                  >
                    {name}
                  </Link>
                ))}
                <div style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "14px",
                  marginTop: "10px"
                }}>
                  <a style={{ marginRight: "10px" }} target="_blank" href="https://www.instagram.com/fairportcomputers/?igsh=MTF1ZXI4OGlndWI2cQ%3D%3D">
                    <InstagramIcon color="#016cc7" />
                  </a>
                  <a target="_blank" href="https://www.facebook.com/p/Fairport-Computers-100064346310178/">
                    <FacebookIcon color="#016cc7" />
                  </a>
                </div>

              </div>

            </List>
          </div>
        </Drawer>

      </nav>
    </>

  )
}
