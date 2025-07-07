import { FastifyReply, FastifyRequest } from 'fastify'
import { UsersReposity } from '../repositories/users/UsersRepository'
import { ListUsersUsecase } from '../usecase/users/list-users-usecase.ts'

const repo = new UsersReposity()
export class ListUsersController{
    async handle(req:FastifyRequest, reply:FastifyReply){
        const usecase = new ListUsersUsecase(repo)
        const result = await usecase.execute()
        return reply.status(200).send(result)
    }
}