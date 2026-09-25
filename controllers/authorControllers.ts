import express, { type Request, type Response } from "express"
import db from "../db.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

const getAuthorById = async (req:Request, res:Response) => {
    const { authorId } = req.params;

    try{
        const author = await db.getAuthorById(Number(authorId));

        if(!author) {
            throw new CustomNotFoundError('Author not found')
        }

        res.send(`Author Name: ${author.name}`);
    }catch(error){
        console.error("Error retrieving author:", error)
        res.status(500).send("Internal Server Error")
    }
}

export {getAuthorById}