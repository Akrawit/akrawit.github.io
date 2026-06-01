// pages/skill/skill.js
import styles from "../../styles/Skill.module.css";
import SkillItem from "./skillCircular";

export default function Skill() {
  return (
    <section id="skills" className={styles.skill}>
      <div className={styles.statsCard}>
        <div className={styles.statsCardHeader}>
          <span className={styles.statsSprite}>🧑‍💻</span>
          <div>
            <div className={styles.statsMonName}>AKRAWIT</div>
            <div className={styles.statsTypes}>
              <span className={`${styles.statsType} ${styles.typeBackend}`}>BACKEND</span>
              <span className={`${styles.statsType} ${styles.typeFullstack}`}>FULLSTACK</span>
            </div>
          </div>
        </div>
        <ul className={styles.ul}>
          <SkillItem skillValue={8 / 10} label="C#" />
          <SkillItem skillValue={7 / 10} label="Java" />
          <SkillItem skillValue={6 / 10} label="JavaScript" />
          <SkillItem skillValue={6 / 10} label="HTML/CSS" />
          <SkillItem skillValue={5 / 10} label="SQL" />
          <SkillItem skillValue={5 / 10} label="TypeScript" />
        </ul>
      </div>
    </section>
  );
}
