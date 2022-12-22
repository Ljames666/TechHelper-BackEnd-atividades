import { Request, Response } from 'express';
import jamesBank from '../classes/Bank';

export default function removeTransactions(req: Request, res: Response) {
    const { userid, id } = req.params;
    const client = jamesBank.findClientById(userid);

    if (!client) {
        return res.status(404).send({ message: 'Not found!' });
    }

    const transaction = client.transactions.findIndex((trans) => trans.uid === id);

    if (transaction < 0) {
        return res.status(404).send({ message: 'his transaction does not exist!' });
    }

    client.transactions.splice(transaction, 1);
    return res.status(200).send({ message: ' your transaction was deleted successfully' });
}
