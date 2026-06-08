// paso 2 - Valida que el prodcutTitle no este vacio apra no crear productos sin titulo
import { Model, required } from '../../src/index.js';

export class OrderModel extends Model {
  static rules = { productTitle: [required('es obligatorio')] };
}
