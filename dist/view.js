import { AddBtn } from './components/addBtn.js';
export class View {
   constructor() {
      this.model;
      this.addBtn = new AddBtn();
      this.addBtn.onClick((title, description) => this.addTodo(title, description));
   }
   setModel(model) {
      this.model = model;
   }
   addTodo(title, description) {
      this.model.addTodo(title, description);
   }
}
