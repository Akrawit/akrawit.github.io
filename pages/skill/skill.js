import styles from "../../styles/Skill.module.css"
import SkillItem from "./skillCircular";

export default function Skill() {
  return (
    <section className={styles.skill}>
      <h2>Skills</h2>
      <ul>
        <SkillItem skillValue={8/10} label="C#" />
        <SkillItem skillValue={7/10} label="Java" />
        <SkillItem skillValue={6/10} label="JavaScript" />
        <SkillItem skillValue={6/10} label="HTML/CSS" />
        <SkillItem skillValue={5/10} label="SQL" />
        <SkillItem skillValue={5/10} label="TypeScript" />
      </ul>
    </section>
  )
}
