import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Navbar() {
    return (
        <>
            {/* NavBar______________________ */}
            <div className={styles.navBar}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </>
    );
}

export default Navbar;
