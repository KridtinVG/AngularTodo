import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent {
  newTodoText = '';

  @Output() newTodoEvent = new EventEmitter<string>();

  addTodo() {
    if (this.newTodoText.trim()) {
      this.newTodoEvent.emit(this.newTodoText);
      this.newTodoText = '';
    }
  }
}
