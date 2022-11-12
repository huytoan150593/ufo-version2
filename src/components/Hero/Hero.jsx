import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <p className={styles.title}>UFO-Entertainment</p>
                <p className={styles.des}>
                    UFO is a full service production house based in Saigon
                    Vietnam. We keep our overheads to a minimum so we can
                    maximize the budget to do the best work possible and put the
                    workss money where it belongs, on the screen.
                </p>
                <p className={styles.btn}>watch video</p>
            </div>
            <div className={styles.image}>
                <img src="./assets/main-img.png" alt="main" />
            </div>
        </div>
    );
};

export default Hero;
