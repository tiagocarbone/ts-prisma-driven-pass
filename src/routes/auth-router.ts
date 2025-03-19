import {Router} from "express";
import { userSchemaValidationSignUp, userSchemaValidationSignIn } from "../middlewares/validation-middleware";
import { userSignUpController, userSignInController } from "../controller/auth-controller";

const authRouter = Router();

authRouter.post("/sign-up", userSchemaValidationSignUp, userSignUpController);
authRouter.post("/sign-in", userSchemaValidationSignIn,  userSignInController)

export default authRouter;