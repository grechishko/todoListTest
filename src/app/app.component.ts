import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    todo: Todo[];
  isactive: boolean = false;

  constructor(private todoService: TodoService) {}

    ngOnInit() {
        this.todo = this.todoService.getTodo();
    }

  toggleCheck(item:Todo) {
    item.done = !item.done;
    console.log("check toggle");
  }

  deleteItem(index:number) {
    this.todo.splice(index, 1);
    console.log("item deleted");
  }

  onToggle() {
    this.isactive = !this.isactive;
    console.log(this.isactive);
  }

}


