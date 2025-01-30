import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemModule } from './todo-item/todo-item.module';
import { FormsModule } from '@angular/forms';
import { AddTodoModule } from "./add-todo/add-todo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoItemModule,
    FormsModule,
    AddTodoModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
