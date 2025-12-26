import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SwitchSize = 'sm' | 'md' | 'lg';
export type SwitchColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'duo-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() size: SwitchSize = 'md';
  @Input() color: SwitchColor = 'primary';
  @Input() disabled = false;
  @Input() label?: string;
  @Input() labelPosition: 'left' | 'right' = 'right';

  checked = false;

  private onChange: (value: boolean) => void = () => { /* noop */ };
  private onTouched: () => void = () => { /* noop */ };

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggle(): void {
    if (this.disabled) return;

    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
  }

  get switchClasses(): string[] {
    return [
      'duo-switch',
      `duo-switch--${this.size}`,
      `duo-switch--${this.color}`,
      this.checked ? 'duo-switch--checked' : '',
      this.disabled ? 'duo-switch--disabled' : '',
      `duo-switch--label-${this.labelPosition}`,
    ].filter(Boolean);
  }
}
