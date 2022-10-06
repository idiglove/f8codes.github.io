import React, { useState } from "react"
import "./../scss/style.scss"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.css"
import "react-sticky-header/styles.css"
import { Nav, Navbar } from "react-bootstrap"
import "react-sweet-progress/lib/style.css"
import Link from "gatsby-link"
import "../fonts/fonts.css"
import About from "./../components/About"
import Skills from "./../components/Skills"
import Education from "./../components/Education"
import Portfolio from "./../components/Portfolio"
import ProfilePicPng from "./../img/pic.png"

import {
  Appwrapper,
  HomeWrapper,
  HomeSidebar,
  HomeBodyWrapper,
  ProfilePicWrapper,
  ProfilePic,
  HomeName,
  SidebarLinks,
  HomeHeader,
  MobileLinksNavbar,
} from "./../styles/home-styles"

export default function Index() {
  const [contentOption, setContentOption] = useState(<About />)

  return (
    <Appwrapper>
      <Helmet>
        <title>Faith Morante - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Faith Morante - Full Stack Web Developer - React expert, create custom apps, blogs, ecommerce"
        />
      </Helmet>

      <HomeWrapper>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          src="/assets/abstract-blue-video.mp4"
        ></video>
        <h1>
          Hi! <br /> I'm Faith Morante!
        </h1>
      </HomeWrapper>

      <p>test padsa</p>
      <p>test padsa</p>
      <p>test padsa</p>
      <p>test padsa</p>
    </Appwrapper>
  )
}
