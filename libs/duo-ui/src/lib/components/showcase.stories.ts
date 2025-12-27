import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';

const meta: Meta = {
  title: 'Overview/Component Showcase',
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        InputComponent,
        AlertComponent,
        BadgeComponent,
        LoaderComponent,
        ModalComponent,
        RadioComponent,
        SwitchComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Duo Design System - Component Library

A Duolingo-inspired Angular component library with playful 3D effects and vibrant colors.

## Components Included
- **Button** - 5 variants, 3 sizes, icon support
- **Input** - Form inputs with validation states
- **Alert** - 4 variants for notifications
- **Badge** - 6 color variants, pill style
- **Loader** - 3 animation types
- **Modal** - Dialog with backdrop
- **Radio** - Radio button groups
- **Switch** - Toggle switches
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Icons
const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
const heartIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`;

// =============================================================================
// FULL COMPONENT SHOWCASE - All components in one view
// =============================================================================

export const AllComponents: Story = {
  render: () => ({
    props: {
      searchIcon,
      heartIcon,
      arrowIcon,
      radioOptions: [
        { value: 'spanish', label: 'Spanish' },
        { value: 'french', label: 'French' },
        { value: 'german', label: 'German' },
      ],
    },
    template: `
      <div style="padding: 40px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); min-height: 100vh; font-family: 'Nunito', sans-serif;">

        <!-- Header -->
        <div style="text-align: center; margin-bottom: 48px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #58cc02; margin: 0 0 8px 0;">
            🦉 Duo Design System
          </h1>
          <p style="font-size: 18px; color: #777; margin: 0;">
            Angular Component Library with Duolingo-inspired styling
          </p>
        </div>

        <!-- Components Grid -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 1200px; margin: 0 auto;">

          <!-- BUTTONS -->
          <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <h2 style="font-size: 20px; font-weight: 700; color: #4b4b4b; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px;">
              <span style="background: #58cc02; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px;">01</span>
              Buttons
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <duo-button variant="primary">Primary</duo-button>
              <duo-button variant="secondary">Secondary</duo-button>
              <duo-button variant="success">Success</duo-button>
              <duo-button variant="danger">Danger</duo-button>
              <duo-button variant="warning">Warning</duo-button>
            </div>
            <div style="display: flex; gap: 12px; align-items: center;">
              <duo-button variant="primary" size="sm">Small</duo-button>
              <duo-button variant="primary" size="md">Medium</duo-button>
              <duo-button variant="primary" size="lg">Large</duo-button>
            </div>
            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <duo-button variant="danger" [iconLeft]="heartIcon">Like</duo-button>
              <duo-button variant="primary" [iconRight]="arrowIcon">Next</duo-button>
            </div>
          </div>

          <!-- INPUTS -->
          <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <h2 style="font-size: 20px; font-weight: 700; color: #4b4b4b; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px;">
              <span style="background: #1cb0f6; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px;">02</span>
              Inputs
            </h2>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <duo-input placeholder="Default input" variant="default"></duo-input>
              <duo-input placeholder="Primary variant" variant="primary"></duo-input>
              <duo-input placeholder="Search..." [iconLeft]="searchIcon" label="Search"></duo-input>
              <duo-input placeholder="With hint" label="Email" hint="We'll never share your email"></duo-input>
            </div>
          </div>

          <!-- ALERTS -->
          <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <h2 style="font-size: 20px; font-weight: 700; color: #4b4b4b; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px;">
              <span style="background: #ff9600; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px;">03</span>
              Alerts
            </h2>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <duo-alert variant="info">This is an info alert message</duo-alert>
              <duo-alert variant="success">Great job! You completed the lesson!</duo-alert>
              <duo-alert variant="warning">Don't forget to practice today!</duo-alert>
              <duo-alert variant="danger">Oops! Something went wrong</duo-alert>
            </div>
          </div>

          <!-- BADGES -->
          <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <h2 style="font-size: 20px; font-weight: 700; color: #4b4b4b; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px;">
              <span style="background: #ce82ff; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px;">04</span>
              Badges
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <duo-badge variant="primary">Primary</duo-badge>
              <duo-badge variant="secondary">Secondary</duo-badge>
              <duo-badge variant="success">Success</duo-badge>
              <duo-badge variant="warning">Warning</duo-badge>
              <duo-badge variant="danger">Danger</duo-badge>
              <duo-badge variant="gray">Gray</duo-badge>
            </div>
            <div style="display: flex; gap: 12px; align-items: center;">
              <duo-badge variant="primary" size="sm">Small</duo-badge>
              <duo-badge variant="primary" size="md">Medium</duo-badge>
              <duo-badge variant="primary" size="lg">Large</duo-badge>
            </div>
            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <duo-badge variant="success" [pill]="true">Pill Style</duo-badge>
              <duo-badge variant="danger" [pill]="true">New</duo-badge>
              <duo-badge variant="warning" [pill]="true">Pro</duo-badge>
            </div>
          </div>

          <!-- LOADERS -->
          <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <h2 style="font-size: 20px; font-weight: 700; color: #4b4b4b; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px;">
              <span style="background: #ff4b4b; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px;">05</span>
              Loaders
            </h2>
            <div style="display: flex; gap: 32px; align-items: center; flex-wrap: wrap;">
              <div style="text-align: center;">
                <duo-loader variant="spinner" color="primary"></duo-loader>
                <p style="margin: 8px 0 0; font-size: 12px; color: #777;">Spinner</p>
              </div>
              <div style="text-align: center;">
                <duo-loader variant="dots" color="success"></duo-loader>
                <p style="margin: 8px 0 0; font-size: 12px; color: #777;">Dots</p>
              </div>
              <div style="text-align: center;">
                <duo-loader variant="pulse" color="danger"></duo-loader>
                <p style="margin: 8px 0 0; font-size: 12px; color: #777;">Pulse</p>
              </div>
            </div>
            <div style="display: flex; gap: 24px; align-items: center; margin-top: 24px;">
              <duo-loader variant="spinner" size="sm" color="primary"></duo-loader>
              <duo-loader variant="spinner" size="md" color="primary"></duo-loader>
              <duo-loader variant="spinner" size="lg" color="primary"></duo-loader>
            </div>
          </div>

          <!-- SWITCHES & RADIO -->
          <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <h2 style="font-size: 20px; font-weight: 700; color: #4b4b4b; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px;">
              <span style="background: #58cc02; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px;">06</span>
              Switches & Radio
            </h2>

            <h3 style="font-size: 14px; font-weight: 600; color: #777; margin: 0 0 12px 0;">Switches</h3>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
              <duo-switch [checked]="true" label="Notifications" color="primary"></duo-switch>
              <duo-switch [checked]="true" label="Dark Mode" color="success"></duo-switch>
              <duo-switch [checked]="false" label="Sound Effects" color="warning"></duo-switch>
            </div>

            <h3 style="font-size: 14px; font-weight: 600; color: #777; margin: 0 0 12px 0;">Radio Buttons</h3>
            <duo-radio
              [options]="radioOptions"
              name="language"
              value="spanish"
              orientation="vertical">
            </duo-radio>
          </div>

        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 48px; padding: 24px;">
          <p style="color: #777; font-size: 14px; margin: 0;">
            Built with Angular 20 • Standalone Components • Reactive Forms Support
          </p>
        </div>

      </div>
    `,
  }),
};

// =============================================================================
// COMPACT SHOWCASE - All components in a tighter layout
// =============================================================================

export const CompactShowcase: Story = {
  render: () => ({
    props: {
      searchIcon,
      heartIcon,
      arrowIcon,
      radioOptions: [
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2' },
      ],
    },
    template: `
      <div style="padding: 32px; background: #f5f5f5; min-height: 100vh; font-family: 'Nunito', sans-serif;">

        <div style="max-width: 900px; margin: 0 auto;">

          <!-- Header -->
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 28px; font-weight: 800; color: #58cc02; margin: 0;">🦉 Duo Design System</h1>
          </div>

          <!-- Row 1: Buttons -->
          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <h3 style="margin: 0 0 16px; font-size: 14px; color: #777; text-transform: uppercase; letter-spacing: 1px;">Buttons</h3>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <duo-button variant="primary" size="sm">Primary</duo-button>
              <duo-button variant="secondary" size="sm">Secondary</duo-button>
              <duo-button variant="success" size="sm">Success</duo-button>
              <duo-button variant="danger" size="sm">Danger</duo-button>
              <duo-button variant="warning" size="sm">Warning</duo-button>
              <duo-button variant="danger" size="sm" [iconLeft]="heartIcon">Like</duo-button>
            </div>
          </div>

          <!-- Row 2: Inputs & Badges -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
              <h3 style="margin: 0 0 16px; font-size: 14px; color: #777; text-transform: uppercase; letter-spacing: 1px;">Inputs</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <duo-input placeholder="Default" size="sm"></duo-input>
                <duo-input placeholder="With icon" size="sm" [iconLeft]="searchIcon"></duo-input>
              </div>
            </div>
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
              <h3 style="margin: 0 0 16px; font-size: 14px; color: #777; text-transform: uppercase; letter-spacing: 1px;">Badges</h3>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <duo-badge variant="primary" size="sm">Primary</duo-badge>
                <duo-badge variant="success" size="sm">Success</duo-badge>
                <duo-badge variant="danger" size="sm">Danger</duo-badge>
                <duo-badge variant="warning" size="sm" [pill]="true">Pro</duo-badge>
              </div>
            </div>
          </div>

          <!-- Row 3: Alerts -->
          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <h3 style="margin: 0 0 16px; font-size: 14px; color: #777; text-transform: uppercase; letter-spacing: 1px;">Alerts</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <duo-alert variant="info">Info message</duo-alert>
              <duo-alert variant="success">Success message</duo-alert>
              <duo-alert variant="warning">Warning message</duo-alert>
              <duo-alert variant="danger">Danger message</duo-alert>
            </div>
          </div>

          <!-- Row 4: Loaders, Switches, Radio -->
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
              <h3 style="margin: 0 0 16px; font-size: 14px; color: #777; text-transform: uppercase; letter-spacing: 1px;">Loaders</h3>
              <div style="display: flex; gap: 16px; align-items: center;">
                <duo-loader variant="spinner" size="sm" color="primary"></duo-loader>
                <duo-loader variant="dots" size="sm" color="success"></duo-loader>
                <duo-loader variant="pulse" size="sm" color="danger"></duo-loader>
              </div>
            </div>
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
              <h3 style="margin: 0 0 16px; font-size: 14px; color: #777; text-transform: uppercase; letter-spacing: 1px;">Switches</h3>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <duo-switch [checked]="true" label="On" size="sm" color="primary"></duo-switch>
                <duo-switch [checked]="false" label="Off" size="sm" color="gray"></duo-switch>
              </div>
            </div>
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
              <h3 style="margin: 0 0 16px; font-size: 14px; color: #777; text-transform: uppercase; letter-spacing: 1px;">Radio</h3>
              <duo-radio
                [options]="radioOptions"
                name="compact-radio"
                value="opt1"
                orientation="vertical">
              </duo-radio>
            </div>
          </div>

        </div>
      </div>
    `,
  }),
};

// =============================================================================
// DARK THEME SHOWCASE
// =============================================================================

export const DarkThemeShowcase: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => ({
    props: {
      searchIcon,
      heartIcon,
      arrowIcon,
      radioOptions: [
        { value: 'spanish', label: 'Spanish' },
        { value: 'french', label: 'French' },
      ],
    },
    template: `
      <div style="padding: 40px; background: #1a1a2e; min-height: 100vh; font-family: 'Nunito', sans-serif;">

        <div style="max-width: 1000px; margin: 0 auto;">

          <!-- Header -->
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="font-size: 32px; font-weight: 800; color: #58cc02; margin: 0;">🦉 Duo Design System</h1>
            <p style="color: #888; margin: 8px 0 0;">Dark Theme Preview</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">

            <!-- Buttons -->
            <div style="background: #232342; border-radius: 16px; padding: 24px;">
              <h3 style="margin: 0 0 16px; color: #fff; font-size: 16px;">Buttons</h3>
              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <duo-button variant="primary">Primary</duo-button>
                <duo-button variant="secondary">Secondary</duo-button>
                <duo-button variant="success">Success</duo-button>
                <duo-button variant="danger">Danger</duo-button>
              </div>
            </div>

            <!-- Inputs -->
            <div style="background: #232342; border-radius: 16px; padding: 24px;">
              <h3 style="margin: 0 0 16px; color: #fff; font-size: 16px;">Inputs</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <duo-input placeholder="Search..." [iconLeft]="searchIcon"></duo-input>
                <duo-input placeholder="Email" variant="primary"></duo-input>
              </div>
            </div>

            <!-- Alerts -->
            <div style="background: #232342; border-radius: 16px; padding: 24px;">
              <h3 style="margin: 0 0 16px; color: #fff; font-size: 16px;">Alerts</h3>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <duo-alert variant="success">Lesson complete!</duo-alert>
                <duo-alert variant="warning">Don't break your streak!</duo-alert>
              </div>
            </div>

            <!-- Badges & Loaders -->
            <div style="background: #232342; border-radius: 16px; padding: 24px;">
              <h3 style="margin: 0 0 16px; color: #fff; font-size: 16px;">Badges & Loaders</h3>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
                <duo-badge variant="primary">New</duo-badge>
                <duo-badge variant="success" [pill]="true">Pro</duo-badge>
                <duo-badge variant="warning">Beta</duo-badge>
                <duo-badge variant="danger">Hot</duo-badge>
              </div>
              <div style="display: flex; gap: 16px; align-items: center;">
                <duo-loader variant="spinner" size="sm" color="primary"></duo-loader>
                <duo-loader variant="dots" size="sm" color="success"></duo-loader>
                <duo-loader variant="pulse" size="sm" color="warning"></duo-loader>
              </div>
            </div>

            <!-- Switches -->
            <div style="background: #232342; border-radius: 16px; padding: 24px;">
              <h3 style="margin: 0 0 16px; color: #fff; font-size: 16px;">Switches</h3>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <duo-switch [checked]="true" label="Dark Mode" color="primary"></duo-switch>
                <duo-switch [checked]="true" label="Notifications" color="success"></duo-switch>
                <duo-switch [checked]="false" label="Sound" color="warning"></duo-switch>
              </div>
            </div>

            <!-- Radio -->
            <div style="background: #232342; border-radius: 16px; padding: 24px;">
              <h3 style="margin: 0 0 16px; color: #fff; font-size: 16px;">Radio Buttons</h3>
              <duo-radio
                [options]="radioOptions"
                name="dark-radio"
                value="spanish"
                orientation="vertical">
              </duo-radio>
            </div>

          </div>
        </div>
      </div>
    `,
  }),
};
