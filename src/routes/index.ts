import { Router } from "express";
import { Request, Response} from "express"
import authRouter from "./auth-router";

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.status(200).send('I’m OK!');
  });

router.use(authRouter)


export default router;