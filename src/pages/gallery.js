import React from "react"
import Link from "gatsby-link"
import Header from './header'
import './../css/style.css'
import '../fonts/fonts.css';
import { Container, Row, Col } from 'react-bootstrap';

export default ({ data }) => {
    return (
        <div>

            <Header/>

            <div className="content">
                <h1 className="main-title">
                    Gallery
                </h1>
                <Container>
                  <Row>
                  {data.allFile.edges.map(({ node }) => (
                    <Col sm={4} className="gallery-img">
                      <div key={node.childMarkdownRemark.id}>
                          <img src={node.childMarkdownRemark.frontmatter.image}></img>
                      </div>
                    </Col>
                  ))}
                  </Row>
                </Container>
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