import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ type: "float" })
  price: number;
  @Column({ type: "varchar", length: 300 })
  description: string;
  @Column({ type: "int" })
  stock: number;
  @Column({ type: "varchar", length: 300 })
  category: string;
  //relacion hamburger
}
