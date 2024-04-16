import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { Role } from "./Role";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;
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