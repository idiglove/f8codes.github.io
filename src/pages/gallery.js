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
                    Gallery
                </h1>
                {data.allFile.edges.map(({ node }) => (
                    <div key={node.childMarkdownRemark.id}>
                        {/* <Link
                            to={node.frontmatter.path}
                            css={{ textDecoration: `none`, color: `inherit` }}
                            className="blog-title"
                        > */}
                            <img src={node.childMarkdownRemark.frontmatter.image}></img>
                        {/* </Link> */}
                        {/* <p>{node.excerpt}</p> */}
                    </div>
                ))}
            </div>

        </div>
    );
};

export const query = graphql`
    query galleryQuery {
      allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
        totalCount
        edges {
          node {
            childMarkdownRemark {
              id
              excerpt
              frontmatter {
                title
                image
              }
            }
          }
        }
      }
    }
`;