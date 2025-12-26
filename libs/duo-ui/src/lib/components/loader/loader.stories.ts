import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LoaderComponent } from './loader.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<LoaderComponent> = {
  title: 'Components/Loader',
  component: LoaderComponent,
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
A Duolingo-inspired loader component for indicating loading states.

## Features
- **Three variants**: spinner, dots, pulse
- **Three sizes**: sm, md, lg
- **Four colors**: primary, secondary, white, gray
- **Optional label** for context
- **Smooth animations** with playful feel
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse'],
      description: 'Loader animation style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Loader size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white', 'gray'],
      description: 'Loader color',
    },
    label: {
      control: 'text',
      description: 'Optional loading text',
    },
  },
};

export default meta;
type Story = StoryObj<LoaderComponent>;

// =============================================================================
// VARIANTS
// =============================================================================

export const Spinner: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'primary',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
    size: 'md',
    color: 'primary',
  },
};

export const Pulse: Story = {
  args: {
    variant: 'pulse',
    size: 'md',
    color: 'primary',
  },
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  args: {
    variant: 'spinner',
    size: 'sm',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    variant: 'spinner',
    size: 'lg',
    color: 'primary',
  },
};

// =============================================================================
// COLORS
// =============================================================================

export const Primary: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'secondary',
  },
};

export const Gray: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'gray',
  },
};

export const White: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'white',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="background: #58CC02; padding: 40px; border-radius: 16px;">
        <duo-loader [variant]="variant" [size]="size" [color]="color"></duo-loader>
      </div>
    `,
  }),
};

// =============================================================================
// WITH LABEL
// =============================================================================

export const WithLabel: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'primary',
    label: 'Loading...',
  },
};

export const DotsWithLabel: Story = {
  args: {
    variant: 'dots',
    size: 'md',
    color: 'secondary',
    label: 'Please wait',
  },
};

// =============================================================================
// ALL VARIANTS SHOWCASE
// =============================================================================

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 48px; align-items: center;">
        <div style="text-align: center;">
          <duo-loader variant="spinner" size="md" color="primary"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Spinner</div>
        </div>
        <div style="text-align: center;">
          <duo-loader variant="dots" size="md" color="primary"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Dots</div>
        </div>
        <div style="text-align: center;">
          <duo-loader variant="pulse" size="md" color="primary"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Pulse</div>
        </div>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 48px; align-items: center;">
        <div style="text-align: center;">
          <duo-loader variant="spinner" size="sm" color="primary"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Small</div>
        </div>
        <div style="text-align: center;">
          <duo-loader variant="spinner" size="md" color="primary"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Medium</div>
        </div>
        <div style="text-align: center;">
          <duo-loader variant="spinner" size="lg" color="primary"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Large</div>
        </div>
      </div>
    `,
  }),
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 32px; align-items: center;">
        <div style="text-align: center;">
          <duo-loader variant="dots" size="md" color="primary"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Primary</div>
        </div>
        <div style="text-align: center;">
          <duo-loader variant="dots" size="md" color="secondary"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Secondary</div>
        </div>
        <div style="text-align: center;">
          <duo-loader variant="dots" size="md" color="gray"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: #777; font-size: 14px;">Gray</div>
        </div>
        <div style="text-align: center; background: #58CC02; padding: 16px; border-radius: 12px;">
          <duo-loader variant="dots" size="md" color="white"></duo-loader>
          <div style="margin-top: 12px; font-family: sans-serif; color: white; font-size: 14px;">White</div>
        </div>
      </div>
    `,
  }),
};

// =============================================================================
// REAL WORLD EXAMPLES
// =============================================================================

export const ButtonLoading: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px;">
        <duo-button variant="primary" [disabled]="true">
          <div style="display: flex; align-items: center; gap: 8px;">
            <duo-loader variant="spinner" size="sm" color="white"></duo-loader>
            <span>Saving...</span>
          </div>
        </duo-button>
        <duo-button variant="secondary" [disabled]="true">
          <div style="display: flex; align-items: center; gap: 8px;">
            <duo-loader variant="spinner" size="sm" color="white"></duo-loader>
            <span>Loading...</span>
          </div>
        </duo-button>
      </div>
    `,
  }),
};

export const PageLoading: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 48px;">
        <duo-loader variant="dots" size="lg" color="primary"></duo-loader>
        <div style="font-family: sans-serif; color: #777; font-size: 16px;">Loading your lessons...</div>
      </div>
    `,
  }),
};

export const CardLoading: Story = {
  render: () => ({
    template: `
      <div style="width: 300px; padding: 32px; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <duo-loader variant="pulse" size="lg" color="secondary"></duo-loader>
        <div style="font-family: sans-serif; color: #777; text-align: center;">
          <div style="font-weight: bold; color: #333; margin-bottom: 4px;">Fetching progress</div>
          <div style="font-size: 14px;">This may take a moment...</div>
        </div>
      </div>
    `,
  }),
};

export const InlineLoading: Story = {
  render: () => ({
    template: `
      <div style="font-family: sans-serif; display: flex; align-items: center; gap: 8px;">
        <span>Checking answer</span>
        <duo-loader variant="dots" size="sm" color="gray"></duo-loader>
      </div>
    `,
  }),
};

// =============================================================================
// PLAYGROUND
// =============================================================================

export const Playground: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
    color: 'primary',
    label: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <duo-loader
        [variant]="variant"
        [size]="size"
        [color]="color"
        [label]="label"
      ></duo-loader>
    `,
  }),
};
