import React from "react";
import styles from "./Gallery.module.css";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import { galleryItems } from "../../data/siteContent";

const Gallery = () => {
    return (
        <section className={styles.section} id="gallery">
            <div className={styles.inner}>
                <SectionHeading
                    eyebrow="Selected Frames"
                    title="Gallery"
                    description="A compact view of the visual worlds, production textures, and on-set energy behind UFO Entertainment projects."
                />

                <div className={styles.grid}>
                    {galleryItems.map((item) => (
                        <article key={item.title} className={styles.card}>
                            <div className={styles.imageWrap}>
                                <img src={item.image} alt={item.title} loading="lazy" />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.type}>{item.type}</p>
                                <h3 className={styles.title}>{item.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
