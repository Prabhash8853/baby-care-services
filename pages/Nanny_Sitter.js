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
            src="/img/Nanny_Sitter_Main.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>Nanny Sitter Service</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/after-school.jpeg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture>
          <h4>Something about Nanny Sitter Service</h4>
          <p>
            A Nanny is a person who cares the one or Children In front of their parent.
            this care is given within the children's family setting.
            A Nanny is also fully responsible to take care of children, so that parent 
            can focus on their work and other responsibility.
            Even they cook meals and do household chores, such as grocery shopping, medical issue etc.
          </p>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Responsibility of Nanny:</h4>
                <ul>
                    1. Organize Interesting activities and education games for childres.
                </ul>
                <ul>
                    2. Change diapers, bath children and if children do potty then we clean them 
                    (Means we take whole responsibility to take care of your child).
                </ul>
                <ul>
                    3. Teach children appropriate behaviour and how to respect their elders etc.
                </ul>
                <ul>
                    4. Take responsibility of your child while going inside and outside of home.
                </ul>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/nanny_sitter3.jpg"
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
