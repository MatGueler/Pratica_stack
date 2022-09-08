import { Request, Response } from "express";
import { IAnswers } from "../types/answerTypes";
import { IQuestions } from "../types/questionTypes";
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const infos: IQuestions = req.body;
  const createQuestion = questionService.createQuestion(infos);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const infos: IAnswers = req.body;
  const QuestionId = req.params.id;
  const createAnswer = answerService.createAnswer(infos, Number(QuestionId));
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const getQuestions = await questionService.AllQuestionsExist();
  res.status(200).send(getQuestions);
}

export async function getById(req: Request, res: Response) {
  const questionId = req.params.id;
  const getQuestion = await questionService.questionById(Number(questionId));
  res.status(200).send(getQuestion);
}
