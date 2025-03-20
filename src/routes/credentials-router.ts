import { Router } from "express";
import { validarToken } from "../middlewares/auth-middleware";
import { postCredentialsController, getCredentialsController, getCredentialByIdController, deleteCredentialByIdController } from "../controller/credentials-controller";
import { postCredentialSchema } from "../schemas/index";
import { validateSchema } from "../middlewares/validation-middleware";



const credentialsRouter = Router();

credentialsRouter.post("/credentials", validateSchema(postCredentialSchema), validarToken, postCredentialsController);
credentialsRouter.get("/credentials", validarToken, getCredentialsController);
credentialsRouter.get("/credentials/:id", validarToken, getCredentialByIdController);
credentialsRouter.delete("/credentials/:id", validarToken, deleteCredentialByIdController)

export default credentialsRouter