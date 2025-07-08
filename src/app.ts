import Fastify from 'fastify'
import { AppDataSource } from './data-source'
import { usersRoutes } from './routes/users-routes'
import swagger from './plugins/swagger'
import { validatorCompiler, serializerCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'

export async function startApp(){
    const app = Fastify().withTypeProvider<ZodTypeProvider>()
    await AppDataSource.initialize().then(
        ()=>{
            console.log('Banco de dados inicializado')
        }
    ).catch((ex)=>{
        console.log('X Erro de conexão do banco de dados', ex)
        process.exit(1)
    })

    app.setValidatorCompiler(validatorCompiler)
    app.setSerializerCompiler(serializerCompiler)

    await app.register(swagger)
    app.register(usersRoutes)
    return app
}