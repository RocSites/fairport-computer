import { graphql, useStaticQuery, Link } from "gatsby"
import React, { useState } from 'react'
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink, navLinkMobile } from "./navigation.module.css"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';

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
      </nav>
      <nav className={navLinkMobile}>
        <MenuIcon
          // className={classes.hamburgerIcon}
          onClick={toggleDrawer}
        />
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer}
          anchor="left"
          // className={classes.drawerRoot}
        >
          <div
            // className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              <div>
              {/* <div className={classes.drawerLinkWrapper}> */}
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
              </div>

            </List>
          </div>
        </Drawer>

      </nav>
    </>

  )
}
