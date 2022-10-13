export class AddBtn {
   title: any;
   description: any;
   btn: any;

   constructor() {
      this.title = document.getElementById('title');
      this.description = document.getElementById('description');
      this.btn = document.getElementById('add');
   }

   onClick(fn: (title: string, description: string) => void) {
      this.btn.onclick = () => {
         if (!this.title.value || !this.description.value) {
            console.error('title and description are required');
            return;
         }

         fn(this.title.value, this.description.value);
      };
   }
}
