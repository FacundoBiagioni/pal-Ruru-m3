import { useEffect } from "react";
import CardAppointment from "../components/primary/cardappointments/CardAppointments";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../redux/userSlice";

const GETUSERBYID_URL = "http://localhost:3000/users/";
const POSTCANCEL_URL = "http://localhost:3000/appointments/cancel/";

export default function Appointments() {

 const actualUserID = useSelector (state => state.actualUser.userData.user.id);
 const dispatch = useDispatch();
 useEffect(() => {
    axios
    .get(GETUSERBYID_URL + actualUserID)
    .then(response => response.data)
    .then(actualUser => {
        dispatch(setUserAppointments(actualUser.appointments));
    })
    .catch(error => console.log(error.message));
 }, [actualUserID, dispatch]);
 const appointments = useSelector(state => state.actualUser.userAppointments)

 const loggin = useSelector(state => state.actualUser.userData.loggin);
 const navigate = useNavigate()

 useEffect(() => {
    !loggin && navigate("/home");
 }, [loggin]);

 const handleAppointmentCancel = (appointmentId) => {
    axios
        .put(POSTCANCEL_URL + appointmentId)
        .then(response => response.data)
        .then((data) => {
            axios
                .get(GETUSERBYID_URL + actualUserID)
                .then(response => response.data.appointments)
                .then(appointments => dispatch(setUserAppointments(appointments)))
                .catch(error =>console.log(error.message));
        });
 };

 return (
    <div>
        <h1>Mis Reservas</h1>
        {
            appointments.map(appointment => (
                <CardAppointment
                key={appointment.id}
                id={appointment.id}
                date={appointment.date}
                time={appointment.time}
                userId={appointment.userId}
                status={appointment.status}
                description={appointment.description}
                handleAppointmentCancel={handleAppointmentCancel}
                />
            ))
        }
    </div>
 );
}