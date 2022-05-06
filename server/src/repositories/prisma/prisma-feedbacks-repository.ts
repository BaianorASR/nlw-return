import { prisma } from '../../prisma';
import { FeedbackCreatData, FeedbackRepository } from '../feedback-repository';

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreatData) {
    await prisma.feedback.create({
      data: { type, comment, screenshot },
    });
  }
}
