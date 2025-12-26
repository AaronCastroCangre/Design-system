import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  HostBinding,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

export type InputVariant = 'default' | 'primary' | 'secondary';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';

@Component({
  selector: 'duo-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: InputType = 'text';
  @Input() placeholder = '';
  @Input() variant: InputVariant = 'default';
  @Input() size: InputSize = 'md';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() fullWidth = false;
  @Input() label?: string;
  @Input() hint?: string;
  @Input() errorMessage?: string;
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() maxLength?: number;
  @Input() minLength?: number;

  @Output() valueChange = new EventEmitter<string>();
  @Output() inputFocus = new EventEmitter<FocusEvent>();
  @Output() inputBlur = new EventEmitter<FocusEvent>();

  @HostBinding('class.duo-input-wrapper') wrapperClass = true;
  @HostBinding('class.full-width') get isFullWidth() {
    return this.fullWidth;
  }

  value = '';
  isFocused = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  get inputClasses(): string[] {
    return [
      'duo-input__field',
      `duo-input__field--${this.variant}`,
      `duo-input__field--${this.size}`,
      this.fullWidth ? 'duo-input__field--full-width' : '',
      this.disabled ? 'duo-input__field--disabled' : '',
      this.isFocused ? 'duo-input__field--focused' : '',
      this.errorMessage ? 'duo-input__field--error' : '',
      this.iconLeft ? 'duo-input__field--has-icon-left' : '',
      this.iconRight ? 'duo-input__field--has-icon-right' : '',
    ].filter(Boolean);
  }

  get containerClasses(): string[] {
    return [
      'duo-input__container',
      `duo-input__container--${this.size}`,
    ].filter(Boolean);
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onFocus(event: FocusEvent): void {
    this.isFocused = true;
    this.onTouched();
    this.inputFocus.emit(event);
  }

  onBlur(event: FocusEvent): void {
    this.isFocused = false;
    this.inputBlur.emit(event);
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
