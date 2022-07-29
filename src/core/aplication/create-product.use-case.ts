import { Product } from '../domain/product.entity';
import { ProductRepositoryInterface } from '../domain/product.repository';

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepositoryInterface) {}

  async execute(input: CreateProductInput): Promise<CreateProductOutput> {
    const product = Product.create(input);
    await this.productRepository.insert(product);
    return product.toJSON();
  }
}

type CreateProductInput = {
  title: string;
  price: number;
};

type CreateProductOutput = {
  id: string;
  title: string;
  price: number;
};
