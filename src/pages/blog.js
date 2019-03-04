import React from "react"
import Link from "gatsby-link"
import Header from './header'
import './../css/style.css'
import '../fonts/fonts.css';

export default ({ data }) => {
    return (
        <div>

            <Header/>

            <div className="content blog-content">
                <h1 className="main-title">
                    Faith Blogs
                </h1>
                <h4 className="post-count">{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link
                            to={node.frontmatter.path}
                            css={{ textDecoration: `none`, color: `inherit` }}
                            className="blog-title"
                        >
                            <h3 style={{ marginBottom: '4px' }}>
                                {node.frontmatter.title}{" "}
                                <span className="blog-date">— {node.frontmatter.date}</span>
                            </h3>
                        </Link>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export const query = graphql`
query IndexQuery {
    allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}, 
        filter: {frontmatter: {path: {regex: "/^\/blog/"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }  
`;