import each from "lodash/each"
import get from "lodash/get"
import uniq from "lodash/uniq"
import Link from "gatsby-link"
import kebabCase from "lodash/kebabCase"
import React, { FunctionComponent } from "react"

import ProfilePicPng from "./../../img/pic.png"
import {
  HomeWrapper,
  HomeSidebar,
  HomeBodyWrapper,
  ProfilePicWrapper,
  ProfilePic,
  SidebarLinks,
  HomeHeader,
} from "./../../styles/home-styles"
import {
  BlogWrapper,
  BlogTitle,
  BlogItem,
  BlogDate,
  BlogExcerpt,
  BlogLink,
  BlogList,
  BlogLinks,
  TagsTitle,
  BackLink,
} from "./../../styles/blog-styles"
import "./../../css/style.css"
import "./../../fonts/fonts.css"
import { BlogHomepageProps } from "./types"

const BlogHomepage: FunctionComponent<BlogHomepageProps> = ({
  data,
  navigation,
}) => {
  const pageContext = navigation?.pageContext ?? {
    currentPage: null,
    numPages: null,
  }
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  let prevPage = null
  let nextPage = null

  if (currentPage) {
    prevPage =
      currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
    nextPage = "/blog/" + (currentPage + 1).toString()
  }

  let tags: string[] = []
  each(data.tagsQuery.nodes, (node) => {
    if (get(node, "frontmatter.tags")) {
      tags = tags.concat(node.frontmatter.tags)
    }
  })

  // Eliminate duplicate tags
  tags = uniq(tags)

  return (
    <BlogWrapper>
      <HomeHeader>Blog</HomeHeader>
      <BlogList>
        {data.pageQuery.edges.map(({ node }, i) => (
          <BlogItem key={node.id}>
            <Link
              to={node.frontmatter.path}
              style={{ textDecoration: `none`, color: `inherit` }}
              className="blog-title"
            >
              <div className="img-container">
                <img
                  src={node.frontmatter.thumbnail}
                  alt={node.frontmatter.title}
                />
              </div>
              <BlogTitle>{node.frontmatter.title} </BlogTitle>
              <BlogDate>{node.frontmatter.date}</BlogDate>
              <BlogExcerpt>{node.excerpt}</BlogExcerpt>
            </Link>
          </BlogItem>
        ))}
      </BlogList>
      <BlogLinks>
        {!isFirst && numPages && (
          <BlogLink to={prevPage} rel="prev">
            ← Previous Page
          </BlogLink>
        )}
        {!isLast && numPages && (
          <BlogLink to={nextPage} rel="next">
            Next Page →
          </BlogLink>
        )}
      </BlogLinks>
    </BlogWrapper>
  )
}

export default BlogHomepage
