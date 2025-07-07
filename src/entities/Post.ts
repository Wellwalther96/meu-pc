import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany,PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'
import {Comment} from './Comments'

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column({ type: 'text'})
    content!: string

    @ManyToOne(()=> User, user => user.post)
    author!: User

    @OneToMany(() => Comment, comment => comment.post)
    comments!: Comment[]

    @CreateDateColumn()
    created_at!: Date
}