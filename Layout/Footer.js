import Link from "next/link";
import styles from "styles/Footer.module.css";
import quickLinks from "Data/quickLinks.json";
import services from "Data/services.json";
import motherCare from "Data/motherCare.json";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.about}>
        <h3>ABOUT SENIOR SECURITY</h3>
        <p>
          Mother Touch Services is a leading organization to provide the best
          caretaker in Noida. If you are seeking caretaker for Baby in Noida ,
          “Mother Touch Services” is best caretaker services in Noida for your
          baby loved ones. Our main motto is to satisfy our Customers to the
          best of our ability and we endeavor to regularly improve our service
          quality by fulfill the changing requirements of our client's loved
          ones. We used to provide trained personal and best Caretaker services
          in Noida & aims to best caretaker service provider in Noida..
        </p>
      </div>
      <div className={styles.links}>
        <h3>Quick Links</h3>
        {quickLinks.map((link, idx) => (
          <Link key={idx} href={link.href}>
            <a>{link.content}</a>
          </Link>
        ))}
      </div>
      <div className={styles.links}>
        <h3>Services</h3>
        {services.map((link, idx) => (
          <Link key={idx} href={link.href}>
            <a>{link.content}</a>
          </Link>
        ))}
      </div>
      <div className={styles.links}>
        <h3>MOTHER TOUCH SERVICES</h3>
        {motherCare.map((link, idx) => (
          <Link key={idx} href={link.href}>
            <a>{link.content}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
