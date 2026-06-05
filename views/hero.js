import { View } from '../src/index.js';

export class Hero extends View {
  static template = '#hero';

  onMount() {
    const { model } = this.props;
    this.images = model.get('images');
    this.imageCount = 0;
    this.listen(this.ui.productButton, 'click', (e) => {
      e.preventDefault();
      this.changeImage();
    });
  }

  animateIn() {
    return slideIn(this.el);
  }
  animateOut() {
    return slideOut(this.el);
  }

  changeImage() {
    const imageContainer = this.ui.productImage;
    const images = this.images;
    const imagesLength = images.length;

    this.imageCount++;

    if (this.imageCount > imagesLength - 1) {
      this.imageCount = 0;
    }
    imageContainer.setAttribute('src', images[this.imageCount]);
  }
}
