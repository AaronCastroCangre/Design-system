import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export type ModalSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'duo-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnChanges, OnDestroy {
  @Input() isOpen = false;
  @Input() title?: string;
  @Input() size: ModalSize = 'md';
  @Input() showCloseButton = true;
  @Input() closeOnBackdrop = true;
  @Input() closeOnEscape = true;
  @Input() lockScroll = true;

  @Output() closed = new EventEmitter<void>();
  @Output() isOpenChange = new EventEmitter<boolean>();

  private scrollLocked = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isOpen && this.closeOnEscape) {
      this.close();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (this.isOpen && this.lockScroll) {
        this.disableBodyScroll();
      } else {
        this.enableBodyScroll();
      }
    }
  }

  ngOnDestroy(): void {
    this.enableBodyScroll();
  }

  close(): void {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    this.enableBodyScroll();
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.close();
    }
  }

  private disableBodyScroll(): void {
    if (isPlatformBrowser(this.platformId) && !this.scrollLocked) {
      document.body.style.overflow = 'hidden';
      this.scrollLocked = true;
    }
  }

  private enableBodyScroll(): void {
    if (isPlatformBrowser(this.platformId) && this.scrollLocked) {
      document.body.style.overflow = '';
      this.scrollLocked = false;
    }
  }

  get modalClasses(): string[] {
    return [
      'duo-modal__content',
      `duo-modal__content--${this.size}`,
      this.isOpen ? 'duo-modal__content--open' : '',
    ].filter(Boolean);
  }

  get backdropClasses(): string[] {
    return [
      'duo-modal__backdrop',
      this.isOpen ? 'duo-modal__backdrop--open' : '',
    ].filter(Boolean);
  }
}
