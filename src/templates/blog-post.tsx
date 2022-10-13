import React, { FunctionComponent } from "react"
import "../css/style.css"
import Disqus from "disqus-react"
import { graphql, Link } from "gatsby"

import ProfilePicPng from "./../img/pic.png"
import {
  HomeWrapper,
  HomeSidebar,
  HomeBodyWrapper,
  ProfilePicWrapper,
  ProfilePic,
} from "../styles/home-styles"
import {
  BackLink,
  BlogWrapper,
  BlogPost,
  BlogPostNavLinks,
  BlogPostTitle,
  BlogPostWrapper,
  Back,
} from "../styles/blog-styles"
import Seo from "../components/Seo"
import CaretUp from "./../components/Common/Icons/CaretUp"

const BlogPostTemplate: FunctionComponent<Props> = ({ data }) => {
  const post = data.markdownRemark
  const disqusShortname = "idiglove-github-io"
  const disqusConfig = {
    url: "https://faithmorante.netlify.com" + post.frontmatter.path,
    identifier: post.frontmatter.path,
    title: post.frontmatter.title,
  }
  return (
    <BlogWrapper>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.title}
        image={post.frontmatter.thumbnail}
        isArticle
        link={post.frontmatter.path}
      />
      <BlogPostWrapper>
        <Back>
          <Link to="/blog">
            <CaretUp className="caret-up" />
            <h5>Back</h5>
          </Link>
        </Back>
        <h1>{post.frontmatter.title}</h1>
        <BlogPost>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Disqus.CommentCount
            shortname={disqusShortname}
            config={disqusConfig}
          >
            Comments
          </Disqus.CommentCount>
          {/* <p>{this.props.article.body}</p> */}
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </BlogPost>
      </BlogPostWrapper>
    </BlogWrapper>
  )
}

export default BlogPostTemplate

type Props = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        date: string
        path: string
        title: string
        thumbnail: string
      }
    }
  }
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
      }
    }
  }
`
