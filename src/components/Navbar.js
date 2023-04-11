import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

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
            <h1>Aatish Rana</h1>
            <div>
                {posts.map(post => (
                    <article key={post.id}>
                        <Link to={post.fields.slug}>
                            <h2>{post.frontmatter.title}</h2>
                        </Link>
                        <small>
                            {post.frontmatter.author}, {post.frontmatter.date}
                        </small>
                        <p>{post.excerpt}</p>
                    </article>
                ))}
            </div>
        </nav>
    )
}