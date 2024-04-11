import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("burgers")
export class Hamburger {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  ingredients: JSON;
  //relacion con products, se debe pensar si es uno a muchos y debo desayunar kachau
}
