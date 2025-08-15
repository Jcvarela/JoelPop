# Contributing

Thanks for contributing! Please follow these key rules:

- Write code in TypeScript with strict mode and use "@/..." imports.
- Place each component in `src/components/<Feature>` with matching `.tsx`, `.styles.ts`, and `.test.tsx` files.
- Use MUI Grid v2 and Fluent UI v9 for UI components.
- Keep styling in `.styles.ts` files only.
- Use Conventional Commits for commit messages and PR titles.
- Ensure `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` pass before submitting.
- Maintain accessibility and avoid committing secrets. Provide an `.env.example` when adding env vars.

See [docs/standards.md](docs/standards.md) for the full list of development standards.
