import { FastifyInstance } from 'fastify'
import { CreateUserController } from '../controller/CreateUserController'
import { ListUsersController } from '../controller/ListUsersController'
import { FindUserByIdController } from '../controller/FindUserByIdController'
import { DeleteUserController } from '../controller/DeleteUserController'
import { UpdateUserController } from '../controller/UpdateUserController'

const createUserController = new CreateUserController ()
const listUsersController = new ListUsersController ()
const findUserByIdController = new FindUserByIdController ()
const deleteUserController = new DeleteUserController ()
const updateUserController = new UpdateUserController ()

export async function usersRoutes(app:FastifyInstance){
    app.post('/users', createUserController.handle)
    app.get('/users', listUsersController.handle)
    app.get('/users/:id', findUserByIdController.handle)
    app.put('/users/update/:id', updateUserController.handle)
    app.delete('/users/delete/:id', deleteUserController.handle)
    
}