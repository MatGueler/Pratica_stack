import { IQuestions } from "../types/questionTypes";
import * as questionRepository from "../repositories/questionRepository";

export async function createQuestion(infos: IQuestions) {
  const newQuestion = await questionRepository.insertQuestion(infos);
}
