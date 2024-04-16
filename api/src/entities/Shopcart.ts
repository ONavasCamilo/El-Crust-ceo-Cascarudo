import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("shopcarts")
export class Shopcart {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column({ default: false })
  is_completed: boolean;
}