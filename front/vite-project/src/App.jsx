import Home from "./views/Home"
import NavBar from "./components/primary/navbar/Navbar"
import Appointments from "./views/Appointments"
import Register from "./views/Register"
import Login from "./views/Login"
import { Route, Routes } from "react-router-dom"
import About from "./views/About"
import Contact from "./views/Contact"
import Landing from "./views/Landing"
import ErrorPage from "./views/ErrorPage"
import AppointmentForm from "./views/AppointmentForm"

function App() {


  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Appointments" element={<Appointments />} />
        <Route path="/Appointmentform" element={<AppointmentForm />} />

      </Routes>
    </>
  )
}

export default App
