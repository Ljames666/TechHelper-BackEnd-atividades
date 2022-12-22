import { Request, Response } from 'express';
import jamesBank from '../classes/Bank';

export default function editSpecificTransaction(req: Request, res: Response) {
    const { userid, id } = req.params;
    const client = jamesBank.findClientById(userid);
    const { title, value, type } = req.body;

    if (!title || !value || !type) {
        return res.status(418).send({
            message:
                'Correctly enter the title, value and type, a wrong retry will be reported to the FBI.',
        });
    }

    if (!client) {
        return res.status(404).send({ message: 'Not found!' });
    }

    const transaction = client.transactions.find((trans) => trans.uid === id);

    if (!transaction) {
        return res.status(404).send({ message: 'his transaction does not exist!' });
    }

    transaction.title = title;
    transaction.value = value;
    transaction.type = type;

    return res.status(200).send({
        message: 'success',
        client: client.name,
        transaction,
    });
}
