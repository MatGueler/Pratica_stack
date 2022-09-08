import * as answerRepository from "../repositories/answerRepository";
import { IAnswers } from "../types/answerTypes";

export async function createAnswer(infos: IAnswers, QuestionId: number) {
  //   const question = await answerRepository.getQuestion(QuestionId);
  const bodyAnswer = {
    answeredBy: infos.answeredBy,
    answer: infos.answer,
    questionId: QuestionId,
  };
  const newAnswer = await answerRepository.insertQuestion(bodyAnswer);
}
