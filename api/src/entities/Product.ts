import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { Ingredient } from "./Ingredient";
import { randomUUID } from "crypto";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string = randomUUID();
  @Column({ unique: true })
  name: string;
  @Column({ type: "float" })
  price: number;
  @Column({ type: "varchar", length: 300, nullable: true })
  description: string;
  @Column({ type: "int" })
  stock: number;
  @ManyToOne(() => Category, (category) => category.product)
  category: Category;
  @ManyToOne(() => Ingredient, (ingredient) => ingredient.product)
  ingredients: Ingredient;
}
