import { Model, runRules, required } from '../../src/index.js';

const RULES = {
  title: [required('es obligatorio')],
};

export class ProductModel extends Model {
  static rules = RULES;

  rename(title) {
    const errors = runRules({ ...this.data, title }, RULES);
    if (!errors.title) this.set('title', title);
    return errors;
  }
}
