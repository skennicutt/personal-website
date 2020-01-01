interface IBlogPost {
  data: {
    allMarkdownRemark:any;
    markdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
  pathContext: any;
}

export default IBlogPost;
