import { Request, Response, NextFunction } from 'express';

const checkRequest = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.ip);
    console.log(req.method);
    console.log(req.url);
    console.log(req.path);
    console.log(req.secure);

    next();
};

export default checkRequest;
