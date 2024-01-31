import Image from 'next/image';
import styles from './menu.module.css';
import { RiArrowRightSLine } from '@remixicon/react';

const Menu = () => {
    return(
        <div className={styles.menuContainer}>
          <div className={styles.menuMain}>
            <div className={styles.menuTitle}>
              <h1>Our Menu</h1>
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
            <div className={styles.sliderButtonContainer}>
              <div className={styles.sliderButton}>
                <button className={styles.sliderButton}>
                View More 
                </button>
              </div>
              <div className={styles.buttonText}>
                <RiArrowRightSLine
                  size = {40}
                  className = "arrow"
                />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Menu;