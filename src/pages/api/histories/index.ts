import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { historyValidationSchema } from 'validationSchema/histories';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getHistories();
    case 'POST':
      return createHistory();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getHistories() {
    const data = await prisma.history
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'history'));
    return res.status(200).json(data);
  }

  async function createHistory() {
    await historyValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.history.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
