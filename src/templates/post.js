import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { DiscussionEmbed } from "disqus-react";

import Seo from "../components/Seo";

const Post = ({ data }) => {
  return (
    <div>
      <Seo title={data.markdownRemark.frontmatter.title} />
      {data.markdownRemark.frontmatter.banner && (
        <Img
          fluid={data.markdownRemark.frontmatter.banner.childImageSharp.fluid}
        />
      )}
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>
        <Link to="/blog">Voltar para Blog</Link>
      </p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <DiscussionEmbed
        shortname="powersites-2"
        config={{
          identifier: data.markdownRemark.frontmatter.path,
          title: data.markdownRemark.frontmatter.title
        }}
      />
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { path: { eq: $id } }) {
      frontmatter {
        path
        title
        description
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

export default Post;
