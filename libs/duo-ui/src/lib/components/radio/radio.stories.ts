import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RadioComponent } from './radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Components/Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [RadioComponent],
    }),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A Duolingo-inspired radio button group component.

## Features
- **Three sizes**: sm, md, lg
- **Vertical or horizontal** orientation
- **Individual option disabling**
- **3D effect** with characteristic bottom border
- **ControlValueAccessor** for form integration
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio button size',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout orientation',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all options',
    },
  },
};

export default meta;
type Story = StoryObj<RadioComponent>;

const defaultOptions = [
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
];

// =============================================================================
// BASIC
// =============================================================================

export const Default: Story = {
  args: {
    options: defaultOptions,
    size: 'md',
    orientation: 'vertical',
  },
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  args: {
    options: defaultOptions,
    size: 'sm',
    orientation: 'vertical',
  },
};

export const Medium: Story = {
  args: {
    options: defaultOptions,
    size: 'md',
    orientation: 'vertical',
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    size: 'lg',
    orientation: 'vertical',
  },
};

// =============================================================================
// ORIENTATION
// =============================================================================

export const Vertical: Story = {
  args: {
    options: defaultOptions,
    size: 'md',
    orientation: 'vertical',
  },
};

export const Horizontal: Story = {
  args: {
    options: defaultOptions,
    size: 'md',
    orientation: 'horizontal',
  },
};

// =============================================================================
// STATES
// =============================================================================

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    size: 'md',
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: 'spanish', label: 'Spanish' },
      { value: 'french', label: 'French', disabled: true },
      { value: 'german', label: 'German' },
    ],
    size: 'md',
  },
};

// =============================================================================
// ALL SIZES SHOWCASE
// =============================================================================

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 48px;">
        <div>
          <div style="font-family: sans-serif; font-weight: bold; margin-bottom: 12px; color: #777;">Small</div>
          <duo-radio
            [options]="options"
            size="sm"
          ></duo-radio>
        </div>
        <div>
          <div style="font-family: sans-serif; font-weight: bold; margin-bottom: 12px; color: #777;">Medium</div>
          <duo-radio
            [options]="options"
            size="md"
          ></duo-radio>
        </div>
        <div>
          <div style="font-family: sans-serif; font-weight: bold; margin-bottom: 12px; color: #777;">Large</div>
          <duo-radio
            [options]="options"
            size="lg"
          ></duo-radio>
        </div>
      </div>
    `,
    props: {
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ],
    },
  }),
};

// =============================================================================
// REAL WORLD EXAMPLES
// =============================================================================

export const LanguageSelection: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="font-family: sans-serif; font-weight: bold; font-size: 18px; margin-bottom: 16px; color: #333;">
          What language do you want to learn?
        </div>
        <duo-radio
          [options]="options"
          size="md"
        ></duo-radio>
      </div>
    `,
    props: {
      options: [
        { value: 'spanish', label: '🇪🇸 Spanish' },
        { value: 'french', label: '🇫🇷 French' },
        { value: 'german', label: '🇩🇪 German' },
        { value: 'japanese', label: '🇯🇵 Japanese' },
      ],
    },
  }),
};

export const DifficultyLevel: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="font-family: sans-serif; font-weight: bold; font-size: 18px; margin-bottom: 16px; color: #333;">
          Select difficulty
        </div>
        <duo-radio
          [options]="options"
          size="lg"
          orientation="horizontal"
        ></duo-radio>
      </div>
    `,
    props: {
      options: [
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
      ],
    },
  }),
};

export const LessonLength: Story = {
  render: () => ({
    template: `
      <div style="background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="font-family: sans-serif; font-weight: bold; font-size: 18px; margin-bottom: 16px; color: #333;">
          Daily goal
        </div>
        <duo-radio
          [options]="options"
          size="md"
        ></duo-radio>
      </div>
    `,
    props: {
      options: [
        { value: '5', label: '5 min/day - Casual' },
        { value: '10', label: '10 min/day - Regular' },
        { value: '15', label: '15 min/day - Serious' },
        { value: '20', label: '20 min/day - Intense' },
      ],
    },
  }),
};

// =============================================================================
// PLAYGROUND
// =============================================================================

export const Playground: Story = {
  args: {
    options: defaultOptions,
    size: 'md',
    orientation: 'vertical',
    disabled: false,
  },
};
