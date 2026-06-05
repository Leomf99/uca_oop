import { View } from '../src/index.js';
import { NavBar } from '../views/navbar.js';
import { Hero } from '../views/hero.js';
import { Orders } from '../views/orders.js';
import { heroModel } from '../models/heroModel.js';

export class AppLayout extends View {
  static template = '#app-layout';
  static regions = { navbar: 'navbar', main: 'main' };

  onMount() {
    this.regions.navbar.show(new NavBar({ onGo: this.go }));
    this.go('home');
  }
  go = (name) => {
    this.regions.main.show(name === 'orders' ? new Orders() : new Hero({ model: heroModel }), { transition: true });
  };
}
