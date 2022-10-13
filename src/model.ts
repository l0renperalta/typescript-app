interface todosInterface {
   id: number;
   title: string;
   description: string;
   completed: boolean;
}

export class Model {
   view: any;
   id: number;
   todos: any[];

   constructor() {
      this.view;
      this.todos = [{ id: 1, title: 'a', description: 'a', completed: true }];
      this.id = 1;
      //   this.todos = JSON.parse(localStorage.getItem('todos'));
      //   if (this.todos.length < 1 || !this.todos) {
      //      this.todos = [];
      //      this.id = 1;
      //   }
      //   this.id = this.todos[this.todos.length - 1].id + 1;
   }

   setView(view: object) {
      this.view = view;
   }

   saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
   }

   getTodos() {
      return this.todos.map((todo) => ({ ...todo }));
   }

   addTodo(values: any) {
      const todo = {
         id: this.id++,
         title: values.title,
         description: values.description,
         completed: true,
      };
      this.todos.push(todo);
      return { ...todo };
   }

   toggleTodo(id: number) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      const todo = this.todos[index];
      todo.completed = !todo.completed;
   }
}
