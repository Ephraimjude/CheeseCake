import Image from 'next/image';
import styles from './blog.module.css';

const Blog = () => {
    return(
            <div className={styles.container}>
                <div className={styles.title}>
                        <h1>Our Blog</h1>
                        <p>Our Recent Post</p>
                    </div>
                <div className={styles.blogContainer}>        
                    <div className={styles.blogCardContainer}>
                    <div className={styles.blogCard}>
                        <div className={styles.imgContainer}>
                            <Image src="/IMAGE FOR BLOG 1.png" alt="Blog Post 1" width={268} height={250}  className={styles.blogImg}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.date}>
                                23 Nov. 2023 / Cheesecake
                            </div>
                            <div className={styles.desc}>
                                <h2>
                                    A Peek Behind the Cheesecake Curtain
                                </h2>
                                <p>
                                Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very...
                                </p>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogCard}>
                        <div className={styles.imgContainer}>
                            <Image src="/Image Blog 2.png" alt="Blog Post 1" width={268} height={250} className={styles.blogImg}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.date}>
                                23 Nov. 2023 / Cheesecake
                            </div>
                            <div className={styles.desc}>
                                <h2>
                                    Low-Sugar & Gluten-Free Cheesecakes
                                </h2>
                                <p>
                                Welcome to our guilt-free indulgence zone, where we are redefining the art of cheesecake with our delectable low-sugar...
                                </p>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogCard}>
                        <div className={styles.imgContainer}>
                            <Image src="/Image Blog 3.png" alt="Blog Post 1" width={268} height={250} className={styles.blogImg}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.date}>
                                23 Nov. 2023 / Cheesecake
                            </div>
                            <div className={styles.desc}>
                                <h2>
                                    Sweet Words - Customer Reviews of Cheesecakes
                                </h2>
                                <p>
                                Indulge in the rich tapestry of heartfelt stories within the `Sweet Words`. This curated collection of customer reviews offers a glimpse into the joy...
                                </p>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    </div>                   
                </div>
            </div>
    )
}

export default Blog;