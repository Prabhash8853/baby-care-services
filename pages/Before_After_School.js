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
          <h1><b>Before/After School Care Services</b></h1>
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
            <h4>Before/After School Service</h4>
            <p>
                There are various options for before- and afterschool care for your school-age child 
                (also known as out-of-school-time care). Child care centers and family child care homes 
                may offer this type of care. Recreation centers, places of worship, and youth programs, 
                including organizations such as the Boys and Girls Clubs, and 21st Century Community
                Learning Centers may also offer before-and afterschool programs. Additionally, in many 
                communities, local schools provide afterschool care or hire another agency to provide 
                onsite care before and after school. These programs are convenient for families since 
                transportation is not an issue. Contact your child’s elementary school to find out whether
                an onsite program is available.
            </p>
            <h4>How does our Baby Care Services program work?</h4>
            <ul>
                Make sure that each staff person has received training on important health and 
                safety topics such as first aid and CPR, giving children medication, and child 
                development.
            </ul>
            <ul>
                If before- and afterschool care programs are required to be licensed in your state, 
                ask to see a copy of the program’s license, registration or certification, and inspection
                history.
            </ul>
            <ul>
                Depending on the rules in your state, before- and afterschool care programs may or may not
                be required to be licensed. Licensing does not guarantee quality; however, it sets minimum
                standards and ensures that programs are monitored for compliance with these standards.
            </ul>
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
