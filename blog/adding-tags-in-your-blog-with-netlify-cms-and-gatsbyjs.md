---
path: /blog/adding-tags-in-your-blog-with-netlify-cms-and-gatsby-js
date: 2019-03-15T06:43:11.451Z
title: Adding tags in your blog with Netlify CMS and GatsbyJS
thumbnail: /assets/tags.jpg
tags:
  - gatsby
  - web development
  - netlify
---
Have a lot of posts? And you want to categorize them? Let's sort and tag them!

I followed this tutorial for the basic setup: [Adding Tags Tutorial](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/)

## Tags with NetlifyCMS

If you built your blog with NetlifyCMS, you have to tweak some things.
In your `/static/admin/config.yml`, in your blog collection, under fields you should have something like this: 

`- { name: tags, label: Tags, widget: list }`

The `widget: list` is important, because that way your tags will be in an array. 

In the Netlify UI, you can specify your tags like this: 

`gatsby, web development, netlify`

## Show the tags list in the blog list page

Make sure you put `tags` under your `frontmatter` GraphQL query.

Inside the render() method, put this again:

```javascript
 let tags = []
  _.each(data.allMarkdownRemark.edges, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

  // Eliminate duplicate tags
  tags = _.uniq(tags)
```

And then you can list your tags inside your JSX:

```javascript
<h3 className="blog-tags">Tags:</h3>
  {tags.map((tag) => (
    <Link to={`/tags/${_.kebabCase(tag)}/`} className="blog-tags">
      {tag}
   </Link>
  ))}
```

## Show ALL tags in ALL blog list pages

This means all tags can be shown whether you're in any page of your blog list.
It's simple use GraphQL aliasing. We will use two queries, one for the page query which will handle showing the list of blog posts depending on the page, second is for querying all the tags.

On your GraphQL Query in your blog list file, you should have something like this:

```javascript
export const query = graphql`
query($skip: Int, $limit: Int) { 
    pageQuery: allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}, 
            filter: {frontmatter: {path: {regex: "/^\/blog/"}}},
            limit: $limit
            skip: $skip
        ) {
  // rest of query here

tagsQuery: allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}, 
            filter: {frontmatter: {path: {regex: "/^\/blog/"}}},
        ) {
  // rest of query here
```

You can now reference the queries like this:
`data.tagsQuery.edges`, `data.pageQuery.edges`

And that's it! If you have been following my blog, you should be able to style your tags pages. Comment below for any questions.

Cheers!

FM
