import { Component } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: Todo[] = [
    { task: 'Buy groceries', completed: false, duration: 1, priority: 'normal' },
    { task: 'Laundry', completed: true, duration: 2, priority: 'low' },
    { task: 'Walk the dog', completed: false, duration: 0.5, priority: 'high' }
  ];

  // addTask(todo: { task: string, completed: boolean, duration: number, priority: 'low' | 'normal' | 'high' }) {
  //   const newTodo: Todo = {
  //     task: todo.task,
  //     completed: false,
  //     duration: todo.duration,
  //     priority: todo.priority
  //   };
  //   this.todos.push(newTodo);
  // }

  addTask(todo: Todo) {    
    this.todos.push(todo);
  }

  onComplete(index: number) {
    this.todos[index].completed = true;
  }

  onDelete(index: number) {
    this.todos.splice(index, 1);
  }
}
