export class Model {
    constructor() {
        this.view;
    }
    setView(view) {
        this.view = view;
    }
    addTodo(title, description) {
        console.log(title, description);
    }
}
