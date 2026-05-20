# 💪 Gymfy

> A gym management platform with web3 features, built as my graduation project (TCC).

---

## About

Gymfy was my final college project (TCC). At the time, web3 was everywhere and I wanted to build something real with it, not just follow a tutorial.

The stack was a personal challenge too. I had never used GraphQL, Storybook, or Cypress before, so I decided to use all three at once and learn on the job. It was intense, but that was the point.

The web3 side includes a custom cryptocurrency called **GymfyCoin (GYC)**, an ERC20 token deployed only on the **Goerli testnet**. It was never minted or deployed to mainnet, it was built purely for learning and demonstrating the concept.

---

## Roadmap / Releases

| # | Feature | Status |
|---|---------|--------|
| 1 | Home page | Done |
| 2 | Dashboard | Planned |
| 3 | Virtual Coin (no web3) | Planned |
| 4 | Marketplace v1 (no web3) | Planned |
| 5 | MetaMask integration | Planned |
| 6 | GymfyCoin (web3) | Planned |
| 7 | Marketplace v2 (web3) | Planned |

---

## Architecture

This is a **monorepo** managed with [Turborepo](https://turbo.build/) and [pnpm workspaces](https://pnpm.io/workspaces), split into three packages:

```
packages/
  web/      # React frontend
  server/   # GraphQL API
  token/    # Smart contract (GymfyCoin)
```

---

## Technologies

### Monorepo

- [Turborepo](https://turbo.build/) for task orchestration
- [pnpm](https://pnpm.io/) workspaces
- [Docker Compose](https://docs.docker.com/compose/) for local services
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code style
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) for pre-commit hooks

### Web (`packages/web`)

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) as the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TanStack Query](https://tanstack.com/query) for server state
- [GraphQL](https://graphql.org/) + [graphql-codegen](https://the-guild.dev/graphql/codegen) for typed queries
- [React Hook Form](https://react-hook-form.com/) for forms
- [React Router v6](https://reactrouter.com/) for routing
- [Storybook](https://storybook.js.org/) for component development (first time using it)
- [Cypress](https://www.cypress.io/) for end-to-end testing (first time using it)
- [Headless UI](https://headlessui.com/) + [Heroicons](https://heroicons.com/) for UI primitives

Each component follows a structured pattern:

```
Button/
  Button.stories.tsx
  Button.test.tsx
  Button.container.tsx
  Button.component.tsx
  Button.types.ts
  index.tsx
```

### Server (`packages/server`)

- [Node.js](https://nodejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Apollo Server v3](https://www.apollographql.com/docs/apollo-server/) as the GraphQL server (first time using GraphQL)
- [Type-GraphQL](https://typegraphql.com/) for schema-first definitions
- [Prisma](https://www.prisma.io/) as the ORM
- [JWT](https://jwt.io/) + [bcrypt](https://github.com/kelektiv/node.bcrypt.js) for auth
- [Jest](https://jestjs.io/) for unit tests

### Token (`packages/token`)

- [Hardhat](https://hardhat.org/) for smart contract development
- [Solidity](https://soliditylang.org/)
- [OpenZeppelin](https://www.openzeppelin.com/) ERC20 standard
- **GymfyCoin (GYC)** deployed on [Goerli testnet](https://goerli.etherscan.io/) only, never on mainnet

---

## Getting Started

**Requirements:** Node.js 16, pnpm, Docker

```bash
# Install dependencies
pnpm install

# Start local services (database)
docker-compose up -d

# Run everything in dev mode
pnpm dev
```

For the server, copy `.env.example` to `.env.development` inside `packages/server` and fill in the values.

---

## Running Storybook

```bash
cd packages/web
pnpm storybook
```

---

## Running Tests

```bash
# Unit tests (server)
cd packages/server
pnpm test

# E2E tests (web)
cd packages/web
pnpm cypress
```
