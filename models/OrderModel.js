import { Model, required } from '../../src/index.js';

export class OrderModel extends Model {
  static rules = { productTitle: [required('es obligatorio')] };
}
