import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
    return(
        <div className={styles.aboutContainer}>
          <div className={styles.about}>
          <div className={styles.aboutImgContainer}>
            <Image src="/aboutImage.png" alt='' width={500} height={500} className={styles.aboutImg}/>
          </div>
          <div className={styles.aboutTextContainer}>
            <div className={styles.title}>
              <p>
                We Love Cheesecake
              </p>
            </div>
            <div className={styles.aboutSubtitle}>
              <p>
                Discover Our Cheesecake Story
              </p>
            </div>
            <div className={styles.aboutDesc}>
              <p>
                At Cheesecake Love, quality is our cornerstone. Each 
                Cheesecake is crafted with the finest ingredients, 
                meticulous attention to detail, and a clash of creativity.
              </p>
              <p>
                We believe in delivering not just desserts but moments of 
                sheer indulgence
              </p>
            </div>
            <div>
              <button className={styles.aboutBtn}>Read more</button>
            </div>
          </div>
        </div>
          </div>
    )
}

export default About;