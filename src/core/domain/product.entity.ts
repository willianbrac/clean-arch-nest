import crypto from 'crypto';

export type ProductProps = {
  title: string;
  price: number;
};

export class Product {
  public readonly id: string;
  public props: Required<ProductProps>;

  private constructor(props: ProductProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = { ...props };
  }

  static create(props: ProductProps, id?: string) {
    return new Product(props, id);
  }

  updateTitle(title: string) {
    this.props.title = title;
  }

  updatePrice(price: number) {
    this.props.price = price;
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  get price() {
    return this.props.price;
  }

  private set price(value: number) {
    this.props.price = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
