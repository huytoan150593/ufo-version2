import React, { useState } from "react";
import styles from "./ActorList.module.css";
import ActorDetailCard from "./ActorDetailCard";
import { actors } from "../../data/siteContent";

const ActorList = () => {
    const [selectedActorId, setSelectedActorId] = useState(actors[0]?.id);
    const selectedActor = actors.find((actor) => actor.id === selectedActorId) || actors[0];

    return (
        <section className={styles.section} id="actor">
            <div className={styles.inner}>
                <div className={styles.heading}>
                    <p className={styles.eyebrow}>Casting Board</p>
                    <h2 className={styles.title}>Actor List</h2>
                    <p className={styles.description}>
                        Choose a profile from the list to reveal the featured talent card.
                    </p>
                </div>

                <div className={styles.layout}>
                    <div key={selectedActor.id} className={styles.detailPane}>
                        <ActorDetailCard actor={selectedActor} />
                    </div>

                    <div className={styles.selectorPane}>
                        <div className={styles.selectorRail}>
                            {actors.map((actor) => (
                                <button
                                    key={actor.id}
                                    type="button"
                                    className={`${styles.selectorCard} ${selectedActor.id === actor.id ? styles.active : ""}`}
                                    onClick={() => setSelectedActorId(actor.id)}
                                    aria-label={actor.name}
                                >
                                    <span className={styles.selectorText}>{actor.name}</span>
                                    <span className={styles.avatarWrap}>
                                        <span className={styles.avatarFrame}>
                                            <img src={actor.avatar} alt={actor.name} loading="lazy" />
                                        </span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActorList;
