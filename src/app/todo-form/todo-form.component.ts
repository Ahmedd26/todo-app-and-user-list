import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() newTodo = new EventEmitter<string>();
  title: string = '';

  onSubmit(event: any) {
    event.preventDefault();
    if (this.title.trim()) {
      if (!this.title) return;
      this.newTodo.emit(this.title);
      this.title = '';
    }
  }
  handleInput(event: any) {
    this.title = event.target.value;
  }
}
