import { Request, Response } from 'express';
import jamesBank from '../classes/Bank';

export default function removeClient(req: Request, res: Response) {
    const { id } = req.params;
    const index = jamesBank.clients.findIndex((client) => client.uid === id);
    if (index < 0) {
        res.status(404).send({ message: 'Not Found' });
    }
    jamesBank.clients.splice(index, 1);
    return res.send({ message: 'cliente deletado com sucesso' });
}
