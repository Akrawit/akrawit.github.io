import styles from "../../styles/Skill.module.css"
import { useState, useEffect } from 'react';

export default function SkillItem(props) {
    const [progress, setProgress] = useState(0);
    const percentage = Math.round(props.skillValue * 100);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(props.skillValue);
        }, 300);
        return () => clearTimeout(timer);
    }, [props.skillValue]);

    return (
        <li className={styles.skillItem}>
            <div className={styles.skillHeader}>
                <label className={styles.skillLabel}>{props.label}</label>
                <span className={styles.skillPercentage}>{percentage}%</span>
            </div>
            <div className={styles.progressBarContainer}>
                <div 
                    className={styles.progressBar}
                    style={{ width: `${progress * 100}%` }}
                >
                    <div className={styles.progressBarGlow}></div>
                </div>
            </div>
        </li>
    )
};
