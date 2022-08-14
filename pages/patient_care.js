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
            src="/img/Patient_Care1.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>Patient Care</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          {/* <picture>
            <img
              src="/img/Personal_Assistent2.jpg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture> */}
          {/* <h4>Patient Service</h4>
          <p>
            We try our all efforts to make our patient life healthy and enjoyfull.
            

          </p> */}
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
                <h4>Patient Care Service</h4>
                <p>1. Baby care Service provides good service to their patients, We always take care of our patient.</p>
                <p>2. We try our all efforts to make our patient life healthy and enjoyfull.</p>
                <p>3. Our highly skilled nurses are available to provide the skilled medical care to you and your loved once.</p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/Patient_Care2.jpg"
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
