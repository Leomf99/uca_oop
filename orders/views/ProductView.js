// paso 7 - Vista de un producto para ver y editar titulo
// se actualiza con el change:title del paso 5 en el modelo
import { View } from '../../src/index.js';

export class ProductView extends View {
  static template = '#product-view';

  onMount() {
    const model = this.props.model;
    this.ui.title.textContent = model.get('title');
    model.on('change:title', this.onTitleChange, { signal: this.signal }); // Reacciona a cuando cambia el titulo
    this.listen(this.ui.edit, 'click', this.startEdit);
    this.listen(this.ui.save, 'click', this.save);
    this.listen(this.ui.cancel, 'click', this.cancelEdit);
    this.listen(this.ui.remove, 'click', this.remove);
  }

  onTitleChange = (payload) => {
    this.ui.title.textContent = payload.value;
  };

  startEdit = () => {
    this.ui.input.value = this.props.model.get('title');
    this.ui.error.textContent = '';
    this.el.classList.add('editing');
    this.ui.input.focus();
  };

  cancelEdit = () => {
    this.ui.error.textContent = '';
    this.el.classList.remove('editing');
  };

  save = () => {
    const errors = this.props.model.rename(this.ui.input.value.trim()); // Valida mediante el modelo con el mismo paso 5
    if (errors.title) {
      this.ui.error.textContent = 'El título ' + errors.title[0];
      return;
    }
    this.el.classList.remove('editing');
  };

  remove = () => this.props.onRemove(this.props.model);
}
