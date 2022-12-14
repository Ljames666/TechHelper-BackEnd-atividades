import { Request, Response, NextFunction } from 'express';
import jamesBank from '../classes/Bank';

const checkCpfToEquals = (req: Request, res: Response, next: NextFunction) => {
    const { cpf } = req.body;
    const cpfExist = jamesBank.existCpf(cpf);
    if (cpfExist) {
        return res
            .status(403)
            .send({ error: 403, message: 'Cpf existente, não é possivel cadastrar novo cliente!' });
    }

    next();
};

export default checkCpfToEquals;
