import express, { Express, Request, Response } from 'express';
import { CreateProductUseCase } from 'src/core/aplication/create-product.use-case';
import { ListAllProductsUseCase } from 'src/core/aplication/list-all-products.use-case';
import { ProductInMemoryRepository } from '../../db/in-memory/product-in-memory.repository';

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const productRepository = new ProductInMemoryRepository();

app.get('/products', async (_req: Request, res: Response) => {
  const listAllProductsUseCase = new ListAllProductsUseCase(productRepository);
  const output = await listAllProductsUseCase.execute();
  res.json(output);
});

app.post('/routes', async (req: Request, res: Response) => {
  const createProductUseCase = new CreateProductUseCase(productRepository);
  const output = await createProductUseCase.execute(req.body);
  res.status(201).json(output);
});

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`);
});
