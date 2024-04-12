import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("burgers")
export class Burger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' }) // Use jsonb type
  ingredients: any;
  //relacion con products, se debe pensar si es uno a muchos y debo desayunar kachau
}
