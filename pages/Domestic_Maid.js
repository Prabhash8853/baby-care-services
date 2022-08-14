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
            src="/img/Home_Maid1.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>Domestic Maid Service</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/Home_Maid3.jpg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture>
          <h4>Something about Domestic Maid Service</h4>
          <p>
            A domestic worker or domestic servant is a person who works within the scope of a residence.
            The term "domestic service" applies to the equivalent occupational category.
          </p>
          <h4>Are you Looking for Domestic Maid ?</h4>
          <p>
            If you are looking for a domestic maid, then this is a one stop solution for all these kind of needs.
            Here you can find well educated and highly skilled maid with effective cost.
          </p>

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Responsibility of Nanny:</h4>
                <ul>
                    1. House Cleaning.
                </ul>
                <ul>
                    2. Cooking.
                </ul>
                <ul>
                    3. Wash Dishes.
                </ul>
                <ul>
                    4. Sweeping a broom.
                </ul>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/House_Maid.png"
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
