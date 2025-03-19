import { Router } from "express";
import { Request, Response} from "express"
import authRouter from "./auth-router";

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

router.use(authRouter)


export default router;