import {Router} from "express";
import { validateSchema } from "../middlewares/validation-middleware";
import { userSignUpController, userSignInController } from "../controller/auth-controller";
import { signUpSchema, signInSchema } from "../schemas/index";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(signUpSchema), userSignUpController);
authRouter.post("/sign-in", validateSchema(signInSchema),  userSignInController)

export default authRouter;