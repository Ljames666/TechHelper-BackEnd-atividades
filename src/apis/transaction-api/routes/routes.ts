import { Router, Request, Response } from 'express';
import addClients from '../functions/addClients';
import checkCpfToEquals from '../middlewares/checkCpfToEquals';

const router = Router();

router.post('/users', checkCpfToEquals, (req: Request, res: Response) => {
    addClients(req, res);
});

export default router;
