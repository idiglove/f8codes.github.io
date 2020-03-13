import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from '../pages/header'
import './../css/style.css'
import '../fonts/fonts.css';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link } from "gatsby"
import { HomeWrapper, HomeSidebar, HomeBodyWrapper, ProfilePicWrapper, ProfilePic,
  HomeName, SidebarLinks, HomeHeader, MobileLinksNavbar } from './../styles/home-styles'
import { BlogWrapper, BlogTitle, BlogItem, BlogDate, BlogExcerpt, TagsTitle, BackLink } from './../styles/blog-styles'

const Tags = ({ pageContext, data }) => {
  // const { tag } = pageContext
  // const { edges, totalCount } = data.allMarkdownRemark
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${tag}"`

  let tags = []
  _.each(data.tagsQuery.edges, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

  // Eliminate duplicate tags
  tags = _.uniq(tags)

    return (
      <div>
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
                <SidebarLinks>
                  <TagsTitle>
                    Categories
                  </TagsTitle>
                  {tags.map((tag, i) => (
                    <li key={i}>
                      <Link to={`/tags/${_.kebabCase(tag)}/`}>
                      {tag}
                      </Link>
                    </li>
                  ))}
                </SidebarLinks>

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
                  Blog
              </HomeHeader>

              <BlogWrapper>
                {data.pageQuery.edges.map(({ node }, i) => (
                  <BlogItem key={node.id}>
                      <Link
                          to={node.frontmatter.path}
                          css={{ textDecoration: `none`, color: `inherit` }}
                          className="blog-title"
                      >
                          <img src={node.frontmatter.thumbnail} />
                          <BlogTitle>
                              {node.frontmatter.title}{" "}
                          </BlogTitle>
                      </Link>
                      <BlogDate>{node.frontmatter.date}</BlogDate>
                      <BlogExcerpt>{node.excerpt}</BlogExcerpt>
                  </BlogItem>
                ))}
              </BlogWrapper>
          </HomeBodyWrapper>
        </HomeWrapper>
    </div>
    )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

// export const pageQuery = graphql`
//   query($tag: String) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             path
//             thumbnail
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

export const query = graphql`
query($tag: String) { 
    pageQuery: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { in: [$tag] } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              path
              thumbnail
            }
            excerpt
          }
        }
      }

    tagsQuery: allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}, 
          filter: {frontmatter: {path: {regex: "/^\/blog/"}}},
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            tags
          }
        }
      }
    }
  }  
`;