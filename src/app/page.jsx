import Image from 'next/image';
import styles from './home.module.css';

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
        <div className={styles.menuContainer}>
          <div className={styles.menuMain}>
            <div className={styles.menuTitle}>
              <p>Our Menu</p>
            </div>
            <div className={styles.menuList}>
              <div className={styles.menu}>
                <div className={styles.menuImgContainer}>
                <Image src="/1menu.png" alt='' width={70} height={70} className={styles.menuImg} />
                </div>
                <div className={styles.menuNameContainer}>
                  <div className={styles.menuName}>
                    <p>Blueberry Cheesecake</p>
                  </div>
                  <div className={styles.menuDesc}>
                    <p>Blueberry Love, Cheesecake delight</p>
                  </div>
                  </div>
                  <div className={styles.menuPrice}>
                  <div className={styles.price}>
                    $9.00
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.menu}>
              <div className={styles.menuImgContainer}>
                <Image src="/menu2.png" alt='' width={70} height={70} className={styles.menuImg} />
                </div>
                <div className={styles.menuNameContainer}>
                  <div className={styles.menuName}>
                    <p>Biscoff Cheesecake</p>
                  </div>
                  <div className={styles.menuDesc}>
                    <p>Biscoff adores cheesecake magic</p>
                  </div>
                  </div>
                  <div className={styles.menuPrice}>
                  <div className={styles.price}>
                    $11.00
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.menu}>
              <div className={styles.menuImgContainer}>
                <Image src="/menu3.png" alt='' width={70} height={70} className={styles.menuImg} />
                </div>
                <div className={styles.menuNameContainer}>
                  <div className={styles.menuName}>
                    <p>Chocolate Cheesecake</p>
                  </div>
                  <div className={styles.menuDesc}>
                    <p>Cherish Chocolate, relish cheesecake magic!</p>
                  </div>
                  </div>
                  <div className={styles.menuPrice}>
                  <div className={styles.price}>
                    $9.00
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                    <div className={styles.stars}>
                      <Image src="/star.png" width={40} height={40} alt='' className={styles.star} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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