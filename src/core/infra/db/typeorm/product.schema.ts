import { Product } from 'src/core/domain/product.entity';
import { EntitySchema } from 'typeorm';

export const ProductSchema = new EntitySchema<Product>({
  name: 'product',
  target: Product,
  columns: {
    id: { type: 'uuid', primary: true },
    title: { type: String },
    price: { type: Number },
  },
});
