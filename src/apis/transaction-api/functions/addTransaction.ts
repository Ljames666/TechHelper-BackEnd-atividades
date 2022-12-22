import { Request, Response } from 'express';
import jamesBank from '../classes/Bank';
import Transaction from '../classes/Transaction';

export default function addTransaction(req: Request, res: Response) {
    const { userId } = req.params;
    const { title, value, type } = req.body;

    if (!title || !value || !type) {
        return res.status(418).send({ message: 'cê é loko' });
    }
    const client = jamesBank.findClientById(userId)!;
    const newTransaction = new Transaction(title, value, type);

    client.transactions.push(newTransaction);

    return res.status(200).send({ message: 'success', newTransaction, client });
}
