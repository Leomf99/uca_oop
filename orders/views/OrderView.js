// paso 1 - vista principal: input + botón "add"
import { View } from '../../src/index.js';
import { OrderModel } from '../models/OrderModel.js';

export class OrderView extends View {
  static template = '#order-view';

  onCreate() {
    this.order = new OrderModel({ productTitle: '' }); // paso 2 - crear modelo de order con productTitle vacío
  }

  onMount() {
    this.listen(this.ui.add, 'click', this.add);
    this.listen(this.ui.input, 'keydown', this.onKey);
  }

  onKey = (e) => {
    if (e.key === 'Enter') this.add();
  };

  add = () => {
    this.order.set('productTitle', this.ui.input.value.trim());
    const errors = this.order.validate(); // paso 2 - valida mediante el modelo (validate viene de la clase Model)
    if (errors.productTitle) {
      this.ui.error.textContent = 'El título ' + errors.productTitle[0];
      return;
    }
    this.ui.error.textContent = '';
    this.props.onAdd(this.order.get('productTitle')); // paso 3 - avisa al AppLayout para agregar el producto a su coleccion
    this.order.set('productTitle', '');
    this.ui.input.value = '';
    this.ui.input.focus();
  };
}
