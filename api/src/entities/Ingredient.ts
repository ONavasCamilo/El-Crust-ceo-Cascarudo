import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { randomUUID } from "crypto";

@Entity("ingredients")
export class Ingredient {
  @PrimaryGeneratedColumn("uuid")
  id: string = randomUUID();
  @Column({ type: "integer", nullable: true })
  meat: number;
  @Column({ type: "integer", nullable: true })
  lettuce: number;
  @Column({ type: "integer", nullable: true })
  tomato: number;
  @Column({ type: "integer", nullable: true })
  cheese: number;
  @Column({ type: "integer", nullable: true })
  onion: number;
  @OneToMany(() => Product, (product) => product.ingredients)
  product: Product;
}
