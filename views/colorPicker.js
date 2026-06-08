import { View, defineElement } from '../src/index.js';

export class ColorPicker extends View {
  static template = '#color-picker';

  onCreate() {
    this.n = Number(0);
  }
  onMount() {
    this.colors = ['#A84631', '#31A841', '#7A31A8', '#319AA8', '#A8319A'];

    this.listen(this.ui.right, 'click', () => {
      this.n++;
      this.changeColor();
    });
    this.listen(this.ui.left, 'click', () => {
      this.n--;
      this.changeColor();
    });

    this.changeColor();
  }

  changeColor() {
    if (this.n > this.colors.length - 1) this.n = this.colors.length - 1;
    if (this.n < 0) this.n = 0;
    this.ui.color.style.backgroundColor = this.colors[this.n];
  }
}
