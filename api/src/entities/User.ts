import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { Role } from "./Role";
import { randomUUID } from "crypto";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = randomUUID();
  @Column({ unique: true, type: "varchar", length: 100 })
  username: string;
  @Column({ type: "varchar", length: 100 })
  password: string;
  @Column({ unique: true, type: "varchar", length: 255 })
  email: string;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}