import { Response } from 'express';
import jamesBank from '../classes/Bank';

export default function readClientList(res: Response) {
    const list = jamesBank.clients.map((client) => {
        return {
            id: client.uid,
            name: client.name,
            cpf: client.cpf,
            email: client.email,
            age: client.age,
        };
    });
    res.status(200).json(list);
}
