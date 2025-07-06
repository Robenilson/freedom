import { FastifyInstance } from 'fastify'
import { CommentUseCase } from '../usecases/comment.usecase'
import {
  CreateCommentDto,
  UpdatedCommentDto,
} from '../interfaces/comment.interface'

export async function commentRoute(fastify: FastifyInstance) {
  const commentUseCase = new CommentUseCase()

  fastify.post<{ Body: CreateCommentDto }>('/', async (req, reply) => {
    const { description, imageComment, postBlogId, userId } = req.body
   

    try {
      const data = await commentUseCase.create({
        description,
        imageComment,
        postBlogId,
        userId,
      })

      console.log(data)
      return reply.send(data)
    } catch (err) {
      return reply.status(500).send({ message: 'Internal server error' })
    }
  })

  fastify.get('/', async (req, reply) => {
    try {
      const comment = await commentUseCase.getAll()
      return reply.send(comment)
    } catch (err) {
      return reply.status(500).send({ message: 'Internal server error' })
    }
  })

  fastify.put<{ Params: { id: string }; Body: UpdatedCommentDto }>(
    '/:id',
    async (req, reply) => {
      try {
        const { id } = req.params
        const data = req.body
        const UpdatedComment = await commentUseCase.update(id, data)
        return reply.send(UpdatedComment)
      } catch (err) {
        return reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )

  fastify.delete('/:id', async (req, reply) => {
    try {
      const { id } = req.params as { id: string }
      await commentUseCase.delete(id)
      reply.status(200).send({ message: 'Commente deleted' })
    } catch (err) {
      return reply.status(500).send({ message: 'Internal server error' })
    }
  })
}
