import { Component } from '@angular/core';

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularTodo';
  currentID = 3;

  todoList: TodoItem[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a Todo App', completed: false },
  ];
  addTask(newTitle: string) {
    const newItem: TodoItem = {
      id: this.currentID++,
      title: newTitle,
      completed: false,
    };
    this.todoList.push(newItem);
  }
  deleteTask(id: number) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
  toggleCompleted(id: number) {
    this.todoList = this.todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
  }
}
