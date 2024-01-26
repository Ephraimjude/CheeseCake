"use client";

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from "./navLink/navLink";
import Image from 'next/image';

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Menu",
        path: "/menu"
    },
    {
        title: "Contact",
        path: "/contact"
    }
];

const Links = () => {
    const [open, setOpen] = useState(false);

    const closeMobileMenu = () => {
        setOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.title} onClick={closeMobileMenu} />
                ))}
            </div>
            <div className={styles.mobileMenu}>
            <Image src="/menu.png" alt="" width={25} height={25} onClick={() => setOpen((prev) => !prev)} className={styles.menuButton} />
            </div>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLink item={link} key={link.title} onClick={closeMobileMenu} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
