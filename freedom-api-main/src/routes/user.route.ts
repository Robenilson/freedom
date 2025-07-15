import { FastifyInstance } from 'fastify'
import { UserUseCase } from '../usecases/user.usecase'
import generateHash from '../usecases/auth.usecase'
import { CreateUserDto, updateUserDto } from '../interfaces/user.interface'

export async function userRoute(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase()
fastify.post<{ Body: CreateUserDto }>('/', async (req, reply) => {
  try {
    const { email, password, ...rest } = req.body;

    const data = await userUseCase.create({
      email,
      password: await generateHash(password),
      ...rest,
    });

  
     

    return reply.code(201).send(data); // Created
  } catch (error) {
    console.error(error);

    if (error.code === 'USER_EXISTS') {
      return reply.status(409).send({ message: 'Email ou CPF já cadastrado' });
    }

    return reply.status(400).send({
      message: 'Erro na requisição',
      error: error.message || String(error),
    });
  }
});



  //??
  fastify.get<{ Querystring: { id: string; email: string } }>(
    '/',
    async (req, reply) => {
      try {
        const { id, email } = req.query 
       

        if (id) {
          return await userUseCase.getById(id)
        } else if (email) {
          return await userUseCase.getByEmail(email)
        } else {
          const users = await userUseCase.getAll()
          return reply.send(users)
        }
      } catch (error) {
        req.log.error(error)
        reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )

  //ok Obs:
  fastify.put<{ Querystring: { id: string }; Body: updateUserDto }>(
    '/:id',
    
    async (req, reply) => {
      try {
       
        const { id } = req.params
        const data = req.body

        const verifyUser = await userUseCase.getById(id)
        if (!verifyUser) {
          return reply.status(404).send({ message: 'profile not found' })
        }

        const updatedUser = await userUseCase.update(id, data)

        if (!updatedUser) {
          return reply.status(404).send({ message: 'Error ' })
        }

        return reply.send(updatedUser)
      } catch (error) {
        reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )


  //OK
  fastify.delete<{ Querystring: { id: string } }>(
    '/:id',
    async (req, reply) => {
     
      try {
       
        const { id } = req.params
        await userUseCase.delete(id)

        reply.status(200).send({ message: 'Usuario deletado' })
      } catch (error) {
        reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )
}
