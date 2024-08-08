import { Request, Response } from "express";
import { getAllAppointmentsService, getAllAppointmentbyidService, postAppointmentService, putAppointmentService } from "../../services/appointment";

function getAllAppointmentsController(req: Request, res: Response) {
    res.status(200).send("this is get all Appointments") 
}  

function getAllAppointmentbyidcontroller(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).send(`this is get all Appointments by id, your id is: ${id}`);
}

function postAppointmentController(req: Request, res: Response) {
    const appointment = req.body
    res.send(201).json({message: "this is post Appointment", body: appointment});
}

function putAppointmentController(req: Request, res: Response) {
    const appointment = req.body
    res.send(201).json({message: "this is put Appointment", body: appointment});
}


export {
    getAllAppointmentsController,
    getAllAppointmentbyidcontroller,
    postAppointmentController,
    putAppointmentController
}