import { Request, Response } from "express";
import { IAnswers } from "../types/answerTypes";
import { IQuestions } from "../types/questionTypes";
import * as questionService from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  const infos: IQuestions = req.body;
  const createQuestion = questionService.createQuestion(infos);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const infos: IAnswers = req.body;
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
