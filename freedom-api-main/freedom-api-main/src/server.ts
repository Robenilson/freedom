import fastify, { FastifyInstance } from 'fastify'
import dotenv from 'dotenv'
import cors from '@fastify/cors'

// Rotas
import { userRoute } from './routes/user.route'
import { postBlogRoute } from './routes/postBlog.route'
import { complaintRoute } from './routes/complaint.route'
import { locationRoute } from './routes/location.route'
import { commentRoute } from './routes/comment.route'
import { auth } from './routes/auth.route'
import { profileRouter } from './routes/profile.route'

// Middleware
import authMiddleware from './middlewares/authorization'

dotenv.config()

const server: FastifyInstance = fastify({ logger: true })

await server.register(cors, {
  origin: ['http://localhost:8081'],
  credentials: true,
})

// Middleware global para proteger rotas
server.addHook('onRequest', async (req, reply) => {
  const url = req.raw.url
  const method = req.method

  const isPublicRoute =
    (url.startsWith('/auth') && method === 'POST') ||
    (url.startsWith('/users') && method === 'POST') ||
    (url.startsWith('/profile') && method === 'POST')

  if (isPublicRoute) return

  await authMiddleware(req, reply)
})

// Registro das rotas
server.register(userRoute, { prefix: '/users' })
server.register(auth, { prefix: '/auth' })
server.register(profileRouter, { prefix: '/profile' })
server.register(postBlogRoute, { prefix: '/post-blog' })
server.register(complaintRoute, { prefix: '/complaint' })
server.register(locationRoute, { prefix: '/location' })
server.register(commentRoute, { prefix: '/comment' })

server.listen({ port: 3000, host: '0.0.0.0' }, () => {
  console.log('Server is running on port 3000')
})
