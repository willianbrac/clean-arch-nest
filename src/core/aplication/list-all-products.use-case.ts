export class ListAllProductsUseCase {
  constructor(productRepository: ProductRepositoryInterface) {}

  async execute(): Promise<ListProductsOutput> {
    const products = await this.productRepository.findAll();
    return products.map((product) => product.toJSON());
  }
}

type ListProductsOutput = {
  id: string;
  title: string;
  price: number;
}[];
