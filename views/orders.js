import { View, Model, Collection } from '../src/index.js';
import { ProductCollection } from './collectionViews/ProductCollection.js';

export class Orders extends View {
  static template = '#orders';
  static regions = { orderInput: 'orderInputSlot', list: 'listSlot' };

  onCreate() {
    this.products = new ProductCollection([
      { id: 1, title: 'Portavaso' },
      { id: 2, title: 'Estatuilla' },
    ]);
    this.nextId = 3;
  }

  onMount() {}

  animateIn() {
    return slideIn(this.el);
  }
  animateOut() {
    return slideOut(this.el);
  }
}
