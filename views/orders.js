import { View, Model, Collection } from "../src/index.js";
import { ProductsList } from "./productsList.js";

class Product extends Model {}

export class Orders extends View {
  static template = "#orders";
  static regions = { products: "products" };

  onMount() {
    this.showProducts();
  }

  showProducts() {
    const products = new Collection([{ text: "Portavaso" }], Product);
    this.regions.products.show(new ProductsList({ collection: products }), {
      transition: true,
    });
  }
}
