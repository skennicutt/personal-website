import * as React from 'react';
// import * as _ from 'underscore';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import IBlogPost from '../models/IBlogPost';
import SEO from '../components/seo';
import SearchableTags from '../components/tags';

const BlogHome = (props: IBlogPost) => {
  const { data } = props;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blogs" />
      <h1>Hi people</h1>
      <SearchableTags data={props.data} pathContext={props.pathContext} />
      <div>
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              &nbsp;
              <small>
                {' '}
                <em>published on</em>
                {' '}
                {frontmatter.date}
              </small>
              <p>{frontmatter.excerpt}</p>
              <br />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          path
          tags
          excerpt
          }
        }
      }
    }
  }
`;

export default BlogHome;
