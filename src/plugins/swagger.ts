import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'

export default fp(async (app: FastifyInstance) => {
  await app.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'App Well',
        description: 'Documentação das rotas da API (usuários, postagens, comentários)',
        version: '1.0.0'
      },
      tags: [
        { name: 'Usuários', description: 'Rotas relacionadas aos usuários da plataforma' },
        { name: 'Postagens', description: 'Rotas para criação e listagem de postagens (futuro)' },
        { name: 'Comentários', description: 'Rotas para comentários em postagens (futuro)' }
      ]
    }
  })

  await app.register(fastifySwaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    }
  })

  app.ready().then(() => {
    app.swagger()
  })
})
