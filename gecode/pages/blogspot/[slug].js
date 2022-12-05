import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogSpot.module.css'
const slug = () => {
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
