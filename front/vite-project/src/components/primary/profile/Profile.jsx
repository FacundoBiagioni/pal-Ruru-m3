import styles from "./Profile.module.css"

const Profile= () => {
 
    return (
        <div className={styles.profile}>
            <button>
                <img
                    src="ruta_de_la_imagen_de_perfil.png" alt="Profile"
                />
            </button>
        </div>
    );
};

export default Profile;