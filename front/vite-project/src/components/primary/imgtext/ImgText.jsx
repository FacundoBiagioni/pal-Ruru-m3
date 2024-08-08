// import textImg from "../../../assets/###"
import styles from "./ImgText.module.css"

const ImgText = ({text}) => {
    return (
        <div className={styles.container}>
            <img src="https://floorplannerespanol.com/wp-content/uploads/La-imagen-de-portada-debe-mostrar-planos-de-casas.webp" />
            <p>{text}</p>
        </div>
    );
};

export default ImgText; 


