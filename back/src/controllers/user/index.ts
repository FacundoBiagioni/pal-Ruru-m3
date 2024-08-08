import { Request, Response } from "express";
import { getAllUsersService, getAllUserbyidService, postUserRegisterService, postUserLoginService } from "../../services/user";

async function getAllUSersController(req: Request, res: Response) {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users)
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    } 
}  

async function getAllUserbyidcontroller(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const user = await getAllUserbyidService(Number(id));
        if(user) res.status(200).json(user);
        else res.status(404).json({ message: "User not found" })
        res.status(200).send(`this is get all User by id, your id is: ${id}`);
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
}

async function postUserRegisterController(req: Request, res: Response) {
    try {
        const user = req.body;
        const newUser = await postUserRegisterService(user);
        res.status(201).json({message: "User regirstered", newUser});
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
}

async function postUserLoginController(req: Request, res: Response) {
    try {
        const credentials = req.body;
        const id = await postUserLoginService(credentials)
        res.status(201).json({message: "User logged", id});
    } catch (error : any) {
        res.status(500).json({ message: error.message });
    }
}


export {
    getAllUSersController,
    getAllUserbyidcontroller,
    postUserRegisterController,
    postUserLoginController
}