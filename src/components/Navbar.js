import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as styles from './Navbar.module.css'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query MyQuery {
        blog: allMarkdownRemark {
            posts: nodes {
            fields {
                slug
            }
            frontmatter {
                date(fromNow: true)
                title
                author
            }
            excerpt
            id
            }
        }
        }
    `)
    const { posts } = data.blog

    return (
        <nav>
            <Link to="/">
                <div className={styles.aatish}></div>
                <h2 style={{ textAlign: "center" }}>Aatish Rana</h2>
            </Link>

            <div className={styles.blog_parent}>
                {posts.map(post => (
                    <article key={post.id}>
                        <Link to={post.fields.slug}>
                            <h5>{post.frontmatter.title}</h5>
                        </Link>
                    </article>
                ))}
            </div>
        </nav>
    )
}