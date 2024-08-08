import { Router } from "express"
import { getAllAppointmentsController, getAllAppointmentbyidcontroller, putAppointmentController, postAppointmentController } from "../../controllers/appointment";
const routerAppointment : Router = Router()


routerAppointment.get("/", getAllAppointmentsController);
 routerAppointment.get("/:id", getAllAppointmentbyidcontroller);
 routerAppointment.post("/schedule", postAppointmentController);
 routerAppointment.put("/cancel", putAppointmentController);

export default routerAppointment;