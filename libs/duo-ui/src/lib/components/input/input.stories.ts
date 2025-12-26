import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;

const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;

const lockIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`;

const userIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A text input component with Duolingo-inspired 3D styling.

## Features
- **3D border effect** matching the button style
- **Multiple variants** (default, primary, secondary)
- **Three sizes** (sm, md, lg)
- **Icon support** (left and right positions)
- **Form integration** via ControlValueAccessor
- **Validation states** (error messages, hints)
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
      description: 'The input type',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
      description: 'The visual style variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes full width',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text above the input',
    },
    hint: {
      control: 'text',
      description: 'Hint text below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

// =============================================================================
// BASIC VARIANTS
// =============================================================================

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <duo-input
        [type]="type"
        [placeholder]="placeholder"
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [fullWidth]="fullWidth"
        [label]="label"
        [hint]="hint"
        [errorMessage]="errorMessage"
      ></duo-input>
    `,
  }),
  args: {
    type: 'text',
    placeholder: 'Enter your name',
    variant: 'default',
    size: 'md',
    disabled: false,
    fullWidth: false,
    label: '',
    hint: '',
    errorMessage: '',
  },
};

export const Primary: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Enter your name"
        variant="primary"
      ></duo-input>
    `,
  }),
};

export const Secondary: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Enter your name"
        variant="secondary"
      ></duo-input>
    `,
  }),
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Small input"
        size="sm"
      ></duo-input>
    `,
  }),
};

export const Medium: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Medium input"
        size="md"
      ></duo-input>
    `,
  }),
};

export const Large: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Large input"
        size="lg"
      ></duo-input>
    `,
  }),
};

// =============================================================================
// WITH LABEL
// =============================================================================

export const WithLabel: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Enter your username"
        label="Username"
      ></duo-input>
    `,
  }),
};

export const WithLabelAndHint: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Enter your email"
        label="Email"
        hint="We'll never share your email with anyone"
      ></duo-input>
    `,
  }),
};

// =============================================================================
// STATES
// =============================================================================

export const Disabled: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Disabled input"
        [disabled]="true"
        label="Disabled"
      ></duo-input>
    `,
  }),
};

export const WithError: Story = {
  render: () => ({
    template: `
      <duo-input
        placeholder="Enter your email"
        label="Email"
        errorMessage="Please enter a valid email address"
      ></duo-input>
    `,
  }),
};

export const FullWidth: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px;">
        <duo-input
          placeholder="Full width input"
          label="Full Width"
          [fullWidth]="true"
        ></duo-input>
      </div>
    `,
  }),
};

// =============================================================================
// WITH ICONS
// =============================================================================

export const WithLeftIcon: Story = {
  render: () => ({
    props: {
      searchIcon,
    },
    template: `
      <duo-input
        placeholder="Search..."
        [iconLeft]="searchIcon"
      ></duo-input>
    `,
  }),
};

export const WithRightIcon: Story = {
  render: () => ({
    props: {
      searchIcon,
    },
    template: `
      <duo-input
        placeholder="Search..."
        [iconRight]="searchIcon"
      ></duo-input>
    `,
  }),
};

export const EmailInput: Story = {
  render: () => ({
    props: {
      emailIcon,
    },
    template: `
      <duo-input
        type="email"
        placeholder="email@example.com"
        label="Email"
        [iconLeft]="emailIcon"
      ></duo-input>
    `,
  }),
};

export const PasswordInput: Story = {
  render: () => ({
    props: {
      lockIcon,
    },
    template: `
      <duo-input
        type="password"
        placeholder="Enter password"
        label="Password"
        [iconLeft]="lockIcon"
      ></duo-input>
    `,
  }),
};

// =============================================================================
// ALL VARIANTS SHOWCASE
// =============================================================================

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: flex-start;">
        <duo-input placeholder="Default" variant="default"></duo-input>
        <duo-input placeholder="Primary" variant="primary"></duo-input>
        <duo-input placeholder="Secondary" variant="secondary"></duo-input>
        <duo-input placeholder="Disabled" [disabled]="true"></duo-input>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: flex-start;">
        <duo-input placeholder="Small" size="sm"></duo-input>
        <duo-input placeholder="Medium" size="md"></duo-input>
        <duo-input placeholder="Large" size="lg"></duo-input>
      </div>
    `,
  }),
};

// =============================================================================
// REAL WORLD EXAMPLES
// =============================================================================

export const LoginForm: Story = {
  render: () => ({
    props: {
      emailIcon,
      lockIcon,
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 350px; padding: 24px; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <h3 style="margin: 0; font-family: sans-serif; color: #4b4b4b; text-align: center;">Log In</h3>
        <duo-input
          type="email"
          placeholder="Email"
          [iconLeft]="emailIcon"
          [fullWidth]="true"
        ></duo-input>
        <duo-input
          type="password"
          placeholder="Password"
          [iconLeft]="lockIcon"
          [fullWidth]="true"
        ></duo-input>
      </div>
    `,
  }),
};

export const SearchBar: Story = {
  render: () => ({
    props: {
      searchIcon,
    },
    template: `
      <div style="max-width: 500px;">
        <duo-input
          type="search"
          placeholder="Search for a course..."
          [iconLeft]="searchIcon"
          [fullWidth]="true"
          size="lg"
          variant="primary"
        ></duo-input>
      </div>
    `,
  }),
};

export const ProfileForm: Story = {
  render: () => ({
    props: {
      userIcon,
      emailIcon,
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; max-width: 400px; padding: 24px; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <h3 style="margin: 0; font-family: sans-serif; color: #4b4b4b;">Edit Profile</h3>
        <duo-input
          placeholder="Enter your name"
          label="Display Name"
          [iconLeft]="userIcon"
          [fullWidth]="true"
        ></duo-input>
        <duo-input
          type="email"
          placeholder="email@example.com"
          label="Email"
          [iconLeft]="emailIcon"
          [fullWidth]="true"
          hint="Your email is private"
        ></duo-input>
        <duo-input
          placeholder="Tell us about yourself"
          label="Bio"
          [fullWidth]="true"
        ></duo-input>
      </div>
    `,
  }),
};

// =============================================================================
// INTERACTIVE PLAYGROUND
// =============================================================================

export const Playground: Story = {
  render: (args) => ({
    props: {
      ...args,
      searchIcon,
    },
    template: `
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <p style="margin-bottom: 16px; color: #666; font-size: 14px;">
          Customize the input using the controls below!
        </p>
        <duo-input
          [type]="type"
          [placeholder]="placeholder"
          [variant]="variant"
          [size]="size"
          [disabled]="disabled"
          [fullWidth]="fullWidth"
          [label]="label"
          [hint]="hint"
          [errorMessage]="errorMessage"
        ></duo-input>
      </div>
    `,
  }),
  args: {
    type: 'text',
    placeholder: 'Type something...',
    variant: 'default',
    size: 'md',
    disabled: false,
    fullWidth: false,
    label: 'Label',
    hint: 'This is a hint',
    errorMessage: '',
  },
};
