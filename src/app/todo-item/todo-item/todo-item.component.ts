import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo.interface';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() complete = new EventEmitter<({ task: string, duration: number, priority: 'low' | 'normal' | 'high' })>;
  task: string = '';
  duration: number = 0;
  priority: 'low' | 'normal' | 'high' = 'low';

  @Output() delete = new EventEmitter<void>();

  addTask() {
    if (this.task && this.duration) {
      this.complete.emit({ task: this.task, duration: this.duration, priority: this.priority });
      this.task = '';
      this.duration = 0;
      this.priority = 'low';
    }
  }
  onComplete() {
    this.complete.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
