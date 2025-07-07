import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { CreateUserInput, createUserSchema } from '../../schemas/user-schema'
import { hash } from 'bcryptjs'
import {v4 as uuidv4} from 'uuid'
import { User } from '../../entities/User'

export class CreateUserUsecase{
    constructor(private userRepository:IUsersRepository){}
    async execute(input:CreateUserInput){
        const data = createUserSchema.parse(input)
        const existingEmail = await this.userRepository.findByEmail(data.email)
        if(existingEmail){
            throw new Error('E-mail já cadastrado')
        }
        const existingPhone = await this.userRepository.findByPhone(data.phone)
        if(existingPhone){
            throw new Error('Telefone já cadastrado')
        }
    }
}

