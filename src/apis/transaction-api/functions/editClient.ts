import { Request, Response } from 'express';
import jamesBank from '../classes/Bank';

export default function editClient(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body;
    const { id } = req.params;

    if (!name || !cpf || !email || !age) {
        return res.status(418).send({ message: 'cê é loko tá sem dados' });
    }
    const client = jamesBank.modifiedClientBy(id, name, cpf, email, Number(age));
    return res.status(client.status).send({ message: client.message, data: client.JSON });
}
