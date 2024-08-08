"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchServiceController = exports.putServiceController = exports.postServiceController = exports.getAllServicebyidcontroller = exports.getAllServicesController = void 0;
function getAllServicesController(req, res) {
    res.status(200).send("this is get all Services");
}
exports.getAllServicesController = getAllServicesController;
function getAllServicebyidcontroller(req, res) {
    const { id } = req.params;
    res.status(200).send(`this is get all Service by id, your id is: ${id}`);
}
exports.getAllServicebyidcontroller = getAllServicebyidcontroller;
function postServiceController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "this is post Services", body: service });
}
exports.postServiceController = postServiceController;
function putServiceController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "this is put Services", body: service });
}
exports.putServiceController = putServiceController;
function patchServiceController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "this is patch Services", body: service });
}
exports.patchServiceController = patchServiceController;
