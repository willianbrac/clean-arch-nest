import { Product } from 'src/core/domain/product.entity';
import { ProductRepositoryInterface } from 'src/core/domain/product.repository';

export class ProductInMemoryRepository implements ProductRepositoryInterface {
  items: Product[] = [];
  async insert(product: Product): Promise<void> {
    this.items.push(product);
  }

  async findAll(): Promise<Product[]> {
    return this.items;
  }
}
