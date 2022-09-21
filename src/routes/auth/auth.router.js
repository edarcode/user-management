import { Router } from "express";
import { validateRegister } from "../../middlewares/validateRegister.js";
import { loginController } from "./postController/login.controller.js";
import { registerController } from "./postController/register.controller.js";

export const auth = Router();

auth.route("/register").post(validateRegister, registerController);
auth.route("/login").post(loginController);
