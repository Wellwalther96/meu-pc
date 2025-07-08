import { startApp } from './app'
import { env } from './config/env'
import fastify from 'fastify'
import swagger from './plugins/swagger'

async function startServer() {
    const app = await startApp()
    app.listen({port:env?.PORT},(err, addres)=>{
        if(err){
            console.error('Erro no servidor', err)
            process.exit(1)
        }
        console.log(`Servidor executando no IP ${addres}`)
    })
}

startServer()