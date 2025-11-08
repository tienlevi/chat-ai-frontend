# Chat AI Frontend

A modern AI chat interface built with React, TypeScript, Vite, and TailwindCSS v4.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS v4** - Utility-first CSS framework
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

## Project Structure

```
chat-ai-frontend/
├── src/
│   ├── components/      # React components
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets
└── index.html          # HTML template
```

## Features

- Modern chat interface
- Real-time message updates
- Loading indicators
- Responsive design
- Dark mode support
- Accessibility features

## Development

The project uses:

- **Vite** for fast hot module replacement (HMR)
- **TypeScript** for type checking
- **ESLint** for code linting
- **TailwindCSS v4** for styling with CSS variables theme

## License

MIT
