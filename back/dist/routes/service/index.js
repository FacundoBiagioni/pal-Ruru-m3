"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_1 = require("../../controllers/services");
const routerServices = (0, express_1.Router)();
routerServices.get("/", () => { services_1.getAllServicesController; });
routerServices.get("/:id", () => { services_1.getAllServicebyidcontroller; });
routerServices.post("/", () => { services_1.postServiceController; });
routerServices.put("/", () => { services_1.putServiceController; });
routerServices.patch("/", () => { services_1.patchServiceController; });
exports.default = routerServices;
