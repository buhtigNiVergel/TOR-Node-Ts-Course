import express, { type Request, type Response } from "express"
import db from "../db.js";

async function getAuthorById(req:Request, res:Response) {
    const { authorId } = req.params;

    try{
        const author = await db.getAuthorById(Number(authorId));

        if(!author) {
            res.status(404).send("Author not found");
            return;
        }

        res.send(`Author Name: ${author.name}`);
    }catch(error){
        console.error("Error retrieving author:", error)
        res.status(500).send("Internal Server Error")
    }
}

export {getAuthorById}