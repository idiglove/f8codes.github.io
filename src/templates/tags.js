import React from "react"
import PropTypes from "prop-types"
import Header from '../pages/header'
import './../css/style.css'
import '../fonts/fonts.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  // const { tag } = pageContext
  // const { edges, totalCount } = data.allMarkdownRemark
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${tag}"`

  return (
    <div>
      <Header/>

      <div className="content blog-content">
          <h1 className="main-title">
              Faith's blog
          </h1>
          {/* <h4 className="post-count">{data.allMarkdownRemark.totalCount} Posts</h4> */}
          <Container>
              <Row>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                      <Col sm={4} className="blog-post" key={node.id}>
                          <div>
                              <Link
                                  to={node.frontmatter.path}
                                  css={{ textDecoration: `none`, color: `inherit` }}
                                  className="blog-title"
                              >
                                  <img src={node.frontmatter.thumbnail} />
                                  <h3 style={{ marginBottom: '4px' }}>
                                      {node.frontmatter.title}{" "}
                                      <span className="blog-date">— {node.frontmatter.date}</span>
                                  </h3>
                              </Link>
                              <p>{node.excerpt}</p>
                          </div>
                      </Col>
                  ))}
              </Row>
              {/* <Row>
                  <Col>
                  <h3 className="blog-tags">Tags:</h3>
                      {tags.map((tag) => (
                          <Link to={`/tags/${_.kebabCase(tag)}/`} className="blog-tags">
                          {tag}
                          </Link>
                      ))}
                  </Col>
              </Row> */}
          </Container>
          {/* {!isFirst && (
              <Link to={prevPage} rel="prev" className="pagination-link">
              ← Previous Page
              </Link>
          )}
          {!isLast && (
              <Link to={nextPage} rel="next" className="pagination-link">
              Next Page →
              </Link>
          )} */}
      </div>
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

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
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
  }`