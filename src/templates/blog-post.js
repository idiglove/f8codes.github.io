import React from "react";
import Header from '../pages/header'
import '../css/style.css';
import Disqus from "disqus-react";
import { graphql } from 'gatsby'

export default ({ data }) => {
    const post = data.markdownRemark;
    const disqusShortname = 'idiglove-github-io';
    const disqusConfig = {
        url: process.env.PUBLIC_URL + post.fields.slug,
        identifier: post.frontmatter.id,
        title: post.frontmatter.title,
    };
    return (
        <div>
            <Header/>

            <div className="content blog-content">
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                {/* <p>{this.props.article.body}</p> */}
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        </div>
    );
};

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