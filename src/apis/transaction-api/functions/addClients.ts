import { Request, Response } from 'express';

export default function addClients(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body;

    if (!name || !cpf || !email || !age) {
        return res.status(418).send({ message: 'Inform name ,cpf,email and age!' });
    }
}
