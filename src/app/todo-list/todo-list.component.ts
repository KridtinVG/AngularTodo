import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: TodoItem[] = [];
  @Output() toggleCompletedEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  onToggle(id: number) {
    this.toggleCompletedEvent.emit(id);
  }

  onDelete(id: number) {
    this.deleteEvent.emit(id);
  }
}
