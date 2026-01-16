import styles from "../../styles/Experience.module.css";
import ExperienceCard from "./experienceCard";

const experienceData = [
  {
    title: "Staff Software Engineer",
    period: "2017 - present",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo"
  },
  {
    title: "Full Stack Developer",
    period: "2015 - 2017",
    company: "Wongnai Media",
    url: "https://www.linkedin.com/company/wongnai.com/",
    imageSource: "/wongnai.png",
    alt: "wongnai-logo"
  },
  {
    title: "Java developer",
    period: "2012 - 2014",
    company: "CDG Systems",
    url: "https://www.linkedin.com/company/cdg-systems-cdgs-/",
    imageSource: "/CDGS.png",
    alt: "cdgs-logo"
  },
  {
    title: "Intern",
    period: "2010",
    company: "Universiti Teknologi Malaysia",
    url: "https://www.linkedin.com/school/universiti-teknologi-malaysia/",
    imageSource: "/UTM.png",
    alt: "utm-logo"
  }
];

const educationData = [
  {
    title: "Computer Engineering",
    period: "2008 - 2012",
    company: "KMUTT",
    url: "https://www.linkedin.com/school/kmutt/",
    imageSource: "/kmutt.png",
    alt: "kmutt-logo"
  },
  {
    title: "Student",
    period: "2002 - 2008",
    company: "MATHAYOMWATSING SCHOOL",
    url: "https://www.mws.ac.th/",
    imageSource: "/mws.jpg",
    alt: "mws-logo"
  }
];

export default function Experience() {
  return (
    <section className={styles.second}>
      <div>
        <h2>Experience</h2>
        <ul className={styles.experiencelist}>
          {experienceData.map((data, index) => (
            <ExperienceCard
              key={index}
              title={data.title}
              period={data.period}
              company={data.company}
              url={data.url}
              imageSource={data.imageSource}
              alt={data.alt}
            />
          ))}
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <ul className={styles.experiencelist}>
          {educationData.map((data, index) => (
            <ExperienceCard
              key={index}
              title={data.title}
              period={data.period}
              company={data.company}
              url={data.url}
              imageSource={data.imageSource}
              alt={data.alt}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
