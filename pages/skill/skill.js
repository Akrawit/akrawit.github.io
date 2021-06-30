import styles from "../../styles/Skill.module.css"
import SkillCircular from "./skillCircular";

export default function Skill() {
  return (
    <section className={styles.skill}>
      <h2>Skills</h2>
      <ul>
        <SkillCircular skillValue={7/10} label="C#"/>
        <SkillCircular skillValue={5/10} label="JS"/>
        <SkillCircular skillValue={6/10} label="HTML/CSS"/>
        <SkillCircular skillValue={6/10} label="Java"/>
        <SkillCircular skillValue={4/10} label="Typescript"/>
        <SkillCircular skillValue={5/10} label="SQL"/>
      </ul>
    </section>
  )
}
