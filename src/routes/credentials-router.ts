import { Router } from "express";
import { validarToken } from "../middlewares/auth-middleware";
import { postCredentialsController } from "../controller/credentials-controller";
import { postCredentialSchema } from "../schemas/index";
import { validateSchema } from "../middlewares/validation-middleware";



const credentialsRouter = Router();

credentialsRouter.post("/credentials", validateSchema(postCredentialSchema), validarToken, postCredentialsController)

export default credentialsRouter