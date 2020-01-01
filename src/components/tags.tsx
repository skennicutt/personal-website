import * as React from 'react';
import * as _ from 'underscore';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import IBlogPost from '../models/IBlogPost';

const Root = styled.div`
`;

const getUniqueTagsForEdges = (edges) => {
  const allTags = edges.reduce(
    (tagsSeen, edge) => [...tagsSeen, ...edge.node.frontmatter.tags], [],
  );
  return _.uniq(allTags);
};

const SearchableTags = (props: IBlogPost) => {
  const { data } = props;
  const { edges } = data.allMarkdownRemark;
  const uniqueTags = getUniqueTagsForEdges(edges);
  return (
    <Root>
      <h3>{ uniqueTags.join(' ') }</h3>
    </Root>
  );
};

export const query = graphql`
  query TagsQuery {
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;

export default SearchableTags;
