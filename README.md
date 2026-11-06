# Ishaan’s portfolio

Next.js/React portfolio with an Express contact API. Requires Node 20.9+.

## Local development

Run `npm install`, copy `apps/api/.env.example` to `apps/api/.env`, and set the Resend key, verified sender, and recipient. Run `npm run dev`, then visit http://localhost:3000. The API runs on port 4000. Without email configuration the site works, but form submissions report delivery unavailable.

`npm run build`, `npm run typecheck`, `npm test`, and `npm run lint` run workspace checks.

## Deployment

Deploy the web workspace to Vercel with the repository root as the project root and the build command `npm run build -w apps/web`; select the Next.js framework and output `apps/web/.next` if needed for your monorepo settings. Set `API_URL` to the HTTPS Express service origin before building.

Deploy the repository to a Node host with `npm ci`, `npm run build -w apps/api`, and `npm start -w apps/api`. Set `PORT` as required by the host, `FRONTEND_ORIGIN` to the public website origin, and all email variables from the API example. Keep API credentials out of frontend variables. Resend requires a verified sending domain; use the visitor’s address only as Reply-To.

Contact rate limits use process memory. With multiple API replicas, use a shared rate-limit store. Configure proxy trust for the exact hosting topology before relying on forwarded client addresses; do not blindly trust arbitrary forwarding headers.

No deployment has been published. Résumé, external project links, social profiles, and initial articles remain content tasks.

## Content

Edit `apps/web/lib/profile.ts` for profile/project copy. Add trusted `.md` or `.mdx` files under `apps/web/content/posts` with lowercase hyphenated filenames. Frontmatter requires quoted `title`, `description`, `date` (YYYY-MM-DD), and `category`. An optional `source` HTTP(S) URL makes an entry a curated external article; omit it for a local original article. MDX executes code: only add files you trust. Do not accept uploads as article content.

The design sources are the supplied ZIPs and `DESIGN.md`. The initial implementation intentionally omits unavailable résumé/project/social links, newsletter signup, and fabricated articles or career history.
