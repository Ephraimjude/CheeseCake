"use client";

import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ( {item, onClick} ) => {

    const pathName = usePathname();

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return(
    
            <Link href={item.path} 
            className={`${styles.container} 
            ${pathName === item.path && styles.active}`}
            onClick={handleClick}
            >
                {item.title}
            </Link>

    )
}

export default NavLink