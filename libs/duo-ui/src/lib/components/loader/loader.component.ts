import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type LoaderVariant = 'spinner' | 'dots' | 'pulse';
export type LoaderSize = 'sm' | 'md' | 'lg';
export type LoaderColor = 'primary' | 'secondary' | 'white' | 'gray';

@Component({
  selector: 'duo-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input() variant: LoaderVariant = 'spinner';
  @Input() size: LoaderSize = 'md';
  @Input() color: LoaderColor = 'primary';
  @Input() label?: string;

  get loaderClasses(): string[] {
    return [
      'duo-loader',
      `duo-loader--${this.variant}`,
      `duo-loader--${this.size}`,
      `duo-loader--${this.color}`,
    ];
  }
}
