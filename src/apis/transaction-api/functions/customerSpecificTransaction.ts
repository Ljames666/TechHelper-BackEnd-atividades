import { Request, Response } from 'express';
import jamesBank from '../classes/Bank';

export default function customerSpecificTransaction(req: Request, res: Response) {
    const { userid, id } = req.params;
    const client = jamesBank.findClientById(userid);
    if (!client) {
        return res.status(404).send({ message: 'not found' });
    }

    const transaction = client.transactions.find((transaction) => transaction.uid === id);
    if (!transaction) {
        return res.status(404).send({ message: 'transaction not found' });
    }

    return res.status(200).send({ client: client.name, transaction });
}
