import { View } from "../src/index.js";

export class NavBar extends View {
  static template = "#navbar";

  onMount() {
    this.listen(this.ui.home, "click", this.goHome);
    this.listen(this.ui.orders, "click", this.goOrders);
  }
  goHome = () => this.props.onGo("home");
  goOrders = () => this.props.onGo("orders");
}
