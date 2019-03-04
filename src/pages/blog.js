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
                <h4 className="post-count">{data.allFile.totalCount} Posts</h4>
                {data.allFile.edges.map(({ node }) => (
                    <div key={node.childMarkdownRemark.id}>
                        <Link
                            to={node.childMarkdownRemark.frontmatter.path}
                            css={{ textDecoration: `none`, color: `inherit` }}
                            className="blog-title"
                        >
                            <h3 style={{ marginBottom: '4px' }}>
                                {node.childMarkdownRemark.frontmatter.title}{" "}
                                <span className="blog-date">— {node.childMarkdownRemark.frontmatter.date}</span>
                            </h3>
                        </Link>
                        <p>{node.childMarkdownRemark.excerpt}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export const query = graphql`
    query IndexQuery {
        allFile(filter: { sourceInstanceName: { eq: "src" } }) {
            totalCount
            edges {
                node {
                    childMarkdownRemark {
                        id
                        excerpt
                        frontmatter {
                         path
                         title
                         date(formatString: "DD MMMM, YYYY")
                        }
                    }
                }
            }
        }
    }
`;