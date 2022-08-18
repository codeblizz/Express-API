import express, { Request, Response, NextFunction } from 'express';
import { Airline } from "../model/airline.model"

const Router = express.Router();

Router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const airline = await Airline.find({ createdBy: req.headers });
    res.send({
        message: "Airline API is working",
        data: airline.data
    })
    next();
})

Router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    res.send({
        message: `Airline API is working with ${id}`
    })
    next();
})

Router.post("/add", (req: Request, res: Response, next: NextFunction) => {
    const { name, origin, destination } = req.body;
    res.send({
        name: name,
        origin: origin,
        destination: destination,
    })
    next();
})

export default Router;