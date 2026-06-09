import { View } from "../../src/index.js";
export class AppLayout extends View {
  static template = "#app-layout";
  static regions = { page: "page" };

  onMount() {
    this.regions.order.show(new OrderView({ onAdd: this.addProduct }));
  }
}
