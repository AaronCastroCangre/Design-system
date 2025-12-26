import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { SwitchComponent } from './switch.component';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SwitchComponent],
    }),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A Duolingo-inspired toggle switch component.

## Features
- **Three sizes**: sm, md, lg
- **Five colors**: primary, secondary, success, warning, danger
- **Optional label** with position control
- **3D effect** with characteristic bottom border
- **Smooth animations** for state transitions
- **ControlValueAccessor** for form integration
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Switch color when checked',
    },
    label: {
      control: 'text',
      description: 'Optional label text',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
    },
  },
};

export default meta;
type Story = StoryObj<SwitchComponent>;

// =============================================================================
// BASIC
// =============================================================================

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
};

export const WithLabel: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Enable notifications',
  },
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'primary',
    label: 'Small switch',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Medium switch',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'primary',
    label: 'Large switch',
  },
};

// =============================================================================
// COLORS
// =============================================================================

export const Primary: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    size: 'md',
    color: 'secondary',
    label: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    size: 'md',
    color: 'success',
    label: 'Success',
  },
};

export const Warning: Story = {
  args: {
    size: 'md',
    color: 'warning',
    label: 'Warning',
  },
};

export const Danger: Story = {
  args: {
    size: 'md',
    color: 'danger',
    label: 'Danger',
  },
};

// =============================================================================
// LABEL POSITION
// =============================================================================

export const LabelRight: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Label on right',
    labelPosition: 'right',
  },
};

export const LabelLeft: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Label on left',
    labelPosition: 'left',
  },
};

// =============================================================================
// STATES
// =============================================================================

export const Disabled: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Disabled switch',
    disabled: true,
  },
};

// =============================================================================
// ALL SIZES SHOWCASE
// =============================================================================

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <duo-switch size="sm" color="primary" label="Small"></duo-switch>
        <duo-switch size="md" color="primary" label="Medium"></duo-switch>
        <duo-switch size="lg" color="primary" label="Large"></duo-switch>
      </div>
    `,
  }),
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <duo-switch size="md" color="primary" label="Primary"></duo-switch>
        <duo-switch size="md" color="secondary" label="Secondary"></duo-switch>
        <duo-switch size="md" color="success" label="Success"></duo-switch>
        <duo-switch size="md" color="warning" label="Warning"></duo-switch>
        <duo-switch size="md" color="danger" label="Danger"></duo-switch>
      </div>
    `,
  }),
};

// =============================================================================
// REAL WORLD EXAMPLES
// =============================================================================

export const NotificationSettings: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 320px;">
        <div style="font-family: sans-serif; font-weight: bold; font-size: 18px; margin-bottom: 20px; color: #333;">
          Notifications
        </div>
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-family: sans-serif; color: #555;">Push notifications</span>
            <duo-switch size="md" color="primary"></duo-switch>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-family: sans-serif; color: #555;">Email reminders</span>
            <duo-switch size="md" color="primary"></duo-switch>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-family: sans-serif; color: #555;">Streak protection</span>
            <duo-switch size="md" color="success"></duo-switch>
          </div>
        </div>
      </div>
    `,
  }),
};

export const DarkModeToggle: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 12px; font-family: sans-serif;">
        <span style="font-size: 20px;">☀️</span>
        <duo-switch size="lg" color="secondary"></duo-switch>
        <span style="font-size: 20px;">🌙</span>
      </div>
    `,
  }),
};

export const FeatureToggles: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 360px;">
        <div style="font-family: sans-serif; font-weight: bold; font-size: 18px; margin-bottom: 20px; color: #333;">
          Learning preferences
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="padding: 12px; background: #F7F7F7; border-radius: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: sans-serif; font-weight: bold; color: #333; margin-bottom: 4px;">Sound effects</div>
                <div style="font-family: sans-serif; font-size: 12px; color: #777;">Play sounds during lessons</div>
              </div>
              <duo-switch size="md" color="primary"></duo-switch>
            </div>
          </div>
          <div style="padding: 12px; background: #F7F7F7; border-radius: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: sans-serif; font-weight: bold; color: #333; margin-bottom: 4px;">Listening exercises</div>
                <div style="font-family: sans-serif; font-size: 12px; color: #777;">Include audio challenges</div>
              </div>
              <duo-switch size="md" color="primary"></duo-switch>
            </div>
          </div>
          <div style="padding: 12px; background: #F7F7F7; border-radius: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-family: sans-serif; font-weight: bold; color: #333; margin-bottom: 4px;">Speaking exercises</div>
                <div style="font-family: sans-serif; font-size: 12px; color: #777;">Practice pronunciation</div>
              </div>
              <duo-switch size="md" color="primary"></duo-switch>
            </div>
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
    size: 'md',
    color: 'primary',
    label: 'Toggle me',
    labelPosition: 'right',
    disabled: false,
  },
};
