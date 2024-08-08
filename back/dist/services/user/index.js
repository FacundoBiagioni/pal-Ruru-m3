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
exports.postUserLoginService = exports.postUserRegisterService = exports.getAllUserbyidService = exports.getAllUsersService = void 0;
const credential_1 = require("../credential");
const config_1 = require("../../config");
const User_1 = require("../../entities/User");
function getAllUsersService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield config_1.AppDataSource.manager.getRepository(User_1.User).find();
            return users;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.getAllUsersService = getAllUsersService;
function getAllUserbyidService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield config_1.AppDataSource.manager.getRepository(User_1.User).findOneBy({ id });
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.getAllUserbyidService = getAllUserbyidService;
function postUserRegisterService(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const credentialId = yield (0, credential_1.generateCredential)({
                username: user.username,
                password: user.password
            });
            const newUser = config_1.AppDataSource.manager.getRepository(User_1.User).save({
                name: user.name,
                email: user.email,
                birthdate: user.birthdate,
                dni_number: user.dni_number,
                appointments: user.appointments,
                credentialsID: credentialId,
            });
            return newUser;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.postUserRegisterService = postUserRegisterService;
function postUserLoginService(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield (0, credential_1.ckeckCredential)(credentials);
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.postUserLoginService = postUserLoginService;
