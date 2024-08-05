import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, TodoWrapperComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lab-2';
  toggle: boolean = true;
  changeComponent() {
    this.toggle = !this.toggle;
  }
}
