import express, { type Request, type Response, type NextFunction, Router } from 'express';
import { getBookById } from '../controllers/bookControllers.js';

const bookRouter = Router();

bookRouter.get('/', (req: Request, res: Response) => {
    res.send("all books");
});

bookRouter.get('/:bookId', getBookById)

export default bookRouter