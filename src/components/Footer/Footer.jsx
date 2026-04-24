import React from "react";
import styles from "./Footer.module.css";
import { BsFacebook, BsGeoAltFill, BsInstagram, BsTelephoneFill, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topLine}>
                <span className={styles.line}></span>
                <span className={styles.ufoWrap}>
                    <span className={styles.ufoSaucer}></span>
                    <span className={styles.ufoBeam}></span>
                </span>
                <span className={styles.line}></span>
            </div>

            <div className={styles.inner}>
                <div className={styles.column}>
                    <h3 className={styles.heading}>info</h3>
                    <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                            <BsTelephoneFill size={30} />
                            <span>0358-825-222</span>
                        </div>
                        <div className={styles.infoItem}>
                            <MdEmail size={34} />
                            <span>ufo.entertainment2021@gmail.com</span>
                        </div>
                        <div className={styles.infoItem}>
                            <BsGeoAltFill size={36} />
                            <span>18bis/22/14 Nguyen Thi Minh Khai street, DaKao ward, District 1, Ho Chi Minh City.</span>
                        </div>
                    </div>
                </div>

                <div className={`${styles.column} ${styles.centerColumn}`}>
                    <h2 className={styles.brand}>UFO Entertainment</h2>
                    <p className={styles.quote}>
                        “The best way to find yourself is to lose yourself in the service of others”
                    </p>

                    <div className={styles.socials}>
                        <a href="#contact" aria-label="Facebook" className={styles.socialIcon}>
                            <BsFacebook size={22} />
                        </a>
                        <a href="#gallery" aria-label="YouTube" className={styles.socialIcon}>
                            <BsYoutube size={24} />
                        </a>
                        <a href="#actor" aria-label="Instagram" className={styles.socialIcon}>
                            <BsInstagram size={22} />
                        </a>
                    </div>

                    <p className={styles.copyright}>2022 Ufo entertainment. All rights reserved</p>
                </div>

                <div className={`${styles.column} ${styles.linksColumn}`}>
                    <h3 className={styles.heading}>quick links</h3>
                    <nav className={styles.links}>
                        {quickLinks.map((item) => (
                            <a key={item.label} href={item.href} className={styles.link}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
