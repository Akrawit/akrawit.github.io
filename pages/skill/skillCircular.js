// pages/skill/skillCircular.js
import styles from "../../styles/Skill.module.css";

const BAR_COLORS = {
  "C#":         styles.barCsharp,
  "Java":       styles.barJava,
  "JavaScript": styles.barJs,
  "HTML/CSS":   styles.barHtmlcss,
  "SQL":        styles.barSql,
  "TypeScript": styles.barTs,
};

export default function SkillItem({ skillValue, label }) {
  if (!label) return null;
  const pct = Math.round(skillValue * 100);
  const barClass = BAR_COLORS[label] || styles.barCsharp;

  return (
    <li className={styles.statRow}>
      <span className={styles.statLabel}>{label.toUpperCase()}</span>
      <div className={styles.statBarBg}>
        <div className={`${styles.statBar} ${barClass}`} style={{ width: `${pct}%` }} />
      </div>
      <span className={styles.statVal}>{pct}</span>
    </li>
  );
}
