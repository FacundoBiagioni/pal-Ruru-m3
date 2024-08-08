import { ICredential } from "../../types/credential";
import { encryptPassword, comparePassword } from "../../utils";
import { credentials } from "../../db";
import { AppDataSource } from "../../config";
import { Credential } from "../../entities/Credential";

//register del usuario
async function generateCredential({username, password}: ICredential) : Promise<number | undefined> {
    try {
    const hash: string = encryptPassword(password);
    const cred = await AppDataSource.manager.save(Credential, {
        username,
        password: hash,
    });
    return cred.id;
    } catch (error : any) {
        throw new Error(error);
    }
}

//login del usuario
async function ckeckCredential({username, password} : ICredential) : Promise <number | string | undefined> {
    try {
       const credential = await AppDataSource.manager.getRepository(Credential).findOneBy({ username });
    if (!credential) {
        throw new Error("User not found")
    }
    const isValid = comparePassword(password, credential.password);
    if (!isValid) {
        throw new Error('Invalid credentials');
    }
    return credential.id;
} catch (error : any) {
        throw new Error(error)
    }
}

export { generateCredential, ckeckCredential};