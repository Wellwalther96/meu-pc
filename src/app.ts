import Fastify from 'fastify'
import { AppDataSource } from './data-source'
import { usersRoutes } from './routes/users-routes'

export async function startApp(){
    const app = Fastify()
    await AppDataSource.initialize().then(
        ()=>{
            console.log('Banco de dados inicializado')
        }
    ).catch((ex)=>{
        console.log('X Erro de conexão do banco de dados', ex)
        process.exit(1)
    })

    //Registre as rotas e plugins aqui
    app.register(usersRoutes)
    return app
}