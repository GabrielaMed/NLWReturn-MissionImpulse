// esse aqui implementa as operações no banco de dados

import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
  async create({type, comment, screenshot}: FeedbackCreateData){
    await prisma.feedback.create({
      data:{
        type,
        comment,
        screenshot,
      }
    })
  }
}