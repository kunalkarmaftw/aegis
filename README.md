# Aegis (LLM Reliability Gateway)

Aegis is a backend infrastructure project built with Node.js and TypeScript. Its goal is to provide a reliable gateway between applications and multiple Large Language Model (LLM) providers.

## Current Features

- Fastify HTTP server
- TypeScript-based backend
- Runtime request validation using Zod
- Modular route and service architecture
- Centralized error handling
- Health-check endpoint

## Tech Stack

- Node.js
- TypeScript
- Fastify
- Zod

## Project Structure

```text
src/
├── routes/
├── schemas/
├── services/
└── server.ts
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## API Endpoint

### POST `/v1/chat`

Example request:

```json
{
  "message": "Hello Aegis"
}
```

## Development Roadmap

- [x] Gateway foundation
- [ ] Automated testing
- [ ] Multi-provider LLM integration
- [ ] Retry and timeout mechanisms
- [ ] Circuit breaker and provider fallback
- [ ] PostgreSQL usage tracking
- [ ] Redis integration
- [ ] Observability
- [ ] Docker and deployment
- [ ] Load testing and incident simulations

## Project Status

Under active development.
