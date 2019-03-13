import React from "react"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../fonts/fonts.css';
import '../css/style.css';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link'

const Header = () => (
    <div>
        <Helmet>
            <title>Faith Blogs</title>
            <meta name="description" content="Faith Morante - Full Stack Web Developer - Blog about Coding" />
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136122250-1"></script>
            <script type="text/javascript">
                {`window.onload = () => {

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-136122250-1');
                }`}
            </script>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script>
                {`(adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: "ca-pub-7952346124434946",
                    enable_page_level_ads: true
                });`}
            </script>
        </Helmet>
        <StickyHeader className="sticky-header"
                      header={
                          <div className="header-root">
                              <Container className="header-container">
                                  <Row>
                                      <Col><h1 className="blog-header-title"><Link to="/">Faith Morante</Link></h1></Col>
                                      <Col className="blog-link">
                                          <h1 className="">
                                              <Link to="/blog">Blog</Link>
                                          </h1>
                                      </Col>
                                  </Row>
                              </Container>
                          </div>
                      }
        >
        </StickyHeader>
    </div>
)

export default Header