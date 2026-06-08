// paso 6 - Escucha la coleccion y agrega/quita solo la vista del modelo que cambió (no re-renderiza todo)
import { CollectionView } from '../../src/index.js';
import { ProductView } from './ProductView.js';

export class ProductCollectionView extends CollectionView {
  static template = '#product-list';
  static childView = ProductView; // cada modelo que enviemos crea una Productview
  static container = 'list';

  childProps() {
    return { onRemove: (model) => this.collection.remove(model) }; // Cuadno clickeamos borrar, se elimina el modelo y vista de la coleccion
  }
}
