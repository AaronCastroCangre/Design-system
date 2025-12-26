# Duo UI - Duolingo-Inspired Design System

A Duolingo-inspired Angular component library with the signature 3D button effect, vibrant colors, and playful aesthetic.

## Quick Start

### Installation

```bash
npm install @anthropic/duo-ui
```

### Import Components

```typescript
import { ButtonComponent, InputComponent, ModalComponent } from '@anthropic/duo-ui';

@Component({
  imports: [ButtonComponent, InputComponent, ModalComponent],
  // ...
})
```

### Import Styles (Optional)

```scss
@use '@anthropic/duo-ui/styles' as duo;

// Access tokens
.my-class {
  color: duo.$color-primary;
}
```

## Components

| Component | Description |
|-----------|-------------|
| `duo-button` | Button with 3D press effect |
| `duo-input` | Text input with 3D border |
| `duo-modal` | Modal dialog with animations |
| `duo-alert` | Contextual alert messages |
| `duo-badge` | Labels and status indicators |
| `duo-loader` | Loading spinners and dots |
| `duo-radio` | Radio button group |
| `duo-switch` | Toggle switch |

## Project Structure

```
system-design-angular/
├── libs/
│   └── duo-ui/                    # Component library
│       ├── src/
│       │   ├── lib/
│       │   │   ├── components/    # All components
│       │   │   └── styles/        # Design tokens
│       │   └── index.ts           # Public API
│       ├── ng-package.json
│       └── package.json
├── dist/libs/duo-ui/              # Built library
├── .storybook/                    # Storybook config
└── docs/                          # Documentation
```

## Development

### Build Library

```bash
npx nx build duo-ui
```

### Run Storybook

```bash
npm run storybook
```

### Publish to npm

```bash
npx nx build duo-ui
cd dist/libs/duo-ui
npm publish
```

## Design Tokens

See [TOKENS.md](./1.0-TOKENS.md) for the complete list of design tokens.

## Components Documentation

See [COMPONENTS.md](./2-0.COMPONENTS.md) for detailed component API documentation.
