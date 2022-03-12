import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import BlogHomepage from "./../components/BlogHomepage";
import { PageQuery, TagsQuery } from "./query.types";

const Blog: FunctionComponent<Props> = ({ data, pageContext }) => {
  return <BlogHomepage data={data} navigation={{ pageContext }} />;
};

export default Blog;

type Props = {
  data: {
    tagsQuery: TagsQuery;
    pageQuery: PageQuery;
  };
  pageContext: {
    currentPage: number;
    numPages: number;
  };
};

export const query = graphql`
  query ($skip: Int, $limit: Int) {
    pageQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { path: { regex: "/^/blog/" } } }
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
            tags
          }
          excerpt
        }
      }
    }

    tagsQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { path: { regex: "/^/blog/" } } }
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          tags
        }
      }
    }
  }
`;
