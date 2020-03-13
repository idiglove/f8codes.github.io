import React from "react";
import Header from '../pages/header'
import '../css/style.css';
import Disqus from "disqus-react";
import { graphql } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap';
import { HomeWrapper, HomeSidebar, HomeBodyWrapper, ProfilePicWrapper, ProfilePic,
  HomeName, HomeHeader, MobileLinksNavbar } from './../styles/home-styles'
import { BackLink, BlogWrapper, BlogPost } from './../styles/blog-styles'

export default ({ data }) => {
    const post = data.markdownRemark;
    const disqusShortname = 'idiglove-github-io';
    const disqusConfig = {
        url: 'https://faithmorante.netlify.com' + post.frontmatter.path,
        identifier: post.frontmatter.path,
        title: post.frontmatter.title,
    };
    return (
        <div>
            {/* <Header/> */}

            <HomeWrapper>
              <HomeSidebar>
                  <ProfilePicWrapper>
                      <ProfilePic src={require('./../img/pic.png')} />
                  </ProfilePicWrapper>
                  <HomeName>
                    Faith Morante
                  </HomeName>
                  <BackLink to={'/'}>Portfolio</BackLink> 
                  <BackLink to={'/blog'}>Blog</BackLink> 

                  <MobileLinksNavbar expand="lg" variant="dark" >
                      <Navbar.Toggle aria-controls="main-navbar" />
                      <Navbar.Collapse id="main-navbar">
                          <Nav >
                              <li onClick={() => setContentOption(<About />)}>About</li>
                          </Nav>
                      </Navbar.Collapse>
                  </MobileLinksNavbar>
              </HomeSidebar>

              <HomeBodyWrapper>
                  <HomeHeader>
                    <h1>{post.frontmatter.title}</h1>
                  </HomeHeader>

                  <BlogWrapper>
                    <BlogPost>
                      <div dangerouslySetInnerHTML={{ __html: post.html }} />
                      <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                          Comments
                      </Disqus.CommentCount>
                      {/* <p>{this.props.article.body}</p> */}
                      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                    </BlogPost>
                  </BlogWrapper>
              </HomeBodyWrapper>
            </HomeWrapper> 
        </div>
    );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`