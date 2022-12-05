import React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
const NavBar = () => {
    return (
        <div>
            <nav className={styles.mainNav}>
                <ul>
                    <Link href="/" legacyBehavior><a><li>Home</li></a></Link>
                    <Link href="/about" legacyBehavior><a><li>About</li></a></Link>
                    <Link href="/blog" legacyBehavior><a><li>Blog</li></a></Link>
                    <Link href="/contact" legacyBehavior><a><li>Contact</li></a></Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
