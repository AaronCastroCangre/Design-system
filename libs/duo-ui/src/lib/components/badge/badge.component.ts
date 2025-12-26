import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gray';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'duo-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
  @Input() size: BadgeSize = 'md';
  @Input() pill = false;

  get badgeClasses(): string[] {
    return [
      'duo-badge',
      `duo-badge--${this.variant}`,
      `duo-badge--${this.size}`,
      this.pill ? 'duo-badge--pill' : '',
    ].filter(Boolean);
  }
}
