import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      description: 'The visual style variant of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width of its container',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    iconLeft: {
      control: 'text',
      description: 'HTML/SVG icon to display on the left side',
    },
    iconRight: {
      control: 'text',
      description: 'HTML/SVG icon to display on the right side',
    },
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Button</duo-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// =============================================================================
// BASIC VARIANTS
// =============================================================================

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Continue</duo-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Learn More</duo-button>`,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Delete</duo-button>`,
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Complete</duo-button>`,
  }),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Warning</duo-button>`,
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
    template: `<duo-button ${argsToTemplate(args)}>Small</duo-button>`,
  }),
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Medium</duo-button>`,
  }),
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Large</duo-button>`,
  }),
};

// =============================================================================
// STATES
// =============================================================================

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Disabled</duo-button>`,
  }),
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 400px;">
        <duo-button ${argsToTemplate(args)}>Full Width Button</duo-button>
      </div>
    `,
  }),
};

// =============================================================================
// WITH ICONS
// =============================================================================

const heartIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`;

const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;

export const WithLeftIcon: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    iconLeft: heartIcon,
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Like</duo-button>`,
  }),
};

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    iconRight: arrowIcon,
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Next</duo-button>`,
  }),
};

export const WithBothIcons: Story = {
  args: {
    variant: 'success',
    size: 'md',
    iconLeft: checkIcon,
    iconRight: arrowIcon,
  },
  render: (args) => ({
    props: args,
    template: `<duo-button ${argsToTemplate(args)}>Complete & Continue</duo-button>`,
  }),
};

// =============================================================================
// ALL VARIANTS SHOWCASE
// =============================================================================

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <duo-button variant="primary">Primary</duo-button>
        <duo-button variant="secondary">Secondary</duo-button>
        <duo-button variant="danger">Danger</duo-button>
        <duo-button variant="success">Success</duo-button>
        <duo-button variant="warning">Warning</duo-button>
        <duo-button [disabled]="true">Disabled</duo-button>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <duo-button size="sm">Small</duo-button>
        <duo-button size="md">Medium</duo-button>
        <duo-button size="lg">Large</duo-button>
      </div>
    `,
  }),
};

// =============================================================================
// INTERACTIVE PLAYGROUND
// =============================================================================

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    iconLeft: '',
    iconRight: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <p style="margin-bottom: 16px; color: #666; font-size: 14px;">
          Click the button to see the Duolingo-style 3D press effect!
        </p>
        <duo-button ${argsToTemplate(args)}>Try Me!</duo-button>
      </div>
    `,
  }),
};
