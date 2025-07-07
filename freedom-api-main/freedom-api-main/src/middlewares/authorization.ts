import { FastifyRequest, FastifyReply } from 'fastify'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default async function authMiddleware(
  req: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const jwtSecret = process.env.JWT_SECRET

  if (!jwtSecret) {
    reply.status(500).send('JWT_SECRET não está definido nas variáveis de ambiente')
    return
  }

  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      reply.status(401).send('Acesso não autorizado')
      return
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
      reply.status(401).send('Token não fornecido')
      return
    }

    const decoded = jwt.verify(token, jwtSecret) as JwtPayload

    req.email = decoded.email
  } catch (err) {
    reply.status(401).send('Token inválido ou expirado')
  }
}
