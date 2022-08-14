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
            src="/img/Home_Nursing.jpg"
            alt="kids"
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h1><b>HOME NURSING SERVICE</b></h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContent}>
          <picture>
            <img
              src="/img/Home_Nursing1.jpeg"
              alt="kids"
              className={styles.leftContentImg}
            />
          </picture>
          {/* <h4></h4>
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
          </p> */}
          <h4>Male/Female Nurses</h4>
          <p>
            Baby Care Sevices are providing B.Sc Nursing /GNM nursing Staff with 
            experience of Hospitals of 2-3 years.We provide reliable and well experienced
            Nursing staff both male and female catering a wide variety of needs of our clients.
            Our nurses excel in attending our clients with their good patient care and hospitality 
            services. Our nurses are provided time to time training on quality health care and nursing acts.
            Our nurses offer quality healthcare services to clients at home.
          </p>
        <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
              <h4>Tracheostomy Care Nurses</h4>
              <p>
                Baby Care Services provide tracheostomy care staff for clients with new 
                or recent tracheostomy to maintain patency of the tube and minimize the
                risk for infection (since the inhaled air by the client is no longer 
                filtered by the upper airways). Initially a tracheostomy may need to be
                suctioned and cleaned as often as every 1 to 2 hours. After the initial
                inflammatory response subsides, tracheostomy care may only need to be done 
                once or twice a day, depending on the client.
              </p>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/Home_Nursing2.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
        </div>
        <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
            <h4>Nursing Attendents for Hospitals Or Home in Delhi/ NCR</h4>
                <ul>
                    <li>Nursing attendants are used for Performing Day to Day Tasks to support the Medical 
                    team in Properly Caring for the Disabled/Ill/Elderly citizen.</li>
                    <li>With Un-Matched Skill & Compassion, Care health trained nursing attendant's Play 
                    a Vital role in Patient Care.</li>
                    <li>Baby Care Services Trained Nursing Duties are Typically Involve a Great deal of Hands
                    on Contact. They are mostly responsible for Helping Patients with Basic Functions Such 
                    as wound dressing, bathing, feeding, exercises, and companionship.</li>
                    <li>Our Trained nursing attendants will Also Help Patients In & Out Of Bed, Take Them For 
                    walks, Help Them into Their wheelchairs, Helping Them with Their Hygiene Needs & 
                    Exercises.</li>
                    <li>Our Trained Nursing attendants will also help in Recording & Monitoring Vital signs &
                    Ensuring NUTRITION & Hydration.</li>
                    <li>Also Reporting Changes in the Patient's Physical & Mental Conditions to The Family 
                    Members or Medical team.</li>
                    <li>Our Professional Trained Nursing attendants have hands on work experience in wide 
                    array of care setups including nursing homes, Hospitals, Adult care Centers or assisted 
                    Living Facilities Apart From their Homes.</li>
                </ul>
                    <h4>Our Staff Supervision & Monitoring</h4>
					<ul>
					    <li>Age specific alarm limits.</li>
                        <li>Clinical state.</li>
                        <li>Nature of the airway problem.</li>
                        <li>Ability to breathe and maintain their airway in the event of accidental decannulation.</li>
                        <li>Ability to clear own secretions.</li>
                        <li>Frequency of suction/tracheostomy tube interventions required.</li>
                        <li>Ventilation requirements.</li>
                        <li>Cognitive ability.</li>	
                    </ul>

                
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
