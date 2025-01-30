import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddTodoComponent]
})
export class AddTodoModule { }
