---
path: /blog/create-an-image-gallery-with-netlify-cms-and-gatsbyjs
date: 2019-03-08T02:43:40.640Z
title: Create an image gallery with Netlify CMS and Gatsby JS
thumbnail: /assets/image-gallery.jpg
tags: 'gatsby, netlify, web development'
---
Hi all, it is totally possible to create an image gallery with your custom stylings too!

## Prerequisites:

1. [Has NetlifyCMS and GatsbyJS setup](https://faithmorante.netlify.com/blog/how-to-create-free-cms-with-netlify-cms-and-gatsby)
2. Knows how to style in [Sass](https://sass-lang.com/)

## Steps

1. In your /static/admin/config.yml file, you should have something like this:


```
  - name: gallery
    label: Gallery
    folder: gallery
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - { name: image, label: Image, widget: image }
```

2. Add a gallery.js file in /src/pages folder. Mine looks like this:

```
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
```

NOTE: `allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {` this line is important, so that this gallery page will only get the gallery markdown files.

3. After you push your changes, in admin panel you should see a `Gallery` panel at the left when you click it it will show this:

![](/assets/gallery.png)

4. Add your stylings, push your changes. Wait for the build, then check it in yoursite.netlify.com/gallery

Check mine out in https://faithmorante.netlify.com/gallery/

Cheers!
