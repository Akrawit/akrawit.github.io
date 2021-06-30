import styles from "../../styles/Experience.module.css"

export default function ExperienceCard(props) {
    return (
        <li className={styles.experience}>
            <div className={styles.experienceinfo}>
                <span className={styles.title}>{props.title} </span>
                <span>{props.period}</span>
                <span>{props.company}</span>
            </div>
            <div>
                <a href={props.url} target="_blank">
                    <img src={props.imageSource} alt={props.alt} className={styles.logo} />
                </a>
            </div>
        </li>
        )
};
