# ergs

React + TypeScript app built with Vite.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Typecheck and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit tests in watch mode (Vitest) |
| `npm run test:run` | Run unit tests once |
| `npm run test:e2e` | Run end-to-end tests (Playwright) |
| `npm run test:e2e:ui` | Open the Playwright UI runner |

## Testing

- **Unit / component tests** live next to source as `src/**/*.test.tsx` and use Vitest + React Testing Library.
- **End-to-end tests** live in `e2e/` and use Playwright (Chromium).

First time you run Playwright locally, install the browser:

```bash
npx playwright install chromium
```
