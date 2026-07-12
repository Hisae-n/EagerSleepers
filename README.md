*This project has been created as part of the 42 curriculum by tnakaza, hinakaza.*

# EagerSleepers

## Description

EagerSleepers is a multiplayer online pillow-fight game built for the 42Tokyo `ft_transcendence` project.

The goal of the project is not only to ship a functional web application, but also to ensure that every team member can explain the product, architecture, implementation choices, and tradeoffs during evaluation.

At a product level, EagerSleepers aims to provide:

- Real-time online matches between players
- A clear matchmaking flow from sign-in to game result
- Social features around play, such as profiles, friends, and chat
- A progression loop that can later expand into XP, levels, achievements, items, and spectator experiences

Current status:

- Project phase: discovery and architecture definition
- Repository phase: documentation bootstrap
- Implementation status: not started yet

## Team Information

### `tnakaza`

- Roles: Product Manager, Developer, acting Technical Lead
- Responsibilities:
  - Define initial architecture and technical direction
  - Drive project planning and decision making
  - Maintain product and implementation clarity
  - Contribute to backend, infrastructure, and integration work

### `hinakaza`

- Roles: Product Owner, Developer
- Responsibilities:
  - Maintain user-value focus and feature prioritization
  - Refine user stories and gameplay expectations
  - Contribute to implementation and validation
  - Help ensure the product remains understandable for future team members

### `tyamaoka`

- Roles: Developer
- Responsibilities:
  - Contribute to frontend implementation and supporting feature work
  - Participate in code review, testing, and documentation
  - Grow into ownership of a specific module or feature area

### `rdhaibi`

- Roles: Developer
- Responsibilities:
  - Contribute to frontend and product-facing feature work
  - Participate in code review, testing, and documentation
  - Grow into ownership of a specific module or feature area

## Project Management

### Work organization

- We will break the project into small vertical slices instead of large technical layers.
- Each slice should be explainable end to end: UI, backend behavior, persistence, and test approach.
- Important architectural decisions must be documented in this repository.

### Current role distribution

- `tnakaza`: PM / Developer / acting Tech Lead
- `hinakaza`: PO / Developer

### Recommended operating model

- Weekly planning and review session
- Short async updates during the week
- Feature work tracked as issues with clear ownership
- Pull request review before merging important changes

### Tools

- Git and GitHub for source control and review
- Issue tracker: GitHub Issues + GitHub Projects
- Communication channel: to be finalized
- Documentation source of truth: this repository

### GitHub Projects Operating Policy

What:

- GitHub Issues are the unit of work.
- GitHub Projects is the main delivery board.
- The team will manage work through both a `Kanban` view and a `Backlog` view.

Why:

- The project already has a clear separation between `MVP`, `Mandatory`, and `Backlog`.
- A board-based workflow makes it easier to see what is currently in progress, what is blocked, and what should not be started yet.
- Using Issues as the unit of work improves ownership, reviewability, and historical traceability compared with managing work only in chat or in ad hoc notes.

How:

- Every meaningful task should exist as a GitHub Issue.
- Large goals should be split into smaller Issues that can be explained, reviewed, and closed independently.
- Work should move through the Project board rather than being tracked only mentally or in messages.
- README documents the strategy and decision-making context, while GitHub Projects tracks execution status.

### Planned GitHub Projects Structure

Recommended project name:

- `EagerSleepers Delivery Board`

Recommended views:

- `Kanban`
  - Purpose: day-to-day execution tracking
- `Backlog`
  - Purpose: prioritized list of all not-yet-started work
- `MVP`
  - Purpose: filter to the minimum playable product path
- `Mandatory`
  - Purpose: filter to work required to reach the planned subject score
- `Backlog+`
  - Purpose: optional extra-point or product-expansion work

### Planned Project Fields

The following fields are recommended for the GitHub Project.

| Field | Example values | What it means | Why it exists |
| --- | --- | --- | --- |
| `Status` | `Todo`, `In Progress`, `In Review`, `Done`, `Blocked` | Current execution state | Makes the board usable as a daily control surface |
| `Track` | `MVP`, `Mandatory`, `Backlog` | Which planning layer the work belongs to | Prevents extra work from diluting the core delivery |
| `Type` | `Feature`, `Tech`, `Docs`, `Bug`, `Chore` | Nature of the work item | Helps balance product work and technical work |
| `Area` | `Frontend`, `Backend`, `Game`, `Infra`, `Product` | Main responsibility area | Improves ownership and slice planning |
| `Priority` | `P0`, `P1`, `P2` | Relative urgency | Supports backlog ordering and weekly planning |

### Planned Status Flow

Recommended state transitions:

1. `Todo`
2. `In Progress`
3. `In Review`
4. `Done`

Exceptional state:

- `Blocked`
  - Use when progress cannot continue because of an external dependency, missing decision, or unresolved technical risk.

Working rule:

- A task should not stay in `In Progress` without an owner and a clear next step.

### Issue Design Rules

Each Issue should answer the following.

- What is being implemented or decided?
- Why does this matter for the product or project?
- How will we know it is complete?

Recommended Issue structure:

- Goal
- Scope
- Acceptance criteria
- Out of scope
- Dependencies
- Notes or design context

### Work Breakdown Rules

- Prefer vertical slices over layer-only tasks.
  - Good example: `Implement online matchmaking flow from waiting room to match start`
  - Less useful example: `Work on backend`
- Prefer Issues that are small enough to review and explain.
- Separate implementation work from investigation work when the uncertainty is high.
- Create explicit documentation Issues when a design decision needs to be captured for future members.

### Prioritization Rules

- `MVP` work has priority over all other tracks.
- `Mandatory` work starts only after the MVP path is stable enough not to be endangered by context switching.
- `Backlog` work should not start unless:
  - the MVP path is secure, and
  - the 14-point path is reasonably protected, or
  - the backlog item reduces a known project risk

### Ownership Rules

- Each Issue should have one primary owner, even when multiple people collaborate on it.
- Cross-functional work is encouraged, but accountability must stay explicit.
- Important code changes should be reviewed by at least one other team member whenever feasible.

### Definition of Done

An Issue should be considered done only when:

- the implementation or decision matches the agreed scope
- the change is understandable by the team
- related documentation is updated when needed
- the work is ready to be explained during evaluation

### Labels Convention

Recommended labels:

- `track:mvp`
- `track:mandatory`
- `track:backlog`
- `type:feature`
- `type:tech`
- `type:docs`
- `type:bug`
- `type:chore`
- `area:frontend`
- `area:backend`
- `area:game`
- `area:infra`
- `area:product`
- `priority:p0`
- `priority:p1`
- `priority:p2`

### Practical Team Cadence

- During planning:
  - pull highest-priority items from `Backlog` into active work
- During implementation:
  - keep `Status`, owner, and blockers current
- During review:
  - confirm acceptance criteria and update documentation if the decision changed project understanding
- During retrospection:
  - check whether the board still reflects reality and whether Issues are being split at the right size

## Product Scope

### What

EagerSleepers is a browser-based multiplayer action game where players throw pillows at each other in real time.

### Why

This concept fits the `ft_transcendence` constraints well because it naturally requires:

- Frontend, backend, and database
- Real-time synchronization between multiple users
- Match result handling and persistent user data
- Expandable social and progression systems

### How

The current user story map indicates a flow centered on:

1. Sign up / sign in
2. Tutorial or onboarding
3. Home / MyPage
4. Matchmaking and game mode selection
5. Real-time match play
6. Result display and progression
7. Friends / viewer / later social expansion

## User Story Map Summary

The current storyboard in [UserStoryMapping.pdf](/Users/nakaaza/Work/42Tokyo/42cursus/ft_transcendence/UserStoryMapping.pdf) uses three priority layers. These are not interchangeable, and the distinction should guide both planning and delivery.

### Planning model

- `MVP`
  - Meaning: the minimum feature and module set required to make EagerSleepers a real, playable product
  - Goal: prove the core gameplay loop and technical architecture
  - Score target: `9 points`
- `Mandatory`
  - Meaning: the additional selected modules needed to turn the MVP into a valid `ft_transcendence` submission with enough points
  - Goal: reach the required evaluation threshold without destabilizing the core product
- `Backlog`
  - Meaning: optional additions that may be used later for extra points or richer experience
  - Goal: expand only after the MVP and mandatory path are stable

### MVP focus

- Web
  - Major `2`: Use a framework for both the frontend and backend
  - Major `2`: Implement real-time features using WebSockets or similar technology
  - Minor `1`: Use an ORM for the database
- Gaming
  - Major `2`: Implement a complete web-based game where users can play against each other
  - Major `2`: Remote players — Enable two players on separate computers to play the same game in real-time

MVP subtotal: `9 points`

Product meaning of the MVP:

- Chrome latest stable support
- Containerized startup with a single command
- No browser console errors
- Sign up with email and password
- Sign in with email and password
- Home screen access after authentication
- 1v1 matchmaking when another waiting player exists
- Real-time gameplay with visible score state
- Throw timing and gauge-based pillow actions
- Result screen after match end

### Mandatory additions to get past 14 points

- Web
  - Major `2`: Allow users to interact with other users
- Accessibility and Internationalization
  - Minor `1`: Support for multiple languages
- User Management
  - Major `2`: Standard user management and authentication
  - Minor `1`: Game statistics and match history
  - Minor `1`: Implement remote authentication with OAuth 2.0
- Gaming
  - Minor `1`: Advanced chat features
  - Minor `1`: A gamification system to reward users for their actions

Mandatory-added subtotal: `8 points`

Planned total after MVP + Mandatory: `17 points`

### Backlog candidates for extra points

- Gaming
  - Minor `1`: Implement a tournament system
  - Minor `1`: Game customization options
  - Minor `1`: Implement spectator mode for games

### Product interpretation

- `MVP` means the smallest version that proves EagerSleepers is an actual online game product.
- `Mandatory` means the selected expansion path to satisfy the project’s scoring requirement.
- `Backlog` means intentionally deferred work, not work that is required before the product is considered valid.

## Mandatory Requirements Checklist

The following constraints come directly from [en.subject.pdf](/Users/nakaaza/Work/42Tokyo/42cursus/ft_transcendence/en.subject.pdf) and should be treated as non-negotiable.

- The project must be a web application with frontend, backend, and database.
- The project must run through containerization with a single command.
- The application must work on the latest stable Google Chrome.
- The browser console must stay free of warnings and errors.
- Privacy Policy and Terms of Service pages must exist and contain relevant content.
- Multiple users must be able to use the system simultaneously.
- Authentication must support secure email/password login at minimum.
- Inputs must be validated in both frontend and backend.
- Backend communication must use HTTPS everywhere.
- `README.md` must stay complete, honest, and written in English.

## Technical Stack

This section describes the current proposed stack. It is a working decision, not a final frozen one.

### Frontend

- Current bootstrap: Wasp web app frontend with React
- Current styling: plain CSS
- Planned later: Phaser for the real-time game scene

Why:

- Wasp provides an opinionated full-stack structure, reducing setup cost for a small team.
- React keeps standard app flows manageable: auth, navigation, dashboard, profile, and social UI.
- Phaser is intentionally not introduced in the first bootstrap. It should be added in a separate rendering spike when the base Wasp + Docker setup is stable.

### Backend

- Wasp server-side capabilities
- Node.js runtime
- Planned later: Socket.IO or another WebSocket-capable approach for real-time gameplay and lobby synchronization

Why:

- Real-time communication is intentionally not introduced in the first bootstrap. It should be added in a separate real-time communication spike.
- A unified TypeScript-friendly stack reduces context switching and onboarding cost.

### Database

- Candidate: PostgreSQL
- Access pattern: ORM-backed application data model

Why:

- Relational modeling fits users, friendships, matches, results, and progression well.
- PostgreSQL is a stable default for transactions, indexing, and later analytics expansion.

### Infrastructure

- Docker / Docker Compose for local orchestration
- Docker Compose config in `.env`
- Wasp app config split into `.env.server` and `.env.client`

Why:

- The subject explicitly requires containerized execution with a single command.
- Keeping local startup reproducible is critical for team coordination and evaluation.

## Architecture Overview

### Proposed application boundaries

- App shell:
  - Authentication
  - Home / MyPage
  - Friends
  - Chat
  - Results / progression
- Game client:
  - Phaser scene management
  - Input capture
  - Visual state rendering
- Real-time game service:
  - Matchmaking
  - Presence
  - Match state synchronization
  - Reconnection handling
- Persistence layer:
  - Users
  - Profiles
  - Friendships
  - Matches
  - Match events or summaries
  - Progression data

### Initial technical principle

Keep the authoritative game state on the server for fairness, while clients focus on input and rendering.

Why:

- This reduces cheating risk.
- It gives one source of truth for score, collision outcomes, and winner determination.
- It makes later spectator mode and match history easier to build.

## Modules

This section tracks target modules for planning purposes. Final claimed modules must match the implemented system at evaluation time.

### MVP modules

| Category | Official module name | Type | Points | Why |
| --- | --- | --- | --- | --- |
| Web | Use a framework for both the frontend and backend | Major | 2 | A structured full-stack foundation is needed from day one. |
| Web | Implement real-time features using WebSockets or similar technology | Major | 2 | Live matchmaking and in-game synchronization are core product behavior. |
| Web | Use an ORM for the database | Minor | 1 | Schema clarity matters early because users, matches, and progression are tightly linked. |
| Gaming and user experience | Implement a complete web-based game where users can play against each other | Major | 2 | This is the core identity of EagerSleepers. |
| Gaming and user experience | Remote players — Enable two players on separate computers to play the same game in real-time | Major | 2 | Online play across separate machines is a core product requirement. |

MVP subtotal: `9 points`

### Mandatory modules to reach the required project score

| Category | Official module name | Type | Points | Why |
| --- | --- | --- | --- | --- |
| Web | Allow users to interact with other users | Major | 2 | Profile, friends, and chat are part of the selected 14-point path. |
| Accessibility and Internationalization | Support for multiple languages | Minor | 1 | This is part of the selected scoring path and improves reach. |
| User Management | Standard user management and authentication | Major | 2 | The project needs proper account, profile, friend, and avatar management. |
| User Management | Game statistics and match history | Minor | 1 | Match outcomes should persist and be visible to players. |
| User Management | Implement remote authentication with OAuth 2.0 | Minor | 1 | This is explicitly selected in the story map and lowers sign-in friction. |
| Gaming and user experience | Advanced chat features | Minor | 1 | It extends the interaction module in a way that fits the social game concept. |
| Gaming and user experience | A gamification system to reward users for their actions | Minor | 1 | XP, achievements, and reward loops fit EagerSleepers naturally. |

Mandatory-added subtotal: `8 points`

### Planned total

Planned total after the required path: `17 points`

### Backlog modules for extra points

| Category | Official module name | Type | Points | Why |
| --- | --- | --- | --- | --- |
| Gaming and user experience | Implement a tournament system | Minor | 1 | Valuable competitive extension, but not required for the main 14-point path. |
| Gaming and user experience | Game customization options | Minor | 1 | Strong fit for pillow-fight gameplay, but should wait until the base loop is reliable. |
| Gaming and user experience | Implement spectator mode for games | Minor | 1 | Good long-term fit, but depends on stable match broadcasting. |

Backlog potential: `+3 points`

## Individual Contributions

This section will be updated continuously as implementation progresses.

### `tnakaza`

- Current contribution:
  - Project framing
  - User story mapping support
  - Initial technical direction
  - Initial README structure

### `hinakaza`

- Current contribution:
  - Product ownership
  - User story definition
  - Gameplay and progression idea shaping

## Instructions

This repository now contains a minimal Wasp development setup that runs through Docker Compose.

### Environment bootstrap summary

The first runnable environment was bootstrapped with the following scope:

- Added a minimal Wasp app at the repository root:
  - `main.wasp`
  - `schema.prisma`
  - `src/MainPage.tsx`
  - `src/Main.css`
  - `public/favicon.svg`
- Added Docker-based development startup:
  - `Dockerfile`
  - `docker-compose.yml`
  - `.dockerignore`
- Added project configuration required by Wasp:
  - `package.json`
  - `package-lock.json`
  - `tsconfig.json`
  - `vite.config.ts`
  - `.wasproot`
  - `.waspignore`
- Added local environment and ignore files:
  - `.env.example`
  - `.env.server.example`
  - `.env.client.example`
  - `.gitignore`
- Added Wasp agent support for Codex:
  - `AGENTS.md`
  - `skills-lock.json`

This bootstrap intentionally does not include Phaser, Socket.IO, authentication, game logic, or a production database design. The goal of this stage is only to prove that Wasp can run in this repository through Docker and can be reached from Google Chrome on the host machine.

### Key setup decisions

- The Wasp CLI is installed inside the Docker image with `npm install -g @wasp.sh/wasp-cli@0.23.0`.
- The host machine is not expected to have a local `wasp` command.
- The Compose service runs as `linux/amd64` because the Wasp CLI did not run correctly in the local Docker environment without that platform setting.
- The Wasp client and server URLs are derived from Docker Compose settings in `.env`.
- Vite is configured with `host: "0.0.0.0"` so the host browser can reach the dev server running inside Docker.
- The source tree is bind-mounted into the container with `.:/app`, allowing local edits to be picked up by the Dockerized Wasp dev server.
- Docker Compose reads local container settings from `.env`; `.env.example` documents those required variables.
- Wasp app variables are split by responsibility into `.env.server` and `.env.client`; example files are tracked as `.env.server.example` and `.env.client.example`.
- `CHOKIDAR_USEPOLLING` is enabled through `.env` to make file watching more reliable through Docker Desktop.
- PostgreSQL runs as a separate `db` container.
- The development database data is stored in the `postgres-data` named Docker volume.
- Wasp's `DATABASE_URL` is built in `docker-compose.yml` from the Docker Compose PostgreSQL settings, so the root `.env` no longer mixes client/server Wasp variables.
- Generated Wasp output and dependencies are kept out of Git via `.gitignore`, `.dockerignore`, and `.waspignore`.
- `.agents/` is ignored because Wasp Agent Plugin skills are local agent tooling and can be reinstalled when needed.

### Prerequisites

- Docker
- Docker Compose
- Google Chrome latest stable

Node.js and the Wasp CLI are installed inside the Docker image. They are not required on the host machine for the default development flow.

### Local setup flow

1. Copy the Docker Compose environment file:

   ```sh
   cp .env.example .env
   ```

2. If you want file-based Wasp env files as well, copy the split examples:

   ```sh
   cp .env.server.example .env.server
   cp .env.client.example .env.client
   ```

3. Build and start the Wasp development container:

   ```sh
   docker compose up --build
   ```

4. Open the default page in Google Chrome:

   ```text
   http://localhost:3000
   ```

### Daily development flow

Keep the Wasp development container running while editing files locally:

```sh
docker compose up
```

The default page should hot reload when files under `src/` are edited. For example, changes to `src/MainPage.tsx` or `src/Main.css` should be reflected in the browser without restarting the container.

Use these commands when you need to inspect or control the container:

```sh
docker compose ps
docker compose logs -f web
docker compose exec web sh
docker compose exec web wasp version
```

When generic Wasp documentation says to run `wasp <command>`, run it inside the `web` container for this project:

```sh
docker compose exec web wasp <command>
```

### Prisma Studio

To inspect and edit local database records through Prisma Studio, keep the Docker Compose services running and execute:

```sh
docker compose exec web wasp db studio
```

After Prisma Studio starts, open it from the host browser:

```text
http://localhost:5555
```

### Expected result

- The Wasp app starts in development mode.
- The client is available at `http://localhost:3000`.
- The Wasp server is available at `http://localhost:3001`.
- Chrome shows the `EagerSleepers` default page.

### Troubleshooting

- If Docker has stale generated files, recreate the volumes:

  ```sh
  docker compose down -v
  docker compose up --build
  ```

- If port `3000` or `3001` is already in use, stop the conflicting local process before starting the app.

- If Wasp does not pick up changes after waiting for recompilation, restart the service:

  ```sh
  docker compose restart web
  ```

- If the Wasp-generated files or dependencies become stale, clean the Docker volumes:

  ```sh
  docker compose down -v
  docker compose up --build
  ```

### Agent plugin setup

The Wasp Agent Plugin skills were installed with:

```sh
npx skills add wasp-lang/wasp-agent-plugins --yes
```

The installed skills live under `.agents/skills/` locally, but `.agents/` is intentionally ignored by Git. `AGENTS.md` contains Wasp-specific guidance for Codex and other coding agents. Because this project runs Wasp through Docker, `AGENTS.md` also documents the project-specific rule that Wasp commands should be run through `docker compose exec web wasp ...`.

## Documentation Policy

When a major technical or project-level decision changes, this README must be updated.

Examples:

- Stack change
- Module target change
- Architecture change
- Database model change
- Team role change
- Significant scope addition or removal

## Resources

### Project references

- 42 `ft_transcendence` subject: [en.subject.pdf](/Users/nakaaza/Work/42Tokyo/42cursus/ft_transcendence/en.subject.pdf)
- Product and feature planning board: [UserStoryMapping.pdf](/Users/nakaaza/Work/42Tokyo/42cursus/ft_transcendence/UserStoryMapping.pdf)

### Technical references to expand later

- Wasp documentation
- React documentation
- Phaser documentation
- Socket.IO documentation
- PostgreSQL documentation
- Docker documentation

### AI usage

AI is used in this project as a support tool, not as a substitute for understanding.

Current AI-assisted tasks:

- Summarizing and structuring subject requirements
- Reviewing architecture options
- Drafting implementation plans
- Drafting and updating project documentation

Rule for usage:

- No AI-generated code or design should be merged unless the team understands it well enough to explain, review, test, and modify it confidently.

## Open Questions

- Will Wasp remain the final full-stack foundation after the first technical spike?
- What exact real-time authority model will be used for the game loop?
- How much of the social layer belongs in MVP versus post-MVP?
- Which modules should be treated as buffer points beyond the minimum 14?
- What project management tooling will the team standardize on?
