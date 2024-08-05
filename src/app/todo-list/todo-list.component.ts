import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todos: any[] = [];
  @Output() sendTodoId = new EventEmitter<number>();
  sendTodoIdFn(id: number) {
    this.sendTodoId.emit(id);
  }
}
