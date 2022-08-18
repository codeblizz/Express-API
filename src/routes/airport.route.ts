import express, { Request, Response, NextFunction } from 'express'

const Router = express.Router();

Router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send({
        message: "Airport API is working"
    })
    next();
})

export default Router;