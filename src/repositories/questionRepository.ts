import prisma from "../config/database";
import { IQuestions } from "../types/questionTypes";

export async function insertQuestion(infos: IQuestions) {
  await prisma.questions.create({ data: infos });
}
