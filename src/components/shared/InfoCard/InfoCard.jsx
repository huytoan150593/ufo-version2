import React from "react";
import styles from "./InfoCard.module.css";

const InfoCard = ({ title, subtitle, meta, description, children, as = "article", className = "" }) => {
    const Component = as;

    return (
        <Component className={`${styles.card} ${className}`.trim()}>
            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            <h3 className={styles.title}>{title}</h3>
            {meta ? <p className={styles.meta}>{meta}</p> : null}
            {description ? <p className={styles.description}>{description}</p> : null}
            {children ? <div className={styles.extra}>{children}</div> : null}
        </Component>
    );
};

export default InfoCard;
