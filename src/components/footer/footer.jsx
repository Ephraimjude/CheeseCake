import styles from './footer.module.css';
import { RiFacebookFill, RiInstagramLine, RiTwitterXLine, RiYoutubeLine } from '@remixicon/react';

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.footerContainer}>
                <div className={styles.mediaIcons}>
                        <div className={styles.facebook}>
                            <RiFacebookFill
                            size={40}
                            color='#523728'
                            className='icon'
                        />
                        </div>
                        <div className={styles.facebook}>
                            <RiInstagramLine
                            size={40}
                            color='#523728'
                            className='icon'
                        />
                        </div>
                        <div className={styles.facebook}>
                            <RiTwitterXLine
                            size={40}
                            color='#523728'
                            className='icon'
                        />
                        </div>
                        <div className={styles.facebook}>
                            <RiYoutubeLine
                            size={40}
                            color='#523728'
                            className='icon'
                        />
                        </div>      
                </div>
                <div className={styles.copyright}>
                    <p className={styles.copyrightText}>Copyright 2024 Ephraim | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;