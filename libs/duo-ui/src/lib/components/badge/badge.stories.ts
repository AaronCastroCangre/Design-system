import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A Duolingo-inspired badge component for displaying labels, statuses, and counts.

## Features
- **Six variants**: primary, secondary, success, warning, danger, gray
- **Three sizes**: sm, md, lg
- **Pill option** for rounded badges
- **3D effect** with characteristic bottom border
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'gray'],
      description: 'Badge color variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
    },
    pill: {
      control: 'boolean',
      description: 'Use pill (fully rounded) style',
    },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

// =============================================================================
// VARIANTS
// =============================================================================

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">New</duo-badge>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">Pro</duo-badge>`,
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">Complete</duo-badge>`,
  }),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">Beta</duo-badge>`,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">Hot</duo-badge>`,
  }),
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">Locked</duo-badge>`,
  }),
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">XP</duo-badge>`,
  }),
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">Level 5</duo-badge>`,
  }),
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size">Champion</duo-badge>`,
  }),
};

// =============================================================================
// PILL STYLE
// =============================================================================

export const Pill: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    pill: true,
  },
  render: (args) => ({
    props: args,
    template: `<duo-badge [variant]="variant" [size]="size" [pill]="pill">99+</duo-badge>`,
  }),
};

export const PillSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <duo-badge variant="danger" size="sm" [pill]="true">3</duo-badge>
        <duo-badge variant="danger" size="md" [pill]="true">15</duo-badge>
        <duo-badge variant="danger" size="lg" [pill]="true">99+</duo-badge>
      </div>
    `,
  }),
};

// =============================================================================
// ALL VARIANTS SHOWCASE
// =============================================================================

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <duo-badge variant="primary">Primary</duo-badge>
        <duo-badge variant="secondary">Secondary</duo-badge>
        <duo-badge variant="success">Success</duo-badge>
        <duo-badge variant="warning">Warning</duo-badge>
        <duo-badge variant="danger">Danger</duo-badge>
        <duo-badge variant="gray">Gray</duo-badge>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <duo-badge variant="primary" size="sm">Small</duo-badge>
        <duo-badge variant="primary" size="md">Medium</duo-badge>
        <duo-badge variant="primary" size="lg">Large</duo-badge>
      </div>
    `,
  }),
};

// =============================================================================
// REAL WORLD EXAMPLES
// =============================================================================

export const StreakBadge: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 8px; font-family: sans-serif;">
        <span style="font-size: 24px;">🔥</span>
        <duo-badge variant="warning" size="lg" [pill]="true">7</duo-badge>
        <span style="color: #777; font-size: 14px;">day streak</span>
      </div>
    `,
  }),
};

export const XPBadge: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 8px; font-family: sans-serif;">
        <duo-badge variant="success" size="md">+15 XP</duo-badge>
      </div>
    `,
  }),
};

export const LessonStatus: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; font-family: sans-serif;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 120px;">Basics 1</span>
          <duo-badge variant="success" size="sm">Complete</duo-badge>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 120px;">Basics 2</span>
          <duo-badge variant="secondary" size="sm">In Progress</duo-badge>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 120px;">Phrases</span>
          <duo-badge variant="gray" size="sm">Locked</duo-badge>
        </div>
      </div>
    `,
  }),
};

export const NotificationBadges: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <div style="position: relative; display: inline-block;">
          <div style="width: 48px; height: 48px; background: #E5E5E5; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
            📬
          </div>
          <div style="position: absolute; top: -6px; right: -6px;">
            <duo-badge variant="danger" size="sm" [pill]="true">5</duo-badge>
          </div>
        </div>
        <div style="position: relative; display: inline-block;">
          <div style="width: 48px; height: 48px; background: #E5E5E5; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
            🏆
          </div>
          <div style="position: absolute; top: -6px; right: -6px;">
            <duo-badge variant="warning" size="sm" [pill]="true">New</duo-badge>
          </div>
        </div>
      </div>
    `,
  }),
};

// =============================================================================
// PLAYGROUND
// =============================================================================

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    pill: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-badge
        [variant]="variant"
        [size]="size"
        [pill]="pill"
      >
        Badge Text
      </duo-badge>
    `,
  }),
};
