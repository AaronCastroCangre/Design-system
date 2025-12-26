import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ModalComponent } from './modal.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<ModalComponent> = {
  title: 'Components/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modal dialog component with Duolingo-inspired styling.

## Features
- **Smooth animations** for open/close transitions
- **Three sizes** (sm, md, lg)
- **Backdrop click** to close (configurable)
- **Escape key** to close (configurable)
- **Scroll lock** when open
- **Footer slot** for action buttons
        `,
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Modal size',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button in header',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Close when clicking backdrop',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close when pressing Escape',
    },
    lockScroll: {
      control: 'boolean',
      description: 'Lock body scroll when open',
    },
  },
};

export default meta;
type Story = StoryObj<ModalComponent>;

// =============================================================================
// BASIC - Use this in Canvas view for full experience
// =============================================================================

export const Default: Story = {
  render: () => ({
    props: {
      isOpen: false,
    },
    template: `
      <div style="padding: 400px;">
        <duo-button variant="primary" (clicked)="isOpen = true">Open Modal</duo-button>
        <duo-modal [(isOpen)]="isOpen" title="Modal Title" size="md" [lockScroll]="false">
          <p>This is the modal content. You can put any content here.</p>
          <div modal-footer style="display: flex; gap: 12px; justify-content: flex-end;">
            <duo-button variant="secondary" (clicked)="isOpen = false">Cancel</duo-button>
            <duo-button variant="primary" (clicked)="isOpen = false">Confirm</duo-button>
          </div>
        </duo-modal>
      </div>
    `,
  }),
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  render: () => ({
    props: {
      isOpen: false,
    },
    template: `
      <div style="padding: 400px;">
        <duo-button variant="primary" (clicked)="isOpen = true">Open Small Modal</duo-button>
        <duo-modal [(isOpen)]="isOpen" title="Small Modal" size="sm" [lockScroll]="false">
          <p>This is a small modal. Great for confirmations.</p>
          <div modal-footer style="display: flex; gap: 12px; justify-content: flex-end;">
            <duo-button variant="secondary" size="sm" (clicked)="isOpen = false">Cancel</duo-button>
            <duo-button variant="primary" size="sm" (clicked)="isOpen = false">OK</duo-button>
          </div>
        </duo-modal>
      </div>
    `,
  }),
};

export const Medium: Story = {
  render: () => ({
    props: {
      isOpen: false,
    },
    template: `
      <div style="padding: 400px;">
        <duo-button variant="primary" (clicked)="isOpen = true">Open Medium Modal</duo-button>
        <duo-modal [(isOpen)]="isOpen" title="Medium Modal" size="md" [lockScroll]="false">
          <p>This is the default medium-sized modal. Perfect for most use cases.</p>
          <div modal-footer style="display: flex; gap: 12px; justify-content: flex-end;">
            <duo-button variant="secondary" (clicked)="isOpen = false">Cancel</duo-button>
            <duo-button variant="primary" (clicked)="isOpen = false">Confirm</duo-button>
          </div>
        </duo-modal>
      </div>
    `,
  }),
};

export const Large: Story = {
  render: () => ({
    props: {
      isOpen: false,
    },
    template: `
      <div style="padding: 400px;">
        <duo-button variant="primary" (clicked)="isOpen = true">Open Large Modal</duo-button>
        <duo-modal [(isOpen)]="isOpen" title="Large Modal" size="lg" [lockScroll]="false">
          <p>This is a large modal. Use it for complex content, tables, or when you need more space.</p>
          <p style="margin-top: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div modal-footer style="display: flex; gap: 12px; justify-content: flex-end;">
            <duo-button variant="secondary" (clicked)="isOpen = false">Cancel</duo-button>
            <duo-button variant="primary" (clicked)="isOpen = false">Save</duo-button>
          </div>
        </duo-modal>
      </div>
    `,
  }),
};

// =============================================================================
// REAL WORLD EXAMPLES
// =============================================================================

export const DeleteConfirmation: Story = {
  render: () => ({
    props: {
      isOpen: false,
    },
    template: `
      <div style="padding: 400px;">
        <duo-button variant="danger" (clicked)="isOpen = true">Delete Progress</duo-button>
        <duo-modal [(isOpen)]="isOpen" title="Delete Progress?" size="sm" [lockScroll]="false">
          <p>Are you sure you want to delete your learning progress? You'll lose all your streaks and achievements.</p>
          <div modal-footer style="display: flex; gap: 12px; justify-content: flex-end;">
            <duo-button variant="secondary" (clicked)="isOpen = false">Keep Learning</duo-button>
            <duo-button variant="danger" (clicked)="isOpen = false">Delete</duo-button>
          </div>
        </duo-modal>
      </div>
    `,
  }),
};

export const StreakCelebration: Story = {
  render: () => ({
    props: {
      isOpen: false,
    },
    template: `
      <div style="padding: 400px;">
        <duo-button variant="warning" (clicked)="isOpen = true">Show Streak</duo-button>
        <duo-modal [(isOpen)]="isOpen" size="sm" [showCloseButton]="false" [lockScroll]="false">
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 64px; margin-bottom: 16px;">🔥</div>
            <h2 style="margin: 0 0 8px; font-family: sans-serif; color: #FF9600; font-size: 28px;">7 Day Streak!</h2>
            <p style="margin: 0; color: #777;">You're on fire! Keep up the great work.</p>
          </div>
          <div modal-footer style="display: flex; justify-content: center;">
            <duo-button variant="primary" size="lg" (clicked)="isOpen = false">Continue</duo-button>
          </div>
        </duo-modal>
      </div>
    `,
  }),
};

export const LessonComplete: Story = {
  render: () => ({
    props: {
      isOpen: false,
    },
    template: `
      <div style="padding: 400px;">
        <duo-button variant="success" (clicked)="isOpen = true">Complete Lesson</duo-button>
        <duo-modal [(isOpen)]="isOpen" size="md" [showCloseButton]="false" [lockScroll]="false">
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 72px; margin-bottom: 16px;">🎉</div>
            <h2 style="margin: 0 0 8px; font-family: sans-serif; color: #58CC02; font-size: 28px;">Lesson Complete!</h2>
            <p style="margin: 0 0 24px; color: #777;">You earned 15 XP</p>
            <div style="display: flex; justify-content: center; gap: 24px; margin-bottom: 16px;">
              <div style="text-align: center;">
                <div style="font-size: 24px; font-weight: bold; color: #58CC02;">92%</div>
                <div style="font-size: 12px; color: #AFAFAF; text-transform: uppercase;">Accuracy</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: 24px; font-weight: bold; color: #1CB0F6;">2:34</div>
                <div style="font-size: 12px; color: #AFAFAF; text-transform: uppercase;">Time</div>
              </div>
            </div>
          </div>
          <div modal-footer style="display: flex; flex-direction: column; gap: 12px;">
            <duo-button variant="primary" size="lg" [fullWidth]="true" (clicked)="isOpen = false">Continue</duo-button>
            <duo-button variant="secondary" size="md" [fullWidth]="true" (clicked)="isOpen = false">Review Mistakes</duo-button>
          </div>
        </duo-modal>
      </div>
    `,
  }),
};

// =============================================================================
// PLAYGROUND
// =============================================================================

export const Playground: Story = {
  args: {
    isOpen: false,
    title: 'Modal Title',
    size: 'md',
    showCloseButton: true,
    closeOnBackdrop: true,
    closeOnEscape: true,
    lockScroll: false,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <div style="padding: 400px;">
        <duo-button variant="primary" (clicked)="isOpen = true">Open Modal</duo-button>
        <duo-modal
          [(isOpen)]="isOpen"
          [title]="title"
          [size]="size"
          [showCloseButton]="showCloseButton"
          [closeOnBackdrop]="closeOnBackdrop"
          [closeOnEscape]="closeOnEscape"
          [lockScroll]="lockScroll"
        >
          <p>This is the modal content. Customize the modal using the controls panel.</p>
          <div modal-footer style="display: flex; gap: 12px; justify-content: flex-end;">
            <duo-button variant="secondary" (clicked)="isOpen = false">Cancel</duo-button>
            <duo-button variant="primary" (clicked)="isOpen = false">Confirm</duo-button>
          </div>
        </duo-modal>
      </div>
    `,
  }),
};
