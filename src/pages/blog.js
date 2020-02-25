import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import Seo from "../components/Seo";

const QUERY = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "pages" } } }
    ) {
      edges {
        node {
          frontmatter {
            description
            path
            title
          }
        }
      }
    }
  }
`;

const Blog = () => {
  const { posts } = useStaticQuery(QUERY);
  return (
    <>
      <Seo title="Blog" />
      <h1>Blog</h1>
      {posts.edges.map((post, index) => {
        return (
          <div key={index}>
            <h3>
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <p>{post.node.frontmatter.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
