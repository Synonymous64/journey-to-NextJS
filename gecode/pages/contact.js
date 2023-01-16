import React from 'react'
import styles from '../styles/Contact.module.css'
import { useState } from 'react';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        if (e.target.name === name) {
            setName(e.value);
        }
        console.log(e, 'change');
    }
    
    
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <div className={styles.mb3}>
                    <label htmlFor="name" className={styles.formLabel}>Enter your name</label>
                    <input type="text" className="form-control" id="name" name='name' value={name} onChange={handleChange} aria-describedby="emailHelp" />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="email" className={styles.formLabel}>Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={email} onChange={handleChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.formLabel}>phone</label>
                    <input type="phone" className="form-control" id="phone" name='phone' value={phone} onChange={handleChange} />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="desc">Your concern</label>
                    <textarea className="form-control" placeholder="Leave a description here" id="desc" name='desc' value={description} onChange={handleChange} style={{ height: "100px" }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
