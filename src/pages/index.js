import React, { useState } from "react";
import "./../scss/style.scss";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.css";
import "react-sticky-header/styles.css";
import { Nav, Navbar } from "react-bootstrap";
import "react-sweet-progress/lib/style.css";
import Link from "gatsby-link";
import "../fonts/fonts.css";
import About from "./../components/About";
import Skills from "./../components/Skills";
import Education from "./../components/Education";
import Portfolio from "./../components/Portfolio";
import ProfilePicPng from "./../img/pic.png";

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
} from "./../styles/home-styles";

export default function Index() {
  const [contentOption, setContentOption] = useState(<About />);

  return (
    <Appwrapper>
      <Helmet>
        <title>Faith Morante - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Faith Morante - Full Stack Web Developer"
        />
      </Helmet>

      <HomeWrapper>
        <HomeSidebar>
          <ProfilePicWrapper>
            <ProfilePic src={ProfilePicPng} />
          </ProfilePicWrapper>
          <HomeName>Faith Morante</HomeName>
          <SidebarLinks>
            <li onClick={() => setContentOption(<About />)}>About</li>
            <li onClick={() => setContentOption(<Skills />)}>Skills</li>
            <li onClick={() => setContentOption(<Education />)}>Education</li>
            <li onClick={() => setContentOption(<Portfolio />)}>Portfolio</li>
            <li>Testimonials</li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </SidebarLinks>

          <MobileLinksNavbar expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav>
                <li onClick={() => setContentOption(<About />)}>About</li>
                <li onClick={() => setContentOption(<Skills />)}>Skills</li>
                <li onClick={() => setContentOption(<Education />)}>
                  Education
                </li>
                <li onClick={() => setContentOption(<Portfolio />)}>
                  Portfolio
                </li>
                <li>Testimonials</li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </MobileLinksNavbar>
        </HomeSidebar>

        <HomeBodyWrapper>
          <HomeHeader>
            Software Engineer
            <br />
            Web and Mobile Development
          </HomeHeader>

          {/* <HomeContent> */}
          {<>{contentOption}</>}
          {/* </HomeContent> */}
        </HomeBodyWrapper>
      </HomeWrapper>
    </Appwrapper>
  );
}
