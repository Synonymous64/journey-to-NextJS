import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const Blog = () => {
    return (
        <div className={`${styles.container}`}>
            <main className={styles.main}>
                <div className={styles.blogItem}>
                    <Link href={'/blogspot/learn-javascript'}>
                        <h3>How to learn javascript in 2022</h3></Link>
                    <p>
                        Javascript is a language of the internet. Every browser in the world are fused with Javascript
                    </p>
                </div>
                <div className={styles.blogItem}>
                    <Link href={'/blogspot/learn-javascript'}>
                        <h3>How to learn javascript in 2022</h3></Link>
                    <p>
                        Javascript is a language of the internet. Every browser in the world are fused with Javascript
                    </p>
                </div>
                <div className={styles.blogItem}>
                    <Link href={'/blogspot/learn-javascript'}>
                        <h3>How to learn javascript in 2022</h3></Link>
                    <p>
                        Javascript is a language of the internet. Every browser in the world are fused with Javascript
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Blog
