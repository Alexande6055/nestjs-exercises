import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>
  ) { }

  async create(createProductoDto: CreateProductoDto) {
    return await this.productoRepository.save(createProductoDto);
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(id: number) {
    return await this.productoRepository.findOneBy({ id });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return await this.productoRepository.update({ id }, updateProductoDto);
  }

  async remove(id: number) {
    return await this.productoRepository.softDelete({ id })
  }
}
