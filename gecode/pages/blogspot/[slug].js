import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogSpot.module.css';
import * as fs from 'fs';
// * Step 1: Find the file corresponding to the file.
// * Step 2: Populate them inside the page.
const Slug = ({ myBlog }) => {
    // let api = "https://anapioficeandfire.com/api/characters/583";
    // const fetchContent = async (api) => {
    //     let p = await fetch(api);
    //     let data = await p.json();
    //     return data;
    // }
    // let data = fetchContent(api);
    // console.log(data);
    // console.log(data.name);
    // const fetchApi = async () => {
    //     let res = await fetch('../../myBlog/how-to-learn-flask.json');
    //     let data = await res.json();
    //     return data;
    // }
    // let p = fetchApi();
    // console.log(p);
    const [blog, setBlog] = useState(myBlog);
    // const router = useRouter();
    // const { slug } = router.query;
    // useEffect(() => {
    //     // console.log('use effect is running');
    //     if (!router.isReady) return;
    //     fetch(`http://localhost:3000/api/getBlog?slug=${slug}`).then((data) => {
    //         return data.json();
    //     }).then((parsedData) => {
    //         // console.log(parsedData);
    //         setBlog(parsedData)
    //     })
    // }, [router.isReady])
    return (
        <div className={`${styles.container}`}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                <p>
                    {blog && blog.content}
                </p>
            </main>
        </div>
    )
}
// The getServerSideProps function should return an object with any one of the following properties:

// props
// The props object is a key-value pair, where each value is received by the page component. It should be a serializable object so that any props passed, could be serialized with JSON.stringify.
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } }, // See the "paths" section below
            { params: { slug: 'how-to-learn-javascript' } }, // See the "paths" section below
            { params: { slug: 'how-to-learn-mongo' } }, // See the "paths" section below
        ],
        fallback: true
    };
}
export async function getStaticProps(context) {
    // console.log('use effect is running');
    // console.log(context.req.url);
    console.log(context);
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogData/${slug}.json`, 'utf-8');

    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    };
}
export default Slug;
