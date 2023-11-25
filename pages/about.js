import React from "react";
import styles from "../styles/about.module.css";

function About() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img src="/images/about.jpg" alt="contact" />
                    </div>
                    {/* About_____________________ */}
                    <div className={styles.about}>
                        <div className={styles.heading}>
                            <h1>About Hunting Coder</h1>
                        </div>

                        <div className={styles.intro}>
                            <h3>Introduction</h3>
                            <p>
                                Greetings! I'm Rahul Yadav, the founder of
                                Hunting Coder, a platform dedicated to
                                empowering developers and fostering a vibrant
                                community. As a seasoned developer, I bring a
                                wealth of experience and expertise to the table.
                                Hunting Coder serves as a valuable resource for
                                coders looking to share their insights,
                                experiences, and coding adventures. My journey
                                in the tech world has equipped me with a deep
                                understanding of the intricacies of coding, and
                                I am passionate about creating a space where
                                developers can come together to exchange
                                knowledge, showcase their skills, and learn from
                                each other. Hunting Coder is not just a website;
                                it's a collaborative hub where developers,
                                regardless of their level of expertise, can
                                contribute blogs about codes, programming
                                techniques, and the challenges they've overcome.
                                At Hunting Coder, the focus is not just on the
                                code but also on the coder. It's a platform that
                                recognizes the importance of sharing
                                experiences, lessons learned, and the joy of
                                coding. Whether you're a seasoned developer or
                                just starting your coding journey, Hunting Coder
                                is designed to be a supportive community where
                                everyone can grow and thrive. I invite you to
                                explore Hunting Coder, contribute your insights,
                                and join a community of like-minded individuals
                                passionate about the world of coding. Together,
                                let's make Hunting Coder a go-to destination for
                                coders seeking inspiration, knowledge, and a
                                sense of camaraderie in the vast and
                                ever-evolving landscape of programming.
                            </p>
                        </div>
                        <div className={styles.services}>
                            <h3>Services</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minus, placeat? Debitis eius
                                ipsam pariatur quod quasi veniam quidem vel esse
                                perspiciatis sequi earum voluptate laboriosam
                                unde laborum, fuga molestiae, iste mollitia quo!
                                Iusto quidem beatae fugit expedita dolores nemo
                                temporibus id, dolorem quod aperiam consectetur
                                vel! Incidunt commodi nesciunt ad.
                            </p>
                        </div>

                        <div className={styles.contact}>
                            <h3>Contact Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minus, placeat? Debitis eius
                                ipsam pariatur quod quasi veniam quidem vel esse
                                perspiciatis sequi earum voluptate laboriosam
                                unde laborum, fuga molestiae, iste mollitia quo!
                                Iusto quidem beatae fugit expedita dolores nemo
                                temporibus id, dolorem quod aperiam consectetur
                                vel! Incidunt commodi nesciunt ad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
