import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateUserUsecase } from '../usecase/users/UpdateUserUsecase'
import { UsersReposity } from '../repositories/users/UsersRepository'


type UpdateUserRequest = {
    Params: { id: string }
    Body: {
        name?: string
        email?: string
        phone?: string
        password?: string
    }
}

export class UpdateUserController {
    async handle(
        request: FastifyRequest<UpdateUserRequest>,
        reply: FastifyReply
    ){
        try {
            const usecase = new UpdateUserUsecase(new UsersReposity())
            const result = await usecase.execute(request.params.id, request.body)
            return reply.send(result)
        }catch (err: any) {
            return reply.status(400).send({ error:err.messagege })       
      }
   }
}