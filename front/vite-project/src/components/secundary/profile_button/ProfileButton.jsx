import styles from "./ProfileButton.module.css";

const ProfileButton = () => {
    return (
        <div className={styles.profilebutton}>
            <button className={styles.button}>
                Profile
            </button>
        </div>
    );
};

export default ProfileButton;