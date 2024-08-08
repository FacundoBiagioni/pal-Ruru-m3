import /*React,*/ { useState } from "react";
import axios from "axios";

const emailRegExp = /\S+@\S+\.\S+/;
const POSTUSER_URL = "http://localhost:3000/users/register";

function Register() {
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        dni_number: "",
        username: "",
        password: "",
        confirmPassword: "",
    };

    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const validateUser = ({
        name,
        email,
        birthdate,
        dni_number,
        username,
        password,
        confirmPassword,
    }) => {
        const errors = {};

        if (!name) errors.name = "Ingresar un nombre";
        else {
            if(name.length < 2) errors.name = "Nombre de al menos 3 caracteres";
        }
        if (!email) errors.email = "Ingresar un email";
        else {
            if (!emailRegExp.test(email)) errors.email = "Ingresar un email";
        }
        if (!birthdate) errors.birthdate = "Ingresar fecha de nacimiento";
        if (!dni_number) errors.dni_number = "Ingresar número de Dni";
        if (!username) errors.username = "Ingresar username";
        if (!password) errors.password = "Ingresar password";
        if (confirmPassword !== password)
            errors.confirmPassword = "Password y confirmacion debén ser iguales";

        return errors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        setErrors(validateUser({ ...user, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            dni_number: user.dni_number,
            username: user.username,
            password: user.password,
        };
        axios
        .post (POSTUSER_URL, userData)
        .then(({ data}) => {
            console.log(data);
            console.log(user);
            alert(data.message);
            setUser(initialState);
        })
        .catch((error) => alert(error.message));
    };

    const handleReset = (event) => {
        event.preventDefault();
        setUser(initialState);
    };

    const formData = [
        { label: "Nombre ", name: "name", type: "text" },
        { label: "Username ", name: "username", type: "text" },
        { label: "Password ", name: "password", type: "password" },
        { label: "Confirmar Password ", name: "confirmPassword", type: "password" },
        { label: "Email ", name: "email", type: "text" },
        { label: "Fecha de Nacimiento ", name: "birthdate", type: "date" },
        { label: "Número de DNI ", name: "dni_number", type: "text" },
    ];

    return (
        <div>
            <h2>Registro</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                {formData.map(({ label, name, type}) => (
                    <div key={name}>
                        <label style={{ color: "white" }}>{label}</label>
                        <input
                        id={name}
                        name={name}
                        type={type}
                        value={user[name]}
                        placeholder={`Ingresar ${label.toLowerCase()}`}
                        onChange={handleChange}
                        />
                        {errors[name] && (
                            <span style={{ color: "red" }}>{errors[name]}</span>
                        )}
                        </div>
                ))}
                <button onClick={handleReset}>Borrar Formulario</button>
                <button
                type="submit"
                disabled={Object.keys(user).some((e) => !user[e])}
                >
                    Registrar
                </button>
                </form>
        </div>
    );
}

export default Register