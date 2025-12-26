import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'duo-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements ControlValueAccessor {
  @Input() name = `radio-${Math.random().toString(36).substr(2, 9)}`;
  @Input() options: RadioOption[] = [];
  @Input() size: RadioSize = 'md';
  @Input() disabled = false;
  @Input() orientation: 'horizontal' | 'vertical' = 'vertical';

  value: string | number | null = null;

  private onChange: (value: string | number | null) => void = () => { /* noop */ };
  private onTouched: () => void = () => { /* noop */ };

  writeValue(value: string | number | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectOption(option: RadioOption): void {
    if (this.disabled || option.disabled) return;

    this.value = option.value;
    this.onChange(this.value);
    this.onTouched();
  }

  isSelected(option: RadioOption): boolean {
    return this.value === option.value;
  }

  isOptionDisabled(option: RadioOption): boolean {
    return this.disabled || !!option.disabled;
  }

  get groupClasses(): string[] {
    return [
      'duo-radio-group',
      `duo-radio-group--${this.orientation}`,
    ];
  }

  getOptionClasses(option: RadioOption): string[] {
    return [
      'duo-radio',
      `duo-radio--${this.size}`,
      this.isSelected(option) ? 'duo-radio--selected' : '',
      this.isOptionDisabled(option) ? 'duo-radio--disabled' : '',
    ].filter(Boolean);
  }
}
