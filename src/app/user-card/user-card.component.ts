import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() user: any;

  getRoleClass(role: string): string {
    switch (role) {
      case 'admin':
        return 'text-bg-danger';
      case 'moderator':
        return 'text-bg-warning';
      case 'user':
      default:
        return 'text-bg-success';
    }
  }

}
