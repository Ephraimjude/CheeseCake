import Image from 'next/image';
import styles from './home.module.css';
import About from './about/page';
import Menu from './menu/page';
import Blog from './blog/page';
import Contact from './contact/page';

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.homeContainer}>
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
        </div>        
        <About />
        <Menu />
        <Blog />
        <Contact />
    </div>
  )
};

export default Home;