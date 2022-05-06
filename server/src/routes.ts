import express from 'express';

import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-case/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository);

  await submitFeedbackUseCase.execute({ type, comment, screenshot });
  return res.status(201).send();
});
