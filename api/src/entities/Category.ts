import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Product } from "./Product";
import { randomUUID } from "crypto";

@Entity("categories")
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string = randomUUID();
  @Column({ unique: true })
  category: string;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
