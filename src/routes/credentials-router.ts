import { Router } from "express";
import { validarToken } from "../middlewares/auth-middleware";
import { postCredentialsController, getCredentialsController, getCredentialByIdController, deleteCredentialByIdController, putCredentialController } from "../controller/credentials-controller";
import { postOrpUTCredentialSchema } from "../schemas/index";
import { validateSchema } from "../middlewares/validation-middleware";



const credentialsRouter = Router();

credentialsRouter.post("/credentials", validateSchema(postOrpUTCredentialSchema), validarToken, postCredentialsController);
credentialsRouter.get("/credentials", validarToken, getCredentialsController);
credentialsRouter.get("/credentials/:id", validarToken, getCredentialByIdController);
credentialsRouter.put("/credentials/:id", validateSchema(postOrpUTCredentialSchema), validarToken, putCredentialController)
credentialsRouter.delete("/credentials/:id", validarToken, deleteCredentialByIdController)

export default credentialsRouter