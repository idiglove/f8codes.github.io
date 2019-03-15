---
path: /blog/adding-pagination-with-gatsbyjs
date: 2019-03-14T07:41:27.174Z
title: Adding Pagination with GatsbyJS
thumbnail: /assets/pagination.jpg
tags:
  - gatsby
  - web development
  - tutorial
---
Do you have a lot of blog posts in your blog list and you need to paginate it?
I will teach you how on your blog that uses GatsbyJS.

## Modifying gatsby-node.js

If you have been following my tutorials and has a blog built with GatsbyJS, you will need to move your js file (mine is named blog.js) that has your blog lists to `src/templates`. 

You need to do this, because if not, `/blog/` will redirect you to your blog list without pagination.

In your `exports.createPages` method, inside `.then()`, you should add something like this:

```
const posts = result.data.allFile.edges
    const postsPerPage = 3;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve('./src/templates/blog.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });
```

## Modifying your blog list js file

Your graphql query should look something like this:

```
export const query = graphql`
query($skip: Int, $limit: Int) { 
    allMarkdownRemark(
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
          }
          excerpt
        }
      }
    }
  }  
`;
```

Be aware that $skip: Int, and $limit: Int are not using Int! (with an exclamation mark), because you will get an error that says Int! is not provided. It took me a long while to figure this one out.

## Inside your render method

```
render () {
        const {data} = this.props
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/blog" : '/blog/' + (currentPage - 1).toString()
        const nextPage = '/blog/' + (currentPage + 1).toString()

return (
  //your blog list here
  {!isFirst && (
    <Link to={prevPage} rel="prev" className="pagination-link">
      ← Previous Page </Link>
  )}
  {!isLast && (
     <Link to={nextPage} rel="next" className="pagination-link">
     Next Page →
     </Link>
  )}
)
```

If something doesn't work and if it works and helped you, feel free to comment!

Cheers,

FM
