import styles from "../../styles/Experience.module.css";
import ExperienceCard from "./experienceCard";

const experienceData = [
  {
    title: "Staff Software Engineer",
    period: "Mar 2024 - Present",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo",
    flavor: "Apex-tier species. Architects distributed systems and mentors junior Engineermon."
  },
  {
    title: "Senior Software Engineer",
    period: "Aug 2021 - Feb 2024",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo",
    flavor: "Evolved form. Known for building high-throughput backend solutions at speed."
  },
  {
    title: "Software Engineer",
    period: "Aug 2016 - Jul 2021",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo",
    flavor: "Base form. First encountered deep in Agoda's vast server caverns."
  },
  {
    title: "Full Stack Developer",
    period: "Feb 2015 - May 2016",
    company: "Wongnai.com",
    url: "https://www.linkedin.com/company/wongnai.com/",
    imageSource: "/wongnai.png",
    alt: "wongnai-logo",
    flavor: "A versatile species. Roams freely between frontend and backend territories."
  },
  {
    title: "Java Programmer",
    period: "May 2012 - Jul 2014",
    company: "CDG Systems",
    url: "https://www.linkedin.com/company/cdg-systems-cdgs-/",
    imageSource: "/cdgs.png",
    alt: "cdgs-logo",
    flavor: "Early encounter. Specializes in Java-type moves and enterprise patterns."
  },
  {
    title: "Practical Training Student",
    period: "Apr 2011 - May 2011",
    company: "Universiti Teknologi Malaysia",
    url: "https://www.linkedin.com/school/universiti-teknologi-malaysia/",
    imageSource: "/utm.png",
    alt: "utm-logo",
    flavor: "Rookie stage. Where skills were first put to the real-world test."
  }
];

const educationData = [
  {
    title: "Computer Engineering",
    period: "2008 - 2012",
    company: "KMUTT",
    url: "https://www.linkedin.com/school/kmutt/",
    imageSource: "/kmutt.png",
    alt: "kmutt-logo",
    flavor: "Origin story. The place where the Engineermon journey first began."
  },
  {
    title: "Student",
    period: "2002 - 2008",
    company: "MATHAYOMWATSING SCHOOL",
    url: "https://www.mws.ac.th/",
    imageSource: "/mws.jpg",
    alt: "mws-logo",
    flavor: "Pre-evolution era. Before the coding journey had even started."
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.second}>
      <div className={styles.sectionHeader}>
        <span>EXPERIENCE</span>
        <span>SEEN: {experienceData.length}</span>
      </div>
      <ul className={styles.experiencelist}>
        {experienceData.map((data, index) => (
          <ExperienceCard key={index} index={index} isEdu={false} {...data} />
        ))}
      </ul>

      <div className={`${styles.sectionHeader} ${styles.sectionHeaderEdu}`}>
        <span>EDUCATION</span>
        <span>SEEN: {educationData.length}</span>
      </div>
      <ul className={styles.experiencelist}>
        {educationData.map((data, index) => (
          <ExperienceCard key={index} index={index} isEdu={true} {...data} />
        ))}
      </ul>
    </section>
  );
}
