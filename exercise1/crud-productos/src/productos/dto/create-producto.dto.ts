import { IsNumber, IsString } from "class-validator";

export class CreateProductoDto {
    @IsString()
    nombre: string;

    @IsNumber()
    cantidadDisponible: number;

}

