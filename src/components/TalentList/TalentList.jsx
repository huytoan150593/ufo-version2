import React from "react";
import styles from "./TalentList.module.css";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import InfoCard from "../shared/InfoCard/InfoCard";
import { talents } from "../../data/siteContent";

const TalentList = () => {
    return (
        <section className={styles.section} id="talent">
            <div className={styles.inner}>
                <SectionHeading
                    eyebrow="On-Camera Talent"
                    title="Talent List"
                    description="A working list of actor and visual talent profiles that can be paired with music videos, commercials, branded shoots, and editorial-led productions."
                />

                <div className={styles.grid}>
                    {talents.map((talent) => (
                        <article key={`${talent.name}-${talent.image}`} className={styles.card}>
                            <div className={styles.imageWrap}>
                                <img src={talent.image} alt={talent.name} loading="lazy" />
                            </div>

                            <InfoCard
                                as="div"
                                className={styles.infoCard}
                                subtitle={talent.role}
                                title={talent.name}
                                meta={talent.specialty}
                                description={talent.description}
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentList;
