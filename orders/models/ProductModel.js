// paso 5 - Datos de un producto, su id, su title, sus restricciones y su lógica rename con validación.
import { Model, runRules, required, minLength } from '../../src/index.js';

const RULES = {
  title: [required('es obligatorio'), minLength(2, 'debe tener al menos 2 caracteres')],
};

export class ProductModel extends Model {
  static rules = RULES;

  rename(title) {
    const errors = runRules({ ...this.data, title }, RULES);
    if (!errors.title) this.set('title', title); // emite el evento change:title, que escucha la ProductView para cambiar el titulo
    return errors;
  }
}
