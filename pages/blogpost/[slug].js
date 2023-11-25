import { useRouter } from "next/router";
import React from "react";
import Style from "../../styles/blogPost.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Post = (props) => {
    const [blog, setBlog] = useState(props.blog);
    // console.log(blog.content);

    /* 
    const Router = useRouter();
     useEffect(() => {
        if (!Router.isReady) return;
        const { slug } = Router.query;
        console.log("useEffect is called from SLUG");
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Data from dynamic route", data);
                setBlog(data);
            });
    }, [Router.isReady]); */
    return (
        <>
            <div className={Style.blogContainer}>
                <h1 className={Style.titlePage}>
                    Title of the page : <span>{blog && blog.title}</span>
                </h1>
                <div className={Style.blogMid}>
                    <div className={Style.blogImage}>
                        <img src={blog.imgUrl} alt="" />
                    </div>

                    {/* blogContent______________________________ */}
                    <div className={Style.blogPara}>
                        {/* <p>{blog && blog.content}</p> */}
                        {/* use dangerouslySetInnerHtml */}
                        <div
                            dangerouslySetInnerHTML={{
                                __html: blog && blog.content,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

// StaticSide Props___________________________________________
/* export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "learnJavaScript" } },
            { params: { slug: "learnNextJs" } },
            { params: { slug: "learnReact" } },
        ],
        fallback: false,
    };
} */

/* export async function getStaticProps(context) {
    console.log("Context from getStaticProps----------------",context)
    const { slug } = context.params;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let blog = await data.json();
    return {
        props: {
            blog,
        },
    };
}  */

// ServerSideProps___________________________________________
export async function getServerSideProps(context) {
    // console.log("context from getServerSideProps/\/\\/\/\/\/\/\/\/\/\/\\",context) //query: { slug: 'learnNextjs' },
    const { slug } = context.query;
    console.log("This is a slug from slug =========||||||||||||||||", slug);
    console.log("getServerSideProps is called from SLUG_____________________");
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let blog = await data.json();
    return {
        props: {
            blog,
        },
    };
}
export default Post;
