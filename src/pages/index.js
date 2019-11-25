import React, { Component } from 'react';
import './../scss/style.scss';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import photo from '../img/photo-edited.jpg';
import headerBg from '../img/header-bg.jpg'
import headerBgPng from '../img/header-bg.png'
import fireEagleGaming from '../img/portfolio/web/1.jpg';
import globalToaster from '../img/portfolio/web/2.jpg';
import mettaschola from '../img/portfolio/web/3.jpg';
import thinkDifferent from '../img/portfolio/web/4.jpg';
import tvFlyer from '../img/portfolio/graphic/juniortvflyer2.jpg';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Link from 'gatsby-link';
import '../fonts/fonts.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <title>Faith Morante - Full Stack Web Developer</title>
                    <meta name="description" content="Faith Morante - Full Stack Web Developer" />
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
                                              <Col><h1 className="header-title">Faith Morante</h1></Col>
                                              <Col>
                                                  <Navbar expand="lg" className="header-navbar">
                                                      <Navbar.Toggle aria-controls="main-navbar" />
                                                      <Navbar.Collapse id="main-navbar">
                                                          <Nav className="main-navbar">
                                                              <AnchorLink href="#about" offset="120">About</AnchorLink>
                                                              <AnchorLink href="#education" offset="120">Education</AnchorLink>
                                                              <AnchorLink href="#skills" offset="120">Skills</AnchorLink>
                                                              <AnchorLink href="#portfolio" offset="120">Portfolio</AnchorLink>
                                                              <Link to="/blog">Blog</Link>
                                                          </Nav>
                                                      </Navbar.Collapse>
                                                  </Navbar>
                                              </Col>
                                          </Row>
                                      </Container>
                                  </div>
                              }
                >

                </StickyHeader>

                <div className="header">
                    <img src={headerBg}></img>
                    <div className="header-text">
                        <h1>Software Engineer</h1>
                        <h2>Web &amp; Mobile Apps</h2>
                    </div>
                </div> 

                <div className="content">
                    <div id="about">
                        <h2>ABOUT ME</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <p className="header-paragraph">
                                        I'm a professional Full Stack Web Developer. I've been coding full time since 2015.
                                        I'm experienced with front-end technologies like HTML, CSS, JS, Angular, React, Bootstrap, etc.
                                        But I have to say, I enjoy coding back-end more either using any of these: PHP, Zend Framework,
                                        CodeIgniter, NodeJS, and of course, AWS services. I can also make mobile apps for Android and iOS using React Native.
                                    </p>
                                    <p className="header-sub-paragraph">
                                        Apart from coding, I also can do graphic design mostly with photo manipulation, web design and design layouts. In my free time,
                                        I like watercolor painting, playing video games and watching tv series. I also write poetry sometimes.
                                        If you are interested in hiring me, contact me thru any these:
                                    </p>

                                    <span className="contact"><b>Email: </b> faith.morante@gmail.com</span>
                                    <span className="contact"><b>Phone: </b> +63 916 227 4287</span>
                                    <span className="contact"><b>Linkedin: </b> https://www.linkedin.com/in/faith-morante-3097871b/</span>
                                    <span className="contact"><b>Github: </b> https://github.com/idiglove</span>
                                </Col>
                                <Col className="about-img-container">
                                    <img src={photo}></img>
                                </Col>
                            </Row>
                        </Container>

                    </div>

                    <div id="education">
                        <h2>EDUCATION</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <Row>
                                        <span className="education-content">2010-2011</span>
                                        <span className="education-content"><b>Bachelor's degree in Computing</b></span>
                                    </Row>
                                    <Row className="timeline-horizontal">
                                        <span className="dot"></span>
                                        <span className="line"></span>
                                    </Row>
                                    <Row>
                                        <span className="education-content text-uppercase"><b>University of Portsmouth</b></span>
                                        <span className="education-content">UK (online)</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <span className="education-content">2007-2009</span>
                                        <span className="education-content"><b>Diploma and Advanced Diploma in Information Technology</b></span>
                                    </Row>
                                    <Row className="timeline-horizontal">
                                        <span className="dot"></span>
                                        <span className="line"></span>
                                    </Row>
                                    <Row>
                      <span className="education-content text-uppercase">
                      <b>Insitut Teknologi Harapan Bangsa (ITHB) in partner with Informatics Singapore</b></span>
                                        <span className="education-content">Bandung, Indonesia</span>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div id="skills">
                        <h2>SKILLS</h2>
                        <Container>
                            <Row className="skills-row">
                                <Col>
                                    <Row>
                                        <Progress
                                            type="circle"
                                            width={70}
                                            percent={95}
                                            status="default"
                                            theme={{
                                                default: {
                                                    color: 'rgb(185, 72, 255)'
                                                }
                                            }}
                                        />
                                        <span className="skills">PHP, MySQL, HTML, CSS, JS, Bootstrap, AJAX, Jquery</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Progress
                                            type="circle"
                                            width={70}
                                            percent={90}
                                            status="default"
                                            theme={{
                                                default: {
                                                    color: 'rgb(185, 72, 255)'
                                                }
                                            }}
                                        />
                                        <span className="skills">React, Redux, Zend Framework, Sass, C#, Photoshop, React Native</span>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="skills-row">
                                <Col>
                                    <Row>
                                        <Progress
                                            type="circle"
                                            width={70}
                                            percent={86}
                                            status="default"
                                            theme={{
                                                default: {
                                                    color: 'rgb(185, 72, 255)'
                                                }
                                            }}
                                        />
                                        <span className="skills">Angular, CodeIgniter, Docker, Git, AWS</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Progress
                                            type="circle"
                                            width={70}
                                            percent={70}
                                            status="default"
                                            theme={{
                                                default: {
                                                    color: 'rgb(185, 72, 255)'
                                                }
                                            }}
                                        />
                                        <span className="skills">Laravel, Python</span>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div id="portfolio">
                        <h2>PORTFOLIO</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <Row>
                                        <img src={fireEagleGaming}></img>
                                    </Row>
                                    <Row>
                                        <img src={globalToaster}></img>
                                    </Row>
                                </Col>
                                <Col className="portfolio-center">
                                    <img src={tvFlyer} width="85%"></img>
                                </Col>
                                <Col>
                                    <Row>
                                        <img src={mettaschola}></img>
                                    </Row>
                                    <Row>
                                        <img src={thinkDifferent}></img>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
