// paso 4 - Una coleccion de varios ProductModel, envuelve los datos que le envias en un
// ProductModel individual y emite 'add', que escucha el ProductCollectionView para crearle la vista
import { Collection } from '../../src/index.js';
import { ProductModel } from '../models/ProductModel.js';

export class ProductCollection extends Collection {
  constructor(items = []) {
    super(items, ProductModel);
  }
}
