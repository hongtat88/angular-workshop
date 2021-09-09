import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/Operators';
import { TodoItem, TodoService } from './services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions = new Subject();
  searchFormControl = new FormControl('');
  todoList: TodoItem[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.next(null);
    this.subscriptions.complete();
  }

  ngOnInit(): void {
  }

  search(): void {
    let searchValue = this.searchFormControl.value;
    this.todoService.getToDoList(searchValue).pipe(
      takeUntil(this.subscriptions)
    ).subscribe(todoList => this.todoList = todoList);
  }

  completeFirstItem(): void {
    // this.todoList[0] = {
    //   ...this.todoList[0],
    //   title: 'this is an complete item'
    // };
    
    // this.todoList[0].title = "this is an complete item";
  }

}
