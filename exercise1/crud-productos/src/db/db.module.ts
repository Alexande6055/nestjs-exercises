import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Producto } from "src/productos/entities/producto.entity";


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: "db.sqlite",
            entities: ['dist/**/*.entity{.ts,.js}'],
            //entities: [Producto],
            synchronize: true,
            logging: true
        })
    ]
})

export default class DbModule { }