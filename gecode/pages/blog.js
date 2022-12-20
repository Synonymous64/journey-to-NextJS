import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'
// * Step 1: Collect all the files from blog data directory.
// * Step 2: Iterate through them and display them.

const Blog = ({ myBlogs }) => {
    const [blogs, setBlogs] = useState(myBlogs);
    console.log(myBlogs);
    // useEffect(()=>{
    //     // console.log('use effect is running');
    //     fetch('http://localhost:3000/api/blogs').then((data)=>{
    //         return data.json();
    //     }).then((parsedData)=>{
    //         // console.log(parsedData);
    //         setBlogs(parsedData)
    //     })
    // }, [])
    return (
        <div className={`${styles.container}`}>
            <main className={styles.main}>
                {blogs.map((blogItem) => {
                    return (
                        <div className={styles.blogItem} key={blogItem.slug}>
                            <Link href={`/blogspot/${blogItem.slug}`}>
                                <h3>{blogItem.title}</h3></Link>
                            <p className={styles.blogItemP}>
                                {blogItem.content.substr(0, 140) + "..."}
                            </p>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}
export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs');
    let myBlogs = await data.json();
    return {
        props: { myBlogs }, // will be passed to the page component as props
    }
}

export default Blog
