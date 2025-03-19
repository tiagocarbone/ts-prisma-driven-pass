import {Router} from "express";
import { userSchemaValidationSignUp } from "../middlewares/validation-middleware";
import { userSignUpController } from "../controller/auth-controller";

const authRouter = Router();

authRouter.post("/sign-up", userSchemaValidationSignUp, userSignUpController)

export default authRouter;