import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";

const Blog = (props) => {
    // console.log("props from blog", props);
    const [blogs, setBlogs] = useState(props.allBlogs);
    /*  useEffect(() => {
        console.log("useEffect is called");
        fetch("http://localhost:3000/api/blog")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setBlogs(data);
            });
    }, []); */

    return (
        <>
            <div className={styles.blogContainer}>
                <div className={styles.content}>
                    <h1>Latest Blogs</h1>
                    {/* BlogMap_______________________________________________________________________ */}
                    {blogs.map((blog) => {
                        return (
                            <div className={styles.topics}>
                                <Link href={"/blogpost/" + blog.slug}>
                                    {blog.title}
                                </Link>
                                <p>{blog.metadesc.substr(0, 400)}....</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
/* // StaticProps_____________________________________________
export async function getStaticProps(context) {
    let data = await fetch("http://localhost:3000/api/blog");
    let allBlogs = await data.json();
    return {
        props: {
            allBlogs,

        },
    };
} */

// ServerSideProps___________________________________________
export async function getServerSideProps(context) {
    let data = await fetch("http://localhost:3000/api/blog");
    let allBlogs = await data.json();
    return {
        props: {
            allBlogs,
        },
    };
}
export default Blog;
