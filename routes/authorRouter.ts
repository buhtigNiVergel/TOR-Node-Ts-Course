import express, { type Request, type Response, type NextFunction, Router } from 'express';
import { getAuthorById } from '../controllers/authorControllers.js';
const authorRouter = express.Router();

authorRouter.get('/', (req: Request, res: Response) => res.send('author page'));
authorRouter.get('/:authorId', getAuthorById);

export default authorRouter