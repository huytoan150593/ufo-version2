import React from "react";
import styles from "./ActorDetailCard.module.css";

const ActorDetailCard = ({ actor }) => {
    const Icon = actor.icon;

    return (
        <article className={styles.card}>
            <div className={styles.visualLayer}></div>
            <div className={styles.imageWrap}>
                <img src={actor.image} alt={actor.name} loading="lazy" />
            </div>

            <div className={styles.content}>
                <div className={styles.identity}>
                    <span className={styles.iconWrap}>
                        <Icon size={28} />
                    </span>
                    <div>
                        <h3 className={styles.name}>{actor.name}</h3>
                        <p className={styles.role}>{actor.role}</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <p className={styles.description}>{actor.description}</p>

                <div className={styles.tags}>
                    {actor.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ActorDetailCard;
