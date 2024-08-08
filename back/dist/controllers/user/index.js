"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserLoginController = exports.postUserRegisterController = exports.getAllUserbyidcontroller = exports.getAllUSersController = void 0;
const user_1 = require("../../services/user");
function getAllUSersController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, user_1.getAllUsersService)();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
exports.getAllUSersController = getAllUSersController;
function getAllUserbyidcontroller(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield (0, user_1.getAllUserbyidService)(Number(id));
            if (user)
                res.status(200).json(user);
            else
                res.status(404).json({ message: "User not found" });
            res.status(200).send(`this is get all User by id, your id is: ${id}`);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
exports.getAllUserbyidcontroller = getAllUserbyidcontroller;
function postUserRegisterController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.body;
            const newUser = yield (0, user_1.postUserRegisterService)(user);
            res.status(201).json({ message: "User regirstered", newUser });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
exports.postUserRegisterController = postUserRegisterController;
function postUserLoginController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const credentials = req.body;
            const id = yield (0, user_1.postUserLoginService)(credentials);
            res.status(201).json({ message: "User logged", id });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
}
exports.postUserLoginController = postUserLoginController;
