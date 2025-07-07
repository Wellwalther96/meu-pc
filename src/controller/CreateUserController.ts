import { FastifyReply, FastifyRequest } from 'fastify'
import { UsersReposity } from '../repositories/users/UsersRepository'
import { CreateUserUsecase } from '../usecase/users/CreateUserUsecase'

const userRepository = new UsersReposity()
export class CreateUserController{
    async handle(req:FastifyRequest, reply:FastifyReply){
        try{
            const usecase = new CreateUserUsecase(userRepository)
            const result = await usecase.execute(req.body as any)
            return reply.status(200).send(result)
        }catch(error: any){
            return reply.status(400).send({error: error.message})
        }
    }
}