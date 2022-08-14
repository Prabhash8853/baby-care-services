import Headings from "components/Headings";
import Layout from "Layout/Layout";
import Link from "next/link";
import styles from "styles/About.module.css";
import babyCareServices from "Data/babyCareServices.json";

export default function BabyCare() {
  return (
    <Layout header footer notification>
      <div className={styles.container}>
        <picture>
          <img
            src="/img/Personal_Cheif2.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Personal Cheif</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/Personal_Cheif1.jpg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture>
          <h4>Personal Chefi Service</h4>
          <p>
            In this busy life personal cheif is very good choice for our parent/child and for self also,
            Because with this facility person can manage their home very carefully.
            If you have small child then in this case you don't need to go anywhere you can book online assistent,
            they will come to your home and provide their services in reasonable price.
          </p>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Service Provided by Personal Cheif </h4>
                <p>1. Cook Healthy Food.</p>
                <p>2. Health Checkup.</p>
                <p>3. Emergency Service</p>

            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/House_Chef.png"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="links">
          <h4>Company</h4>
          <ul>
            {babyCareServices.map((data, idx) => (
              <li key={idx}>
                <Link href={data.href}>
                  <a>{data.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
