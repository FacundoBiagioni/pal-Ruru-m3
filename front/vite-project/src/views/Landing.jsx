import React from "react"
import { Link } from "react-router-dom"

function Landing() {
    return (
        <div>
            <h1>Bienvenido/a!</h1>
            <h2>¿Es tu primera vez en nuestra web?</h2>
            <Link to="/register">
                <button>Registrarse</button>
            </Link>

            <h2>¿Ya tiene una cuneta?</h2>
            <Link to="/login">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default Landing