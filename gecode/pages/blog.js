import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';

import { useEffect } from 'react'
import { useState } from 'react'
// * Step 1: Collect all the files from blog data directory.
// * Step 2: Iterate through them and display them.

const Blog = ({ allBlogs }) => {
    const [blogs, setBlogs] = useState(allBlogs);
    console.log(allBlogs);
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
// The getServerSideProps function should return an object with any one of the following properties:

// props
// The props object is a key-value pair, where each value is received by the page component. It should be a serializable object so that any props passed, could be serialized with JSON.stringify.
export async function getStaticProps(context) {
    let data = await fs.promises.readdir('blogData');
    let myFile;
    let allBlogs = [];
    for(let item = 0; item < data.length; ++item){
        const file = data[item];
        console.log(file);
        myFile = await fs.promises.readFile(('blogData/' + file), 'utf-8');
        // console.log(myFile);
        allBlogs.push(JSON.parse(myFile));
    }
    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog
