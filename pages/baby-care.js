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
            src="/img/Caretaker-baby.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1>Baby Care</h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/sitter5.jpg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture>
          <h4></h4>
          <p>
            We do take care of the psychological, physical and cognitive needs
            of a baby. Our Babysitter in Noida is well conversant with keeping
            the babies with conducive and safe environment. Our specially
            trained Babysitter also guide the parents about how to attend to
            safety and health requirements of their babies. We offer
            Professional full time Baby Caretaker in Noida which are more
            experienced in his job. We will ensure our nannies and caretaker for
            babies are carefully interviewed and evaluated to meet the highest
            standard of expectation of all parents. Our specially designed
            varieties of programs fulfill the needs of both the kids and their
            parents Baby is born with the need to be loved and taken care of,
            but parenting is really very hard and we are the best baby caretaker
            in Noida. Here is the best way to reduce the stress you have
            experience while caretaker for baby in Noida is to opt for a trained
            Babysitter. Also to survive in today’s highly complex society we
            need to work for 24x7 so that we can maintain and fulfill our
            child’s present as well secure their future, and for that we need
            someone to take care of babies or a baby caretaker in Noida, someone
            who is highly and rich in experience in the field of care taking for
            baby. Our Full time Newborn Baby care in Noida help you find the
            best babysitter and Newborn Baby care in Noida to help your baby
            grow healthy. » All of our nannies are selected for their
            professionalism, honesty and commitment to working with children and
            their families. » Our Babysitters/nannies are professional child
            care who are qualified in childcare Training and have several years
            of experience. » To deliver our elevated level of care, all nannies
            are over 18 years old and have undergone an extremely thorough
            interview and screening process. » They are accessible at all times
            while on assignment with your children, are non-smokers, and all are
            required to sign a confidentiality agreement and maintain discretion
            at the client’s request. We understand that all parents want their
            kids to receive the best quality care while they are busy. Finding a
            caretaker for your baby or Babysitter in Noida who is reliable,
            experience and patient is very important. Today nannies play an
            important role in parenting as baby caretakers, nurturers,
            companions, sometimes educators or even mentors. So are you looking
            for the best caretaker in Noida, you have cater to the right place;
            we are the most reputed service provider for Baby Caretaker in
            Noida. Our staff is well trained and highly experienced Child Care
            in Noida. Let us search an experience Babysitter in Noida for you
            based on your requirements, while you can go to work with relaxing
            mind.
          </p>
          <h4>Product-List-View-Area Clear</h4>
          <p>
            We have different types of part-time, full time caretaker services.
            We also take up assignment baby sitter services in noida. To meet
            your varying needs, baby sitters can be available any time of the
            day or night, for as many hours, days or weeks as required. We are
            also able to accommodate last-minute and special requests, and as is
            our policy for all reservations, a 4-hour minimum will apply. To get
            your kids a Babysitter in Noida, these are some common types of
            babysitting services:
          </p>
          <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Day Care Babysitter In Noida</h4>
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
