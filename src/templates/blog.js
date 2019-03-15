import React, { Component } from "react"
import Link from "gatsby-link"
import Header from '../pages/header'
import './../css/style.css'
import '../fonts/fonts.css';
import { Container, Row, Col } from 'react-bootstrap';
const _ = require("lodash")

// export default ({ data }) => {
class Blog extends Component {   
    render () {
        const {data} = this.props
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/blog" : '/blog/' + (currentPage - 1).toString()
        const nextPage = '/blog/' + (currentPage + 1).toString()

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

                <Header/>

                <div className="content blog-content">
                    <h1 className="main-title">
                        Faith's blog
                    </h1>
                    <h4 className="post-count">{data.pageQuery.totalCount} Posts</h4>
                    <Container>
                        <Row>
                            <Col>
                            <h3 className="blog-tags">Tags:</h3>
                                {tags.map((tag) => (
                                    <Link to={`/tags/${_.kebabCase(tag)}/`} className="blog-tags">
                                    {tag}
                                    </Link>
                                ))}
                            </Col>
                        </Row>
                        <Row>
                            {data.pageQuery.edges.map(({ node }) => (
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
                    </Container>
                    {!isFirst && (
                        <Link to={prevPage} rel="prev" className="pagination-link">
                        ← Previous Page
                        </Link>
                    )}
                    {!isLast && (
                        <Link to={nextPage} rel="next" className="pagination-link">
                        Next Page →
                        </Link>
                    )}
                </div>
            </div>
        );
    }   
};

export default Blog

export const query = graphql`
query($skip: Int, $limit: Int) { 
    pageQuery: allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}, 
            filter: {frontmatter: {path: {regex: "/^\/blog/"}}},
            limit: $limit
            skip: $skip
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
            tags
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