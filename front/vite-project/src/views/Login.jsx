import /*React,*/ { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const POSTUSER_URL = "http://localhost:3000/users/login";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialState = {
        username: "",
        password: "",
    };

    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const validateUser = ({
        username,
        password,
    }) => {
        const errors = {};

        if (!username) errors.username = "Ingresar username";
        if (!password) errors.password = "Ingresar password";

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
            username: user.username,
            password: user.password,
        };
        axios
        .post (POSTUSER_URL, userData)
        .then(({ data }) => {
            dispatch(setUserData(data));
            alert("Usuario Logueado");
            setUser(initialState);
            navigate("/home");
        })
        .catch((error) => alert(error?.response?.data?.message));
    };

    const formData = [
        { label: "Username ", name: "username", type: "text" },
        { label: "Password ", name: "password", type: "password" },
    ];

    return (
        <div>
            <h2>Login</h2>
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
                <button
                type="submit"
                disabled={Object.keys(user).some((e) => !user[e])}
                >
                    Loguear
                </button>
                </form>
        </div>
    );
}

export default Login;