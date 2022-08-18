import { User } from "@/model/user.model";
import express, { Request, Response, NextFunction } from "express";
import { createUserHandler } from "@/controller/user.controller";

const Router = express.Router();

Router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.find({ createdBy: req.headers });
  res.send({
    message: "Airline API is working",
    data: user.data,
  });
  next();
});

Router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  res.send({
    message: `Airline API is working with ${id}`,
  });
  next();
});

Router.post("/add-user",
  async (req: Request, res: Response) => {
    await createUserHandler({ ...req.body });
    res.status(200).send({
      message: "New user added successfully",
      // createdUser: newUser
    });
  }
);

export default Router;
