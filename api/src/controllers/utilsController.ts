import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import UserRepository from "../repositories/userRepository";

export class UtilsController {

  healthCheck = async (req: Request, res: Response): Promise<void> => {
      res.status(200).json({message:"Está executando"});
  };
}