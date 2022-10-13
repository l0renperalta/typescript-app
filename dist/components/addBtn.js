export class AddBtn {
    constructor() {
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.btn = document.getElementById('add');
    }
    onClick(fn) {
        this.btn.onclick = () => {
            if (!this.title.value || !this.description.value) {
                console.error('title and description are required');
                return;
            }
            fn({
                title: this.title.value,
                description: this.description.value,
            });
        };
    }
}
