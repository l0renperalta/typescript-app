import { AddBtn } from './components/addBtn';

export class View {
   addBtn: any;
   model: any;
   table: any;

   constructor() {
      this.model;
      this.table = document.getElementById('table');
      this.addBtn = new AddBtn();
      this.addBtn.onClick((values: object) => this.addTodo(values));
   }

   setModel(model: object) {
      this.model = model;
   }

   showTodos() {
      const todos = this.model.getTodos();
      todos.forEach((todo: object) => {
         this.addTodo(todo);
      });
   }

   addTodo(values: object) {
      const todo = this.model.addTodo(values);
      const row = this.table.insertRow();
      row.setAttribute('id', todo.id);
      row.innerHTML = `
        <tr>
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class="text-center">

            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
                
            </td>
        </tr>
        `;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.onclick = () => {
         this.toggleTodo(todo.id);
      };
      row.children[2].appendChild(checkbox);

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
      deleteBtn.innerHTML = `<i class="fa fa-trash"></i>`;
      deleteBtn.onclick = () => this.deleteTodo(todo.id);
      row.children[3].appendChild(deleteBtn);
   }

   toggleTodo(id: number) {
      this.model.toggleTodo(id);
   }

   deleteTodo(id: number) {
      document.getElementById(String(id))?.remove();
   }
}
