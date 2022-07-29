import { Product } from './product.entity';

export interface ProductRepositoryInterface {
  insert(product: Product): Promise<void>;
  findAll(): Promise<Product[]>;
}
