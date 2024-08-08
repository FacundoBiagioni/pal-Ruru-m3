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
exports.ckeckCredential = exports.generateCredential = void 0;
const utils_1 = require("../../utils");
const config_1 = require("../../config");
const Credential_1 = require("../../entities/Credential");
function generateCredential(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password }) {
        try {
            const hash = (0, utils_1.encryptPassword)(password);
            const cred = yield config_1.AppDataSource.manager.save(Credential_1.Credential, {
                username,
                password: hash,
            });
            return cred.id;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.generateCredential = generateCredential;
function ckeckCredential(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password }) {
        try {
            const credential = yield config_1.AppDataSource.manager.getRepository(Credential_1.Credential).findOneBy({ username });
            if (!credential) {
                throw new Error("User not found");
            }
            const isValid = (0, utils_1.comparePassword)(password, credential.password);
            if (!isValid) {
                throw new Error('Invalid credentials');
            }
            return credential.id;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.ckeckCredential = ckeckCredential;
