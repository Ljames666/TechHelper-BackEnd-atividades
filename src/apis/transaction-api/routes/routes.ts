import { Router, Request, Response } from 'express';
import addClients from '../functions/addClients';

const router = Router();

router.post('/users', (req: Request, res: Response) => {
    addClients(req, res);
});

export default router;
