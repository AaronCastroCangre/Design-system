import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'duo-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel?: string;

  @Output() clicked = new EventEmitter<MouseEvent>();

  @HostBinding('class.duo-button-wrapper') wrapperClass = true;
  @HostBinding('class.full-width') get isFullWidth() {
    return this.fullWidth;
  }

  get buttonClasses(): string[] {
    return [
      'duo-button',
      `duo-button--${this.variant}`,
      `duo-button--${this.size}`,
      this.fullWidth ? 'duo-button--full-width' : '',
      this.disabled ? 'duo-button--disabled' : '',
    ].filter(Boolean);
  }

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
