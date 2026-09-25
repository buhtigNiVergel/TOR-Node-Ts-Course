import express, { type Request, type Response, type NextFunction, Router } from 'express';
const authorRouter = express.Router();

authorRouter.get('/', (req: Request, res: Response) => res.send('author page'));
authorRouter.get("/:authorId", (req:Request, res:Response) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

export default authorRouter