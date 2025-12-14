import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    cantidadDisponible: number;

    @Column({ default: true })
    disponible: boolean;
}
