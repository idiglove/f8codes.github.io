---
path: /blog/how-i-created-my-website-without-spending-a-dime
date: '2019-02-21'
title: How I created my website without spending a dime
thumbnail: /assets/create-website.jpg
---

In this tutorial, I assume that you know the basics of web development. For styling and development I used ReactJS, Sass, Bootstrap, GatsbyJS and GraphQL. I deployed my website using Github Pages. You can google them up to know an overview about them.

What I like about GatsbyJS is each page is like a React Component, which also means can use any React libraries. Also, it helps with routing in your app, which means you can navigate through your site easily and looks nice in the url address bar. Another thing is, Gatsby utilizes GraphQL then compiles the data into plain HTML, CSS and JS. So let's dive right in and deploy a static website (and blog).

# Prerequisites 

1. Install NodeJS which comes with npm
2. Install Sass

# Installing Gatsby

I recommend installing its CLI (command line interface)

    npm install --global gatsby-cli

Then create a gatsby app

    gatsby new my-website

Once it's installed, you can check it out right away locally thru http://localhost:8000/:

    gatsby develop

# Static Website

I won't go to any details of designing a website, that can be another blog post :)

But first thing you should do is creating a <head> tag using react-helmet. GatsbyJS already has that module installed.
index.js is where your application starts. So put something like this inside the <div> tag

        <Helmet>
            <title>Put here the words you want to see on your browser tab</title>
            <meta name="description" content="put here what you want to be used for SEO" />
        </Helmet>

Then start putting in your website design code below it. 

TIP: I actually like using bootstrap, and React has a library for it called `react-bootstrap`. What I mostly use are the layout components. It looks something like this: 

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
            </Col>
    </Container>

# Styling with Sass

What I like to do is make a folder with a scss folder in it. And adding this line in `scripts` of `package.json`:

    "compile-sass": "sass src/scss/style.scss src/css/style.css"
    
What it does is compiles the sass file and converts it to css inside the `src/css` folder. It's a lot of fun using Sass! So try it out.

This sass:

    .blog-header-title {
        a {
            color: #212529;
    
            &:hover {
                color: #212529;
                text-decoration: none;
            }
        }
    }

will be converted to this css:

    .blog-header-title a {
      color: #212529;
    }
    .blog-header-title a:hover {
      color: #212529;
      text-decoration: none;
    }
    
# Making the blog

You can follow this tutorial for making the blog: `http://whoisryosuke.com/blog/2018/deploy-a-static-react-blog-using-gatsbyjs-and-github/`

TIP: each js in your pages folder is treated like a page. What that means is index.js is equivalent to `/`, blog.js is equal to `/blog`. So when making links inside your site, you can do something like this:

    <Link to="/">Faith Morante</Link>
    
Links is like a `<a>` tag, but that Link comes from `import Link from 'gatsby-link'` so it handles your routing really well and works good with Github Pages

# Adding a comments section

Follow this: `https://github.com/disqus/disqus-react/blob/master/examples/index.jsx`

TIP: for the ID, use a UUID generator and it in your markdown files. Also, in your blog template, in the graphql query, you can do something like this: 


    export const query = graphql`
        query BlogPostQuery($slug: String!) {
            markdownRemark(fields: { slug: { eq: $slug } }) {
                html
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    id
                }
                fields {
                    slug
                }
            }
        }
    `;

That's it. Comment below if you have any questions. Rock on!
    
    
