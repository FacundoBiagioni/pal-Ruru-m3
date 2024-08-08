import { Router } from "express"
import { getAllUSersController, getAllUserbyidcontroller, postUserRegisterController, postUserLoginController } from "../../controllers/user";
const routerUser : Router = Router()


routerUser.get("/", getAllUSersController);
routerUser.get("/:id", getAllUserbyidcontroller);
routerUser.post("/register", postUserRegisterController);
routerUser.post("/login", postUserLoginController);


export default routerUser; 