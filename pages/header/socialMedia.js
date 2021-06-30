import styles from "../../styles/Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialMedia(props) {
    return (
        <a href={props.socialMedia} target="_blank">
            <FontAwesomeIcon icon={props.iconType} className={styles.social} />
        </a>
    )
};
