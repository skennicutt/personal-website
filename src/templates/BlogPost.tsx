import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const Template = ({ data, pathContext }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const { next, prev } = pathContext;

  return (
    <Layout>
      <h1>{title}</h1>
      <div>
        <em>{date}</em>
      </div>
      <br />
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      <p>
        {prev && (
        <Link to={prev.frontmatter.path}>
          {prev.frontmatter.title}
          {' '}
          <span role="img" aria-label="point-left">
							👈
            {' '}
          </span>
						Previous
        </Link>
        )}
      </p>
      <p>
        {next && (
        <Link to={next.frontmatter.path}>
						Next
          {' '}
          <span role="img" aria-label="point-right">
							👉
          </span>
          {next.frontmatter.title}
        </Link>
        )}
      </p>
    </Layout>
  );
};

/* eslint-disable no-tabs */
export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
			}
		}
	}
`;
/* eslint-enable no-tabs */

export default Template;
