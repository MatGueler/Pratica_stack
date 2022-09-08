import { Answers } from "@prisma/client";

export interface IAnswers {
  id: number;
  answeredBy: string;
  answer: string;
  questionId: number;
}

export type ICreateAnswer = Omit<Answers, "id">;
