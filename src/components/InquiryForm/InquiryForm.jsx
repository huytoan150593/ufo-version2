import React, { useState } from "react";
import styles from "./InquiryForm.module.css";

const initialForm = {
    name: "",
    phone: "",
    email: "",
    message: "",
};

const InquiryForm = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className={styles.shell}>
            <div className={styles.mediaPane}>
                <div className={styles.circle}></div>
                <div className={styles.imageFrame}>
                    <img src="./assets/main-img.png" alt="production camera" loading="lazy" />
                </div>
            </div>

            <form className={styles.formPane} onSubmit={handleSubmit}>
                <label className={styles.field}>
                    <span className={styles.label}>name</span>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>phone</span>
                    <input
                        className={styles.input}
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>email</span>
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.field}>
                    <span className={styles.label}>message</span>
                    <textarea
                        className={`${styles.input} ${styles.textarea}`}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                    />
                </label>

                <button className={styles.submit} type="submit">
                    submit
                </button>
            </form>
        </div>
    );
};

export default InquiryForm;
