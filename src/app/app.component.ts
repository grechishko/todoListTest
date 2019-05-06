import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Todo[] = [];
  sortByStatus: boolean = false;

  constructor(private todoService: TodoService) {}

    ngOnInit() {
      this.todo = this.todoService.getTodo();
    }

  toggleCheck(item: Todo) {
    item.done = !item.done;
  }

  deleteItem(index: number) {
    this.todo.splice(index, 1);
  }

  onToggle() {
    this.sortByStatus = !this.sortByStatus;
    if (!this.sortByStatus) this.todo.sort((a, b) => (a.id - b.id));    
      else this.todo.sort((a, b) => (Number(a.done) - Number(b.done)));
  }

}


