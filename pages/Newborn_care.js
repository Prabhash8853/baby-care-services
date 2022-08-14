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
            src="/img/NewBorn_Care.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>NEWBORN CARE</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/baby.jpg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture>
          <h4>Baby Care & Mother Care</h4>
          <p>
            We have different types of part-time, full time caretaker services.
            We also take up assignment baby sitter services in noida. To meet 
            your varying needs, baby sitters can be available any time of the 
            day or night, for as many hours, days or weeks as required. We are
            also able to accommodate last-minute and special requests, and as 
            is our policy for all reservations, a 24-hour minimum will apply.
          </p>
          <h5><b>To get your kids a Babysitter in Noida, these are some common types of babysitting services:
</b></h5>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4><li>Day Care Babysitter In Delhi -NCR</li></h4>
              <p>
                Babysitter will be taking care of the baby during day time at
                your home. We understand the needs for babies in all aspects
                whether it’s a physical need or a psychological need. We create
                an environment which is healthy, safe and highly enthusiastic.
                We have deigned several different kinds of programs for babies
                for full day care of your baby effective growth which ensures
                that the child is taken care at its best. Our staff is well
                trained professional who not only serve you but also help you,
                guide you on how to fulfill baby’s safety and health
                requirements.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/NewBorn_Care1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4><li>Overnight Baby Caretaker In Delhi-NCR</li></h4>
              <p>
                We offer overnight caretaker services with highly professional Baby 
                caretaker in Noida. All our Babysitter and nannies are properly instructed
                and evaluated to meet the standard requirements for Best Newborn Baby care
                in Noida. Each one of them are carefully interviewed and personally gone 
                through all the required legal formalities to provide caretaker for baby in 
                Noida. We understand the needs for babies in all aspects whether it’s a physical
                need or a psychological need. We create an environment which is healthy, safe and
                highly enthusiastic. We have deigned several different kinds of programs for babies 
                for full day care of your baby effective growth which ensures that the child is
                taken care at its best. Our staff is well trained professional who not only serve
                you but also help you, guide you on how to fulfill baby’s safety and health requirements.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/blog2.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4><li>24 Hours Babysitter In Delhi-NCR</li></h4>
              <p>
                You can also request the Babysitter to look after the baby for 24 hours and 
                5/6 days a week. That means the Babysitter will stay at baby’s house for day
                and night care. Some parents do that to give their child a familiar environment.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/new-born.jpeg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4><li>Part Time Or Temporary Babysitter In Noida</li></h4>
              <p>
                There are also part time or temporary nannies services available to look after your baby.
                They can be available on a period of time, let’s say 2 to 3 weeks. It is also possible to 
                hire a Babysitter for a few days, depending on your need.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/baby-care.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
          </div>

          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4><li>Hour Based Nurses (Four Hour Minimum)</li></h4>
              <p>
                Our daytime Newborn Baby care are perfect for the new or experienced parent who 
                wants an extra set of hands to help care for the new baby. Parents can rest, go to
                doctors’ appointments, spend time with siblings, After-school care, Care in groups,
                Late night/early morning request, Special occasion and get a little much-needed relief.
                Nannies Newborn baby care in Noida have been specially 
                selected from our experienced staff. They can also care for siblings when needed.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/blog2.jpg"
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
