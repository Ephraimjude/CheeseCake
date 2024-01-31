import Image from 'next/image';
import styles from './contact.module.css';


const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <div className={styles.infoText}>
                        <h1>Contact Us</h1>
                        <p>
                            Need to get in touch with us? Either fill out the form with your inquiry or find the department phone, email you’d like to connect below
                        </p>
                    </div>
                    <div className={styles.contactImg}>
                        <Image src="/contact image.png" alt='' width={200} height={300} className={styles.contactImg}/>
                    </div>
                </div>
                <div className={styles.contactForm}>
                        <input type="text" name="name" id="name" placeholder="Name"/><br/>
                        <input type="email" name="email" id="email" placeholder="Email"/><br/>
                        <textarea name="message" id="message" rows="5" cols="40" placeholder="Your Message..."></textarea><br/>
                        <button>Contact us now</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;