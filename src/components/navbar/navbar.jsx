import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';
import Links from './link/Links';

const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                <Image src="/LOGO OF CHEESECAKE.png" alt='' width={165} height={165} className={styles.logoImg}/>
                </Link>
            </div>
            <div className={styles.menu}>
                <Links />
            </div>
            <div className={styles.button}>
                <button className={styles.signInBtn}>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;