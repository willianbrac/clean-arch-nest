import { Product } from 'src/core/domain/product.entity';
import { ProductRepositoryInterface } from 'src/core/domain/product.repository';
import { Repository } from 'typeorm';

export class ProductTypeOrmRepository implements ProductRepositoryInterface {
  constructor(private productRepository: Repository<Product>) {}

  async insert(product: Product): Promise<void> {
    await this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }
}
