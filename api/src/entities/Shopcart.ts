import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity("shopcarts")
export class Shopcart {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  product: Product[];

  @Column({ default: false })
  is_completed: boolean;
}