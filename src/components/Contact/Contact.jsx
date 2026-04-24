import React from "react";
import styles from "./Contact.module.css";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import InfoCard from "../shared/InfoCard/InfoCard";
import { contactItems } from "../../data/siteContent";
import InquiryForm from "../InquiryForm/InquiryForm";

const Contact = () => {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.inner}>
                <SectionHeading
                    eyebrow="Start A Project"
                    title="Contact"
                    description="Share the brief, the rough goal, or even just the direction you are exploring. The team can shape the production path from there."
                    align="center"
                />

                <InquiryForm />

                <div className={styles.grid}>
                    {contactItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <InfoCard
                                key={item.title}
                                title={item.title}
                                subtitle={item.subtitle}
                                meta={item.meta}
                                description={item.description}
                            >
                                <div className={styles.contactMeta}>
                                    <span className={styles.iconWrap}>
                                        <Icon size={18} />
                                    </span>
                                    <span className={styles.reply}>Typical first reply: same working day</span>
                                </div>
                            </InfoCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Contact;
