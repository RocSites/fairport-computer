import * as React from "react"
import Logo from "../icons/logo"
import InstagramIcon from "../icons/instagram"
import FacebookIcon from "../icons/facebook"
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
          <Logo />
        </div>
        <strong>Fairport Computers</strong>
      </div>
      <nav className={links} aria-label="footer">
        <a target="_blank" href="https://www.instagram.com/fairportcomputers/?igsh=MTF1ZXI4OGlndWI2cQ%3D%3D">
          <InstagramIcon color="#ffffff" />
        </a>
        <a target="_blank" href="https://www.facebook.com/p/Fairport-Computers-100064346310178/">
          <FacebookIcon color="#ffffff"/>
        </a>
      </nav>
      <div className={copyright}>
        Fairport Computers &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
