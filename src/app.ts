import "dotenv/config";
import express, { type Express, type Request, type Response, type NextFunction} from 'express';
import CustomNotFoundError from "../errors/CustomNotFoundError.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

const app: Express = express();

import authorRouter from '../routes/authorRouter.js'
import bookRouter from '../routes/bookRouter.js'
import indexRouter from '../routes/indexRouter.js'

const assetsPath = path.join(__dirname,"..","public");
app.use(express.static(assetsPath));


// app.js
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req: Request, res: Response) => {
  res.render("about", { aboutContent: 'burat na malaki' });
});

app.use("/authors", authorRouter)
app.use("/books", bookRouter);
app.use("/", indexRouter)
// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err: CustomNotFoundError, req : Request, res : Response, next : NextFunction) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});


const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
