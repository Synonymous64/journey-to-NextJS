import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogSpot.module.css'
// * Step 1: Find the file corresponding to the file.
// * Step 2: Populate them inside the page.
const slug = ({ blogData }) => {
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
    //     let res = await fetch('../../blogData/how-to-learn-flask.json');
    //     let data = await res.json();
    //     return data;
    // }
    // let p = fetchApi();
    // console.log(p);
    const [blog, setBlog] = useState(blogData);
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
export async function getServerSideProps(context) {
    // console.log('use effect is running');
    // console.log(context.req.url);
    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
    let blogData = await data.json();
    return {
        props: { blogData }, // will be passed to the page component as props
    };
}
export default slug
