// paso 3 - Aqui vive la coleccion y el order view, el onAdd de OrderView manda y agrega
// a la colección de productos, monta OrderView y la lista
import { View } from '../../src/index.js';
import { OrderView } from './OrderView.js';
import { ProductCollectionView } from './ProductCollectionView.js';
import { ProductCollection } from '../collections/ProductCollection.js';

export class AppLayout extends View {
  static template = '#app-layout';
  static regions = { order: 'orderSlot', list: 'listSlot' };

  onCreate() {
    this.products = new ProductCollection([ // paso 4 - Aqui se agregan al inicio algunos productos ya existentes a la coleccion
      { id: 1, title: 'Manzana' },
      { id: 2, title: 'Pan' },
    ]);
    this.nextId = 3;
  }

  onMount() {
    this.regions.order.show(new OrderView({ onAdd: this.addProduct }));
    this.regions.list.show(new ProductCollectionView({ collection: this.products }));
    for (const event of ['add', 'remove', 'reset'])
      this.products.on(event, this.updateCount, { signal: this.signal });
    this.listen(this.ui.clear, 'click', this.clearAll);
    this.updateCount();
  }

  addProduct = (productTitle) => {
    this.products.add({ id: this.nextId++, title: productTitle }); // Aqui se agrega el producto
  };

  clearAll = () => this.products.reset([]); //Boton para borrar todos los productos

  updateCount = () => {
    this.ui.count.textContent = String(this.products.length);
  };
}
