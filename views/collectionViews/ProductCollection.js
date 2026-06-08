import { Collection } from '../../src/index.js';
import { ProductModel } from '../../models/ProductModel.js';

export class ProductCollection extends Collection {
  constructor(items = []) {
    super(items, ProductModel);
  }
}
