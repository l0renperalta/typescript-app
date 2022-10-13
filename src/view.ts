import { AddBtn } from './components/addBtn';

export class View {
   addBtn: any;
   model: any;

   constructor() {
      this.model;
      this.addBtn = new AddBtn();
      this.addBtn.onClick((title: string, description: string) => this.addTodo(title, description));
   }

   setModel(model: object) {
      this.model = model;
   }

   addTodo(title: string, description: string) {
      this.model.addTodo(title, description);
   }
}
