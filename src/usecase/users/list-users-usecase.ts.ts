import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/users/IUsersRepositories'

export class ListUsersUsecase{
    constructor(private usersRepository:IUsersRepository){}
    async execute():Promise<Omit<User, 'password'>[]>{
        const users = await this.usersRepository.findAll()
        return users.map(({password, ...user})=>user)
    }
}