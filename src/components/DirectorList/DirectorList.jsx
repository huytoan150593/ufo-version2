import React from "react";
import styles from "./DirectorList.module.css";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import InfoCard from "../shared/InfoCard/InfoCard";
import { directors } from "../../data/siteContent";

const DirectorList = () => {
    return (
        <section className={styles.section} id="team">
            <div className={styles.inner}>
                <SectionHeading
                    eyebrow="Core Team"
                    title="Director List"
                    description="A quick scan of the creative leads and production voices that shape UFO Entertainment work from concept to final frame."
                />

                <div className={styles.grid}>
                    {directors.map((person) => {
                        const Icon = person.icon;

                        return (
                            <InfoCard
                                key={person.name}
                                subtitle={person.role}
                                title={person.name}
                                description={person.description}
                            >
                                <div className={styles.iconRow}>
                                    <span className={styles.iconWrap}>
                                        <Icon size={18} />
                                    </span>
                                    <span className={styles.note}>{person.focus}</span>
                                </div>
                            </InfoCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DirectorList;
