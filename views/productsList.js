import { CollectionView } from "../src/index.js";
import { ProductItem } from "../views/productItem.js";

export class ProductsList extends CollectionView {
  static template = "#product-list";
  static childView = ProductItem;
  static container = "items";

  onMount() {
    super.onMount();
    this.listen(this.ui.form, "submit", this.onSubmit);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const text = this.ui.input.value.trim();
    if (text) this.collection.add({ text });
    this.ui.input.value = "";
    this.ui.input.focus();
  };

  childProps(model) {
    return {
      onRemove: () => this.collection.remove(model),
    };
  }
}
