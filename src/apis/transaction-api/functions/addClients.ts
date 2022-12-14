import { Request, Response } from 'express';
import IClients from '../interfaces/IClients';
import Client from '../classes/Client';
import jamesBank from '../classes/Bank';

export default function addClients(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body;

    if (!name || !cpf || !email || !age) {
        return res.status(418).send({ message: 'Inform name ,cpf,email and age!' });
    }

    const client: IClients = new Client(name, cpf, email, age);

    jamesBank.addClientToArray(client);

    return res
        .status(200)
        .send({ message: 'Success!', client, jamesBankClients: jamesBank.clients });
}
