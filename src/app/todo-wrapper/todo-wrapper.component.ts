import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css',
})
export class TodoWrapperComponent {
  id: number = 0;
  todos: any[] = [
    {
      id: 1,
      title: 'Start a new project',
      status: true,
    },
    {
      id: 2,
      title: 'Study for exam',
      status: false,
    },
  ];

  private currentId = this.todos[this.todos.length - 1]?.id || 0;

  addTodo(title: string) {
    const newTodo: any = {
      id: ++this.currentId,
      title: title,
      status: false,
    };
    this.todos.push(newTodo);
  }
  sendTodoIdFn(id: number) {
    this.id = id;
    console.log(`${id} from grand parent`);
    this.todos = this.todos.filter((todo: any) => todo.id !== id);
  }
}
