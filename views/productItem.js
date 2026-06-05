import { View, slideIn, slideOut } from '../src/index.js';
import { ColorPicker } from './colorPicker.js';

export class ProductItem extends View {
  static template = '#product';

  onMount() {
    const { model } = this.props;
    this.ui.text.textContent = model.get('text');
    this.listen(this.ui.remove, 'click', this.remove);
  }

  remove = () => this.props.onRemove();
  animateIn() {
    return slideIn(this.el);
  }
  animateOut() {
    return slideOut(this.el);
  }
}
