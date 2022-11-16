import React from "react";
import styles from "./VideoList.module.css";

const VideoList = () => {
    const musicVideo = [
        {
            name: "Bản tình ca mùa đông",
            thumbnail: "/assets/demo-thumb.jpg",
        },
        {
            name: "Bản tình ca mùa đông",
            thumbnail: "/assets/demo-thumb.jpg",
        },
        {
            name: "Bản tình ca mùa đông",
            thumbnail: "/assets/demo-thumb.jpg",
        },
        {
            name: "Bản tình ca mùa đông",
            thumbnail: "/assets/demo-thumb.jpg",
        },
        {
            name: "Bản tình ca mùa đông",
            thumbnail: "/assets/demo-thumb.jpg",
        },
    ];
    return (
        <div className={styles.container}>
            {musicVideo.map((item, idx) => (
                <div key={idx} className={styles.line}>
                    <div className={styles.thumb}>
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <div className={styles.name}>{item.name}</div>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
