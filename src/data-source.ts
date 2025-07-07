import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { env } from './config/env'
import { User } from './entities/User'
import { Comment } from './entities/Comments'
import { Post } from './entities/Post'

/* Quando criar a entidade descomente a 4 */
// import {User} from './entities/User'

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: env.DATABASE_FILE,
    synchronize: false,
    logging: false,
    entities: [User, Comment, Post],
    migrations:['src/typeorm/migrations/*.ts'] //C:\www\src\typeorm\migrations
})