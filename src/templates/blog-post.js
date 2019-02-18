import React from "react";
import Header from '../pages/header'
import '../css/style.css';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <Header/>

            <div className="content">
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
            }
        }
    }
`;