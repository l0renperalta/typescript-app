import { View } from './view';
import { Model } from './model';

document.addEventListener('DOMContentLoaded', () => {
   const model = new Model();
   const view = new View();

   model.setView(view);
   view.setModel(model);
   view.showTodos();
});
