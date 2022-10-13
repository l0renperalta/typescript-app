export class Model {
   view: any;
   constructor() {
      this.view;
   }

   setView(view: object) {
      this.view = view;
   }

   addTodo(title: string, description: string) {
      console.log(title, description);
   }
}
