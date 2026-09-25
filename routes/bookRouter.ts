import express, { type Request, type Response, type NextFunction, Router } from 'express';

const bookRouter = Router();

bookRouter.get('/', (req: Request, res: Response) => {
    res.send("all books");
});

export default bookRouter