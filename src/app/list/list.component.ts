import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Subscription } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public todoList: ITodo[] = [];

  constructor(private todosService: TodosService) {}

  public ngOnInit() {
    this.subs.push(this.todosService.getTodosList()
      .subscribe(
        (todoList: ITodo[]) => {
          todoList = todoList || [];
          this.todoList = todoList;
          console.log(this.todoList);
        }
      ));
  }

  public ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  public selectedItem(itemId: number) {
    this.subs.push(this.todosService.getTodo(itemId)
      .subscribe(
        (item: ITodo) => console.log(item)
      ));
  }

}
