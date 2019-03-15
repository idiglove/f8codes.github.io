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

```
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

```
<h3 className="blog-tags">Tags:</h3>
  {tags.map((tag) => (
    <Link to={`/tags/${_.kebabCase(tag)}/`} className="blog-tags">
      {tag}
   </Link>
  ))}
```

And that's it! If you have been following my blog, you should be able to style your tags pages. Comment below for any questions.

Cheers!

FM
