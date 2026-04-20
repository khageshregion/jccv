# Workspace

## Overview

pnpm workspace monorepo. Contains the Aman Trading JCB Service website (React + Vite) and its Express backend API.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- **jcb-service** (`artifacts/jcb-service/`) — React + Vite frontend, preview path `/`
  - Pages: Home, Services, Gallery, About, Contact
  - Contact form stores enquiries in PostgreSQL via the API
- **api-server** (`artifacts/api-server/`) — Express 5 backend, preview path `/api`
  - `POST /api/enquiries` — store a contact form submission
  - `GET /api/enquiries` — list all enquiries (newest first)

## Database schema

- `enquiries` table: id, name, email, message, created_at

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
