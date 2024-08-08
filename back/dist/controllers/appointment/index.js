"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAppointmentController = exports.postAppointmentController = exports.getAllAppointmentbyidcontroller = exports.getAllAppointmentsController = void 0;
function getAllAppointmentsController(req, res) {
    res.status(200).send("this is get all Appointments");
}
exports.getAllAppointmentsController = getAllAppointmentsController;
function getAllAppointmentbyidcontroller(req, res) {
    const { id } = req.params;
    res.status(200).send(`this is get all Appointments by id, your id is: ${id}`);
}
exports.getAllAppointmentbyidcontroller = getAllAppointmentbyidcontroller;
function postAppointmentController(req, res) {
    const appointment = req.body;
    res.send(201).json({ message: "this is post Appointment", body: appointment });
}
exports.postAppointmentController = postAppointmentController;
function putAppointmentController(req, res) {
    const appointment = req.body;
    res.send(201).json({ message: "this is put Appointment", body: appointment });
}
exports.putAppointmentController = putAppointmentController;
