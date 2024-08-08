import { Link, useLocation } from "react-router-dom";
import { ProfileButton, SearchBar } from "../../secundary";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

const NavBar = () => {

    const { pathname } = useLocation(); 

    const loggin = useSelector(state => state.actualUser.userData.loggin);

    return (
        <div className={styles.navbar}>
            <div className={styles.infoapp}>
                <img src="" alt="B+G Arquitect Log"/>
                <h2>B+G</h2>
            </div>
            <div className={styles.buttonsnav}>
                <Link to ="/home">
                <span className={styles.buttonnav}>Home </span>
                </Link>

                {loggin && (
                 <Link to ="/appointments">
               <span className={styles.buttonnav}>Mis turnos </span>
                </Link>
                )}

                <Link to ="/about">
                <span className={styles.buttonnav}>Acerca </span>
                </Link>

                <Link to ="/contact">
                <span className={styles.buttonnav}>Contacto </span>
                </Link>

                {
                    loggin &&
                    <Link to="/appointmentform">
                       <span className={styles.buttonnav}>Nueva reserva </span> 
                    </Link>
                }

                {
                    loggin ? (
                        <Link>
                            <span className={styles.buttonnav}>Logout</span>
                        </Link>
                    ) : (
                        <Link>
                            <span className={styles.buttonnav}>Login </span> 
                        </Link>
                    )
                }

            </div>
            <div>
                <ProfileButton/>
            </div>
        </div>
    );
};

export default NavBar;