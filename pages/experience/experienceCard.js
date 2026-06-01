import styles from "../../styles/Experience.module.css";

export default function ExperienceCard({ title, period, company, imageSource, alt, flavor, index, isEdu }) {
  const num = isEdu
    ? `#E${String(index + 1).padStart(2, '0')}`
    : `#${String(index + 1).padStart(3, '0')}`;

  const years = period.match(/\d{4}/g) || [];
  const yearDisplay = years.length <= 1
    ? (years[0] || period)
    : `${years[0]}-${years[years.length - 1].slice(2)}`;

  return (
    <li className={styles.entry}>
      <div className={`${styles.entryHeader} ${isEdu ? styles.entryHeaderEdu : ''}`}>
        <span>{num} {company.toUpperCase()}</span>
        <span>{yearDisplay}</span>
      </div>
      <div className={styles.entryBody}>
        <img src={imageSource} alt={alt} className={styles.logo} />
        <div className={styles.entryText}>
          <div className={styles.entryTitle}>{title.toUpperCase()}</div>
          <div className={`${styles.entryCompany} ${isEdu ? styles.entryCompanyEdu : ''}`}>
            {company.toUpperCase()}
          </div>
          <div className={styles.entryPeriod}>{period.toUpperCase()}</div>
          {flavor && <div className={styles.entryFlavor}>{flavor}</div>}
        </div>
      </div>
    </li>
  );
}
