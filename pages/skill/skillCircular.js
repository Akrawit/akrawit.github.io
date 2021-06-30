import styles from "../../styles/Skill.module.css"
import {
    CircularInput,
    CircularTrack,
    CircularProgress
} from "react-circular-input";

export default function SkillCircular(props) {
    return (
        <li className={styles.skillCircular}>
            <label>{props.label}</label>
            <div>
                <CircularInput value={props.skillValue} className={styles.circularInput}>
                    <CircularTrack />
                    <CircularProgress />
                    <text x={100} y={100} textAnchor="middle" fontWeight="bold">
                        {props.skillValue * 10}/10
                    </text>
                </CircularInput>
            </div>

        </li>
    )
};
