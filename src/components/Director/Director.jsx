import React from "react";
import styles from "./Director.module.css";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import { directors } from "../../data/siteContent";

const Director = () => {
    const featuredDirector = directors[0];

    return (
        <section className={styles.container}>
            <div className={styles.arrow}></div>
            <div className={styles.heading}>
                <SectionHeading
                    eyebrow="Featured Profile"
                    title={featuredDirector.name}
                    description="A closer look at the lead production voice behind UFO Entertainment's execution style and collaborative approach."
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src={featuredDirector.image} alt={featuredDirector.name} />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        {featuredDirector.role}
                    </div>
                    <div className={styles.des}>
                        {featuredDirector.description}
                        <br />
                        <br />
                        {featuredDirector.detail}
                    </div>
                    <div className={styles.sign}>
                        <img
                            loading="lazy"
                            src={featuredDirector.signature}
                            alt="signature"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Director;
