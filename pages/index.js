// import FeaturedSection from "components/FeaturedSection.js";
// import MainSection from "components/MainSection.js";
import Headings from "components/Headings";
import DetailedMotherServices from "components/Home/DetailedMotherServices";
import Services from "components/Home/Services";
import Footer from "Layout/Footer";
import { Header } from "Layout/Header";
import Layout from "Layout/Layout";
import styles from "styles/Home.module.css";
import { whyChooseData } from "Data/whyChooseData.js";
import WhyChooseUs from "components/Home/WhyChooseUs";
import { ParallaxBanner } from "react-scroll-parallax";
import Counter from "components/Home/Counter";
import data from "Data/counterData.json";
import Intro from "components/Home/Intro";
import MotherCare from "components/Home/MotherCare";
import Testimonials from "components/Home/Testimonials";

export default function Home() {
  return (
    <Layout header footer notification>
      <Intro />
      <div className={`${styles.topSection} ${styles.radialBorder}`}>
        <Headings title="Baby Care" content="About Baby Care Service"/>
        <div className={`${styles.mainSection}  grid`}>
          <Services />
        </div>
      </div>
      <div className={`${styles.detailedMotherServices}`}>
        <DetailedMotherServices />
      </div>
      <div className={`${styles.whyChooseWrapper} ${styles.radialBorder}`}>
        <Headings
          title="WE CARE ABOUT THEM LIKE PARENTS"
          content="WHY CHOOSE US?"
        />
        <div className={styles.whyChooseContainer}>
          {whyChooseData.map((data, idx) => (
            <WhyChooseUs key={idx} title={data.title} content={data.content} icon={data.icon}/>
          ))}
        </div>
      </div>
      <ParallaxBanner
        layers={[
          { image: "/img/kids.jpg", speed: -20 },
          { image: "/img/kids.jpg", speed: -10 },
        ]}
        className="aspect-[2/1] parallax"
      >
        <div className="absolute inset-0 items-center justify-center parallax-content">
          <h3 className="text-8xl text-white font-thin">Why Choose Us?</h3>
          <p>The Reasons That You Should Contact Us</p>
          <div className={styles.ruler}></div>
          <div className={`${styles.sideContent} ${styles.sides1}`}>
            <h1>1</h1>
            <div className={styles.sideContentContainer}>
              <h4>Over 7+ years of experience.</h4>
              <p>
                Mother Touch Services having 7+ years of experience by careing
                thousands of familys in Delhi NCR.
              </p>
            </div>
          </div>
          <div className={`${styles.sideContent} ${styles.sides2}`}>
            <h1>2</h1>
            <div className={styles.sideContentContainer}>
              <h4>Over 7+ years of experience.</h4>
              <p>
                Mother Touch Services having 7+ years of experience by careing
                thousands of familys in Delhi NCR.
              </p>
            </div>
          </div>
          <div className={`${styles.sideContent} ${styles.sides3}`}>
            <h1>3</h1>
            <div className={styles.sideContentContainer}>
              <h4>Over 7+ years of experience.</h4>
              <p>
                Mother Touch Services having 7+ years of experience by careing
                thousands of familys in Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </ParallaxBanner>

      <div className="count">
        {data.counts.map((count) => (
          <Counter key={count.id} data={count} />
        ))}
      </div>
      <MotherCare />
      <Testimonials />
    </Layout>
  );
}
