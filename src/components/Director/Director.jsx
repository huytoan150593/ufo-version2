import React, { useEffect, useRef, useState } from "react";
import styles from "./Director.module.css";

const Director = () => {
    const myRef = useRef();
    const [visible, setVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setVisible(entries[0].isIntersecting);
        });
        if (myRef.current) {
            observer.observe(myRef.current);
        }
    }, [visible]);
    return (
        <div className={styles.container} ref={myRef}>
            <div className={styles.arrow}></div>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src="./assets/director.jpg" alt="director" />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Director - Producer <br /> Luan Minh
                    </div>
                    <div className={styles.des}>
                        Founder of UFO Entertaiment.
                        <br /> Has a strong passion for art and has been
                        pursuing art as a career since 2013.
                        <br />
                        Has participated in a lot of film, TVC, viral projects
                        both domestically and internationally such as The Vault
                        way down, Tracer, Song Lang, Dreamy eyes, This is Us,
                        Artemis Fowl... by different roles as PM. AD, Prouducer,
                        camera man... of 2021.
                        <br /> Always be creative and adaptive to new things to
                        make great products.
                    </div>
                    <div className={styles.sign}>
                        <img
                            loading="lazy"
                            src="./assets/sign.png"
                            alt="signature"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Director;
