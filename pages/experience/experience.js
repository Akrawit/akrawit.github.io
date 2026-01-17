import styles from "../../styles/Experience.module.css";
import ExperienceCard from "./experienceCard";

const experienceData = [
  {
    title: "Staff Software Engineer",
    period: "Mar 2024 - Present",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo"
  },
  {
    title: "Senior Software Engineer",
    period: "Aug 2021 - Feb 2024",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo"
  },
  {
    title: "Software Engineer",
    period: "Aug 2016 - Jul 2021",
    company: "Agoda Services",
    url: "https://www.linkedin.com/company/agoda",
    imageSource: "/agoda.png",
    alt: "agoda-logo"
  },
  {
    title: "Full Stack Developer",
    period: "Feb 2015 - May 2016",
    company: "Wongnai.com",
    url: "https://www.linkedin.com/company/wongnai.com/",
    imageSource: "/wongnai.png",
    alt: "wongnai-logo"
  },
  {
    title: "Java Programmer",
    period: "May 2012 - Jul 2014",
    company: "CDG Systems",
    url: "https://www.linkedin.com/company/cdg-systems-cdgs-/",
    imageSource: "/cdgs.png",
    alt: "cdgs-logo"
  },
  {
    title: "Practical Training Student",
    period: "Apr 2011 - May 2011",
    company: "Universiti Teknologi Malaysia",
    url: "https://www.linkedin.com/school/universiti-teknologi-malaysia/",
    imageSource: "/utm.png",
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
