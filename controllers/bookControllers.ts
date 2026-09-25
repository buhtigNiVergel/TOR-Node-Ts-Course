import express, { type Request, type Response, type NextFunction, Router } from "express"
import db from "../db.js"

async function getBookById(req : Request, res : Response) {
    const { bookId } = req.params

    try{
        const book = await db.getBookById(Number(bookId))

        if(!book){
            res.status(404).send("Book not found");
            return;
        }

        res.send(`Book title: ${book.title}`)
    }catch(error){
        console.error("Error retrieving book:", error)
        res.status(500).send("Internal Server Error")
    }
}

export {getBookById}