import React from "react";
import styles from "./Director.module.css";
import { useInView } from "react-intersection-observer";

const Director = () => {
    const { ref: myRef, inView: isVisibleElement } = useInView({
        threshold: 0.5,
    });
    return (
        <div
            ref={myRef}
            className={`${styles.container} ${
                isVisibleElement ? styles.show : ""
            }`}>
            <p>{isVisibleElement.toString}</p>
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
