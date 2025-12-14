import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import DbModule from './db/db.module';

@Module({
  imports: [ProductosModule,DbModule],
})
export class AppModule {}
