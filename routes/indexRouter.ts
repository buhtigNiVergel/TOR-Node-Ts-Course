import express, { type Request, type Response, type NextFunction, Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req: Request, res: Response) => res.send('index page'));

export default indexRouter