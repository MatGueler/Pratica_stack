import prisma from "../config/database";
import { IAnswers, ICreateAnswer } from "../types/answerTypes";

export async function insertQuestion(infos: ICreateAnswer) {
  await prisma.answers.create({ data: infos });
}

export async function getQuestion(QuestionId: number) {
  const question = await prisma.questions.findFirst({
    where: { id: QuestionId },
  });
  return question;
}
