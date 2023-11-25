import React from "react";
import styles from "../styles/contact.module.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validating the form
        if (!name || !email || !contact || !desc) {
            toast.error("Please fill all the fields!");
            return;
        }

        const data = {
            name,
            email,
            contact,
            desc,
        };
        // console.log(data);


        // Fetching data from api and sending data to api 
        fetch("http://localhost:3000/api/postContact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            // body: data,
        })
            .then((res) => res.text())
            .then((data) => {
                // console.log("Success:", data);
                toast.success("Your message has been sent successfully!");

                setName("");
                setEmail("");
                setContact("");
                setDesc("");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        

    }

    const onChangeHandler = (e) => { 
        const {name, value} = e.target;
        if (name === "name") {
            setName(value);
        }
        else if (name === "email") {
            setEmail(value);
        }
        else if (name === "phone") {
            setContact(value);
        }
        else if (e.target.name === "desc") {
            setDesc(e.target.value);
        }
    }
    // const notify = () => toast.success("Your message has been sent successfully!");


    return (
        <>
                   <ToastContainer />

            <div className={styles.main}>
                <div className={styles.image}>
                    <img src="/images/contact.jpg" alt="contact" />
                </div>
                <div className={styles.container}>
                    <h1>Contact Us</h1>
                    <form action=""  onSubmit={handleSubmit}>
                        <div className={styles.inputDiv}>
                            <label htmlFor="name" className={styles.formLabel}>
                                Enter Your Name
                            </label>
                            <input
                                onChange={onChangeHandler}
                                value={name}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor="email" className={styles.formLabel} >
                                Email Address{" "}

                            </label>
                            <input
                                onChange={onChangeHandler}
                                value={email}
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor="phone" className={styles.formLabel}>
                                Contact
                            </label>
                            <input
                                onChange={onChangeHandler}
                                value={contact}
                                type="number"
                                className="form-control"
                                id="phone"
                                name="phone"
                            />
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor="desc" className={styles.formLabel}>
                                Elaborate Your concern
                            </label>
                            <textarea
                                onChange={onChangeHandler}
                                value={desc}
                                name="desc"
                                className="form-control"
                                placeholder="write your concern here"
                                id="desc"
                                cols="30"
                                rows="10"
                            />
                        </div>
                        <button type="submit" className={styles.btn} >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
