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
            src="/img/maternity-care1.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>Mother/Maternity Care</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/Maternity_Care3.jpg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture>
          <h4></h4>
          <p>
            Health and social care workers require adequate induction training and annual 
            refresher training to ensure that they remain up to date with recommended practice 
            and regulatory requirements. Training is defined as mandatory if it meets one or more
            of the following criteria: It is a statutory requirement (such as the Health and Safety 
            at Work Act). All staff across the organisation require the training. It is a CQC or local 
            authority requirement. The most common mandatory training subjects for care homes include.
          </p>



          <h4>Necessary Services provided  for Meternity/Mother Care :</h4>
          <ul>
            1. obstetricians: doctors who specialize in pregnancy and childbirth.
          </ul>
          <ul>
            2. obstetricians/gynecologists (OB/GYNs): doctors who specialize in pregnancy 
            and childbirth, as well as women's health care.
          </ul>
          <ul>
            3. family practitioners: doctors who provide a range of services for patients of all 
            ages (sometimes, this includes obstetrical care) instead of specializing in one area.
          </ul>
          <ul>
            4. certified nurse-midwife: an advanced practice nurse specializing in women's health care
            needs, including prenatal care, labor and delivery, and postpartum care for pregnancies
            without problems.
          </ul>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>The most common mandatory training subjects for care homes include:</h4>
              <ul>
                <li>Health and Safety</li>
                <li>Equality, Diversity and Human Rights.</li>
                <li>Infection, Prevention and Control.</li>
                <li>Manual Handling.</li>
                <li>Food Hygiene/Food Safety Awareness.</li>
                <li>Safeguarding Children.</li>
                <li>Safeguarding Adults.</li>
              </ul>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/Maternity_Care4.jpg"
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
