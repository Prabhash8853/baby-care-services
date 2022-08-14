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
            src="/img/Personal_Security_Guard1.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>Personal Security Officer Service</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/Personal_Security_Gards.png"
              alt="kids"
              className={styles.leftContentImg}
            />
            </picture>
            <h4>Something about Personal Security Officer Service</h4>
            <p>
                Personal security officers play a important role for your house protections from many types 
                of attack such as stealing, robbery etc. and identifying the suspecious behavior.
                Our security officers are honest and provide alertness.


            </p>
          {/* <h4>Are you Looking for Domestic Maid ?</h4>
          <p>
            If you are looking for a domestic maid, then this is a one stop solution for all these kind of needs.
            Here you can find well educated and highly skilled maid with effective cost.
          </p> */}

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Duties of Security Officers:</h4>
                <ul>
                    1. Alertness.
                </ul>
                <ul>
                    2. Good Communication skills.
                </ul>
                <ul>
                    3. Ability to fullfil your needs.
                </ul>
                <ul>
                    4. Honesty.
                </ul>
                <ul>
                    5. House Protections.
                </ul>
                

            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/Personal_Security_Officer2.jpg"
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
