import { Router, Request, Response } from 'express';
import addClients from '../functions/addClients';
import checkCpfToEquals from '../middlewares/checkCpfToEquals';
import readClientList from '../functions/readClientList';
import thisClient from '../functions/thisClient';
import editClient from '../functions/editClient';
import removeClient from '../functions/removeClient';
import addTransaction from '../functions/addTransaction';
import readCLientTransactions from '../functions/readCLientTransactions';
import customerSpecificTransaction from '../functions/customerSpecificTransaction';
import editSpecificTransaction from '../functions/editSpecificTransaction';
import removeTransactions from '../functions/removeTransactions';

const router = Router();

router.post('/clients', checkCpfToEquals, (req: Request, res: Response) => {
    addClients(req, res);
});

router.get('/clients', (req: Request, res: Response) => {
    readClientList(res);
});

router.get('/clients/:id', (req: Request, res: Response) => {
    thisClient(req, res);
});

router.put('/clients/:id', (req: Request, res: Response) => {
    editClient(req, res);
});

router.delete('/clients/:id', (req: Request, res: Response) => {
    removeClient(req, res);
});

//transactions
router.post('/clients/:userId/transactions', (req: Request, res: Response) => {
    addTransaction(req, res);
});

router.get('/clients/:userId/transactions', (req: Request, res: Response) => {
    readCLientTransactions(req, res);
});

router.get('/clients/:userId/transactions/:id', (req: Request, res: Response) => {
    customerSpecificTransaction(req, res);
});

router.put('/clients/:userId/transactions/:id', (req: Request, res: Response) => {
    editSpecificTransaction(req, res);
});

router.delete('/clients/:userId/transactions/:id', (req: Request, res: Response) => {
    removeTransactions(req, res);
});

export default router;
