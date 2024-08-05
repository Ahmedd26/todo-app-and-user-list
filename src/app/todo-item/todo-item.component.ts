import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: any = {};
  @Output() sendTodoId = new EventEmitter<number>();

  changeStatus() {
    this.todo.status = !this.todo.status;
  }

  deleteItem(id: number) {
    this.sendTodoId.emit(id);
  }
}
