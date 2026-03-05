# Signalist - Real-Time Stock Tracker & AI Market Analysis


<img width="1477" height="876" alt="image" src="https://github.com/user-attachments/assets/89dd67e6-2e49-472f-8af6-5901e4c37a95" />



A modern, full-stack stock analysis platform focused on **real-time market visibility**, **investor personalization**, and **scalable architecture**.

Signalist is built with the Next.js App Router and a component-first UI system to deliver a fast, responsive dashboard experience for tracking market movement, sector rotation, and stock-level insights.

## Why This Project Stands Out

- **Real-time market context** with embedded TradingView widgets (overview, heatmap, quotes, and top stories).
- **Scalable frontend architecture** using reusable hooks and composable UI primitives.
- **Production-minded backend foundation** with MongoDB connection caching and Better Auth integration scaffolding.
- **Type-safe development workflow** with TypeScript, ESLint, and organized domain constants.
- **Clear product direction** toward personalized investing workflows (risk profile, investment goals, preferred sectors).

## Core Features

### Live Dashboard Experience

- Market Overview with curated watch groups (Financial, Technology, Services).
- S&P 500 sector heatmap for quick sentiment scanning.
- Market timeline/news feed.
- Market quotes table for comparative symbol monitoring.

### Investor Onboarding Flow

- Sign-up flow captures:
  - Full name
  - Email and password
  - Investment goals
  - Risk tolerance
  - Preferred industry
- Sign-in and sign-up pages built with `react-hook-form` and reusable form components.

### Auth + Data Layer Foundations

- Better Auth configured with MongoDB adapter.
- Session-friendly plugin support for Next.js cookies.
- MongoDB connection reuse logic to avoid repeated connection overhead across requests.

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, custom utility classes, shadcn-style UI components |
| Forms | React Hook Form |
| Data/Auth | MongoDB, Mongoose, Better Auth |
| Visualization | TradingView embedded widgets |
| DX/Quality | ESLint, modular component architecture |

## Architecture Highlights

- **App Router layout separation**: route groups for authenticated app surfaces and auth surfaces.
- **Reusable widget abstraction**: `useTradingViewWidget` encapsulates script injection, lifecycle cleanup, and load-guarding.
- **Centralized config**: widget and domain constants are maintained in `lib/constants.ts` for consistency and easier iteration.
- **Database resilience**: global Mongoose cache prevents unnecessary reconnects in development and serverless-like environments.

## Project Structure

```text
stocks-app/
|- app/
|  |- (auth)/                # Sign-in/up experience
|  |- (root)/                # Main dashboard pages
|  |- layout.tsx             # Root metadata + global shell
|- components/
|  |- forms/                 # Reusable form fields
|  |- ui/                    # Primitive UI components
|  |- TradingViewWidget.tsx  # Generic market widget wrapper
|- hooks/
|  |- useTradingViewWidget.tsx
|- lib/
|  |- better-auth/auth.ts    # Better Auth configuration
|  |- constants.ts           # Widget + domain constants
|- database/
|  |- mongoose.ts            # Connection + cache logic
```

## Local Setup

### 1) Clone and install

```bash
git clone <your-repo-url>
cd stocks-app
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root with:

```bash
MONGODB_URI=<your_mongodb_connection_string>
BETTER_AUTH_SECRET=<your_secret>
BETTER_AUTH_URL=http://localhost:3000
```

### 3) Start development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start local development server.
- `npm run build` - Build for production.
- `npm run start` - Run production server.
- `npm run lint` - Run ESLint checks.
- `npm run test:db` - Verify MongoDB connectivity.

## Engineering Notes

- Widget configs are strongly centralized to reduce duplication and simplify experimentation.
- Form architecture favors reusable field primitives over one-off page-level inputs.
- Current auth pages are UI-complete and wired for form submission; full auth action integration is the next implementation step.

## Roadmap

- Complete Better Auth sign-up/sign-in action wiring.
- Add stock search route and symbol-level analytics pages.
- Implement watchlist persistence per authenticated user.
- Add alert creation, threshold tracking, and notification delivery.
- Expand test coverage for form validation and data access logic.

## Recruiter Snapshot

This project demonstrates:

- Product thinking in a real domain (retail investing and market intelligence).
- Strong frontend engineering with modular, reusable abstractions.
- Full-stack readiness through auth/data layer setup.
- The ability to design for scale early, then iterate toward richer features.

If you are evaluating this as part of an interview process, I can walk through architecture decisions, trade-offs, and planned production hardening steps.
