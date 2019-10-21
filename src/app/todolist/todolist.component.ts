import { Component, OnInit } from '@angular/core';
import { Todo } from './todo'
import { TODOS } from './mock-todos'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todos = TODOS;
  newTodoId = 5;
  newTodoName = ''
  doneTodos = this.todos.filter(function(todo) {
    return todo.completed == true
  })

  constructor() { }

  ngOnInit() {
  }

  addTodo():void {
    if (!this.newTodoName) {
      return
    }
    this.todos.push({
      id: this.newTodoId, 
      name: this.newTodoName, 
      completed: false});
    this.newTodoId++;
    this.newTodoName = ''
  }
  
  deleteTodo(todo):void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }

  remainingTodos(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

}
