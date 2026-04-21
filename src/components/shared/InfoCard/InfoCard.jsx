import React from "react";
import styles from "./InfoCard.module.css";

const InfoCard = ({ title, subtitle, meta, description, children }) => {
    return (
        <article className={styles.card}>
            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            <h3 className={styles.title}>{title}</h3>
            {meta ? <p className={styles.meta}>{meta}</p> : null}
            {description ? <p className={styles.description}>{description}</p> : null}
            {children ? <div className={styles.extra}>{children}</div> : null}
        </article>
    );
};

export default InfoCard;
