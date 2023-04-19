import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from './BlogPost.module.css'

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className={styles.blog}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`