import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity("shopcarts")
export class Shopcart {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Product)
  product: Product;

  @Column({ default: false })
  is_completed: boolean;
}