import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogSpot.module.css'
// * Step 1: Find the file corresponding to the file.
// * Step 2: Populate them inside the page.
const slug = () => {
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
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={`${styles.container}`}>
            <main className={styles.main}>
                <h1>Title of the page {slug}</h1>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident fugiat labore nemo expedita ad iste distinctio deserunt fuga consequuntur sapiente! Eius autem molestiae mollitia modi excepturi quos quas error nesciunt?
                </p>
            </main>
        </div>
    )
}

export default slug
