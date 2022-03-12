import React from "react";
import "../css/style.css";
import Disqus from "disqus-react";
import { graphql } from "gatsby";

import ProfilePicPng from "./../img/pic.png";
import {
  HomeWrapper,
  HomeSidebar,
  HomeBodyWrapper,
  ProfilePicWrapper,
  ProfilePic,
} from "./../styles/home-styles";
import {
  BackLink,
  BlogWrapper,
  BlogPost,
  BlogPostNavLinks,
  BlogPostTitle,
} from "./../styles/blog-styles";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const disqusShortname = "idiglove-github-io";
  const disqusConfig = {
    url: "https://faithmorante.netlify.com" + post.frontmatter.path,
    identifier: post.frontmatter.path,
    title: post.frontmatter.title,
  };
  return (
    <div>
      <HomeWrapper>
        <HomeSidebar>
          <ProfilePicWrapper>
            <ProfilePic src={ProfilePicPng} />
          </ProfilePicWrapper>
          <BlogPostNavLinks>
            <BackLink to={"/blog"}>Blog</BackLink>
            <BackLink to={"/"}>Back to Portfolio</BackLink>
          </BlogPostNavLinks>
        </HomeSidebar>

        <HomeBodyWrapper>
          <BlogPostTitle>{post.frontmatter.title}</BlogPostTitle>

          <BlogWrapper>
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
          </BlogWrapper>
        </HomeBodyWrapper>
      </HomeWrapper>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
