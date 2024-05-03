import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity("ingredients")
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  ingredients: string;
  @ManyToMany(() => Product, (product) => product.ingredient)
  @JoinColumn()
  product: Product;
}
