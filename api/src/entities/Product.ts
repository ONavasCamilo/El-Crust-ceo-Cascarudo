import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;
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
  //relacion hamburger
}
