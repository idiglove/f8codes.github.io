import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import "./../css/style.css";
import "../fonts/fonts.css";
import { graphql } from "gatsby";
import BlogHomepage from "./../components/BlogHomepage";
import { PageQuery, TagsQuery } from "./query.types";

const Tags: FunctionComponent<Props> = ({ data }) => {
  return <BlogHomepage data={data} />;
};

type Props = {
  data: {
    tagsQuery: TagsQuery;
    pageQuery: PageQuery;
  };
};

export default Tags;

export const query = graphql`
  query ($tag: String) {
    pageQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
