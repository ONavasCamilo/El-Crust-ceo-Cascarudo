import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('burgers')
export class Hamburger {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ unique: true })
    name: string
    
}