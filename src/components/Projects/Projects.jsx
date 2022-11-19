import React from "react";
import styles from "./Projects.module.css";

function Projects() {
    const proType = [
        {
            type: "music",
            img: "./assets/mv-bg.png",
            des: "Music video is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        },
        {
            type: "tvc",
            img: "./assets/tvc-bg.png",
            des: "Television video commerce is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        },
        {
            type: "viral",
            img: "./assets/viral-bg.png",
            des: "Viral video is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.arrow}></div>
            <div className={styles.wrapper}>
                {proType.map((item, idx) => (
                    <div key={idx} className={styles.project}>
                        <div className={styles.divide}></div>
                        <div className={styles.content}>
                            <p>{item.des}</p>
                            <button>show more</button>
                        </div>
                        <div className={styles.image}>
                            <img src={item.img} alt="" loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
