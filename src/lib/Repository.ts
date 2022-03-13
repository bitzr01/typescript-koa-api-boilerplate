import { PrismaClient } from '@prisma/client';

export default class Repository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
}
