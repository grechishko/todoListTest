import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  newTodo: FormGroup = new FormGroup({
    label: new FormControl('', Validators.required)
  });

  constructor(private todoService: TodoService) {}
  ngOnInit() {}

  add(): void {
    this.todoService.addTodo(this.newTodo.controls.label.value);
    this.newTodo.setValue({label: ''});
    event.preventDefault();
  }
}
