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
          <h1><b>SENIOR CITIZEN/EALDERLY SERVICE</b></h1>
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

          <h4>Senior Citizen Care/Elderly Care</h4>
          <p>
            We are one-stop-shop to avail highly talented baby care professionals for infants and babies.
            The baby care experts offered by us are well-guided to give ultimate care with lots of love 
            to the children of all age groups.
          </p>
        <div className={styles.miniContent}>
            <div className={`${styles.left} ${styles.flex1}`}>
                <h4>How does our Elder Care program work?</h4>
                <ul>
                    Customers can hire female baby care takers from us for giving complete care to their children.
                    We ensure that our baby care staff will take care of all activities and physical health of the babies by serving them proper food, and handle them with affection and warmth.
                </ul>
                <h4>Every time we Java Maid, we'll provide services that include the following:</h4>
                <div>
					<p><b>Baby Care</b></p>
					Consistent and uninterrupted service.Trained & certified attendant monitored by Supervisor.
                </div>
                <div>
                    <p><b>Patient Care</b></p>
					Process driven care plan and reporting.
                </div> 
                <div>       
					<p><b>Living Areas</b></p>
					Surfaces hand wiped, cobwebs removed, doors and door frames spot cleaned, general dusting,
                    floors cleaned.
				</div>
                <div>
                    <p><b>Kitchen</b></p>
					Countertops cleaned, outside of range hood cleaned, top and front of range cleaned, drip pans / glass top surfaces wiped, sinks
                    cleaned and chrome shined, fronts of all appliances cleaned, general dusting, cobwebs removed,
                    microwave wiped out, doors and door frames spot cleaned.
                </div>
            </div>
            <div className={styles.right}>
              <picture>
                <img
                  src="/img/Senior_Citizen1.jpg"
                  alt="kids"
                  height="300px"
                  className={styles.leftContentImg}
                />
              </picture>
            </div>
        </div>
        {/* <div className={styles.miniContent}>
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
        </div> */}


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
