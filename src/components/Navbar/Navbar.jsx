import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { BsYoutube, BsFacebook, BsTwitter, BsFilm } from "react-icons/bs";

const Navbar = () => {
    console.log(window.screen.width);
    const menuList = ["home", "projects", "gallery", "contact"];
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="./assets/logo.png" alt="logo" />
            </div>
            <div className={styles.menu}>
                <ul>
                    {menuList.map((item) => (
                        <li key={item}>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <BsFacebook size={30} />
                </div>
                <div className={styles.icon}>
                    <BsYoutube size={30} />
                </div>
                <div className={styles.icon}>
                    <BsTwitter size={30} />
                </div>
            </div>

            {/* -------------------Mobile menu----------------------- */}

            <div className={styles.mobilogo}>
                <img src="./assets/mobi-logo.png" alt="ufo-mobi" />
            </div>
            <div className={styles.brand}>
                <img src="./assets/brand-name.png" alt="ufo-entertainment" />
            </div>
            <div className={styles.hamburger} onClick={handleClick}>
                <BsFilm size={30} />
            </div>

            {/* ------------show menu mobile---------------- */}
            {show && (
                <div className={styles.mobi}>
                    <ul>
                        {menuList.map((item) => (
                            <li key={item} onClick={handleClick}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.overlay} onClick={handleClick}></div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
