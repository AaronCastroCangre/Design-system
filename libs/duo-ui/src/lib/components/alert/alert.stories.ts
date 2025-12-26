import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Components/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A Duolingo-inspired alert component for displaying contextual messages.

## Features
- **Four variants**: info, success, warning, danger
- **Optional title** for emphasized messages
- **Dismissible** option to allow users to close the alert
- **Icon support** with variant-specific icons
- **3D effect** with characteristic bottom border
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
      description: 'Alert variant/color',
    },
    title: {
      control: 'text',
      description: 'Optional title for the alert',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the variant icon',
    },
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

// =============================================================================
// VARIANTS
// =============================================================================

export const Info: Story = {
  args: {
    variant: 'info',
    showIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert [variant]="variant" [showIcon]="showIcon">
        This is an informational message. Check out our new features!
      </duo-alert>
    `,
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
    showIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert [variant]="variant" [showIcon]="showIcon">
        Great job! You've completed your daily lesson streak!
      </duo-alert>
    `,
  }),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    showIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert [variant]="variant" [showIcon]="showIcon">
        Your streak is at risk! Complete a lesson today to keep it going.
      </duo-alert>
    `,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    showIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert [variant]="variant" [showIcon]="showIcon">
        Oops! Something went wrong. Please try again.
      </duo-alert>
    `,
  }),
};

// =============================================================================
// WITH TITLE
// =============================================================================

export const WithTitle: Story = {
  args: {
    variant: 'success',
    title: 'Lesson Complete!',
    showIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert [variant]="variant" [title]="title" [showIcon]="showIcon">
        You earned 15 XP and maintained your 7-day streak. Keep up the great work!
      </duo-alert>
    `,
  }),
};

// =============================================================================
// DISMISSIBLE
// =============================================================================

export const Dismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
    showIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert [variant]="variant" [dismissible]="dismissible" [showIcon]="showIcon">
        This alert can be dismissed by clicking the X button.
      </duo-alert>
    `,
  }),
};

export const DismissibleWithTitle: Story = {
  args: {
    variant: 'warning',
    title: 'Streak Freeze Active',
    dismissible: true,
    showIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert [variant]="variant" [title]="title" [dismissible]="dismissible" [showIcon]="showIcon">
        Your streak is protected for today. Don't forget to practice tomorrow!
      </duo-alert>
    `,
  }),
};

// =============================================================================
// WITHOUT ICON
// =============================================================================

export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    showIcon: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert [variant]="variant" [showIcon]="showIcon">
        This alert is displayed without an icon.
      </duo-alert>
    `,
  }),
};

// =============================================================================
// ALL VARIANTS SHOWCASE
// =============================================================================

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <duo-alert variant="info" title="New Feature">
          Check out our new practice mode for better learning!
        </duo-alert>
        <duo-alert variant="success" title="Achievement Unlocked!">
          You've earned the "Week Warrior" badge!
        </duo-alert>
        <duo-alert variant="warning" title="Almost There!">
          Complete 2 more lessons to reach your daily goal.
        </duo-alert>
        <duo-alert variant="danger" title="Connection Lost">
          Please check your internet connection and try again.
        </duo-alert>
      </div>
    `,
  }),
};

// =============================================================================
// PLAYGROUND
// =============================================================================

export const Playground: Story = {
  args: {
    variant: 'info',
    title: 'Alert Title',
    dismissible: false,
    showIcon: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-alert
        [variant]="variant"
        [title]="title"
        [dismissible]="dismissible"
        [showIcon]="showIcon"
      >
        This is the alert message content. Customize it using the controls panel.
      </duo-alert>
    `,
  }),
};
