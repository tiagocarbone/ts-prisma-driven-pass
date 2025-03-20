import { Router } from "express";
import { Request, Response} from "express"
import authRouter from "./auth-router";
import credentialsRouter from "./credentials-router";

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.status(200).send('I’m OK!');
  });

router.use(authRouter)
router.use(credentialsRouter)


export default router;