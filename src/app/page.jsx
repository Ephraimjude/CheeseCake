import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.home}>
          <div className={styles.textContainer}>
            <div className={styles.title}>
              <p>
                Bite The World of Cheesecake Wonders
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                We always make our customers happy by providing as many choices as possible
              </p>
            </div>   
            <div className={styles.buttons}>
              <button className={styles.button}>Get Started</button>
              <button className={styles.button}>Watch Demo</button>
            </div>   
          </div>
          <div className={styles.imgContainer}>
            <Image src="/Homeimage.png" alt=''width={600} height={600} className={styles.heroImg}/>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.about}>
          <div className={styles.aboutImgContainer}>
            <Image src="/aboutImage.png" alt='' width={600} height={600} className={styles.aboutImg}/>
          </div>
          <div className={styles.aboutTextContainer}>
            <div className={styles.title}>
              <p>
                We Love Cheesecake
              </p>
            </div>
            <div className={styles.subtitle}>
              <p>
                Discover Our Cheesecake Story
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                At Cheesecake Love, quality is our cornerstone. Each 
                Cheesecake is crafted with the finest ingredients, 
                meticulous attention to detail, and a clash of creativity.
              </p>
              <p>
                We believe in delivering not jst desserts but moments of 
                sheer indulgence
              </p>
            </div>
          </div>
        </div>
          </div>
        <div className={styles.menuContainer}>
          <div className={styles.menu}>

          </div>
        </div>
        <div className={styles.blog}>

        </div>
        <div className={styles.contact}>

        </div>
    </div>
  )
};

export default Home;