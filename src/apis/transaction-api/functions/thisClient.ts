import { Request, Response } from 'express';
import jamesBank from '../classes/Bank';

export default function thisClient(req: Request, res: Response) {
    const { id } = req.params;
    const client = jamesBank.findClientById(id);

    if (!client) {
        return res.status(404).send({ message: `O cliente de Id: ${id} não foi encontrado` });
    }
    return res
        .status(200)
        .send({
            id: client.uid,
            name: client.name,
            cpf: client.cpf,
            email: client.email,
            age: client.age,
        });
}
