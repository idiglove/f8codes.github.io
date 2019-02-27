import React, { Component } from 'react';
import './css/style.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import photo from './img/photo-edited.jpg';
import fireEagleGaming from './img/portfolio/web/1.jpg';
import globalToaster from './img/portfolio/web/2.jpg';
import mettaschola from './img/portfolio/web/3.jpg';
import thinkDifferent from './img/portfolio/web/4.jpg';
import tvFlyer from './img/portfolio/graphic/juniortvflyer2.jpg';
import bullwingsMenuCover from './img/portfolio/foodmenu/bullwingsmenucover.jpg'
import bullwingsPage from './img/portfolio/foodmenu/bullwingspage.jpg'
import phingsDessert from './img/portfolio/foodmenu/phingsdesserts2.jpg'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Faith Morante - Full Stack Web Developer</title>
          <meta name="description" content="Faith Morante - Full Stack Web Developer" />
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
                          <a href="https://idiglove.github.io/faith-blog/">Blog</a>
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
                    CodeIgniter, NodeJS, and of course, AWS services. I also can make mobile apps using React Native.
                  </p>
                  <p className="header-sub-paragraph">
                    Apart from coding, I also can do graphic design mostly with photo manipulation, web design and design layouts. In my free time, 
                    I like watercolor painting, playing video games and watching tv series. I also write poetry sometimes.
                    If you are interested in hiring me, contact me thru any these:
                  </p>

                  <span className="contact"><b>Email: </b> faith.morante@gmail.com</span>
                  <span className="contact"><b>Phone: </b> +63 977 443 5879</span>
                  <span className="contact"><b>Linkedin: </b> https://www.linkedin.com/in/faith-morante-3097871b/</span>
                  <span className="contact"><b>Github: </b> https://github.com/idiglove</span>
                  <span className="contact"><b>Fiverr Gig: </b> https://www.fiverr.com/share/5Kx03</span>
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
                      <span className="skills">Zend Framework, Sass, C#, Photoshop, React Native</span>
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
                      <span className="skills">Angular, React, CodeIgniter, Docker, Git, AWS</span>
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
                    <Link onClick={() => this.handleShow()}><img src={fireEagleGaming}></img></Link>
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
            <Modal show={this.state.show} onHide={() => this.handleClose()}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.handleClose()}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => this.handleClose()}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
