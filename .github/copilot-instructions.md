# Project Guidelines

## Code Style

- Stack: plain HTML5 + CSS3 + JavaScript only. frameworks, build system, or package manager.
- Language: user-visible text and CSS comments are Ukrainian; keep `lang="uk"` on HTML pages.
- Encoding: UTF-8. If a file already contains a UTF-8 BOM, preserve it.
- Keep one shared stylesheet at `style.css`; do not create per-page CSS files.

## Architecture

- `index.html` is the main page with the team list and links to profile pages.
- Profile pages are stored as `FirstName_LastName/Name.html`.
- Shared assets are in `Foto/`; profile pages load them via `../Foto/<filename>`.
- Shared layout/styling patterns live in `style.css`, especially classes `.card`, `.profile-photo`, `.team-list`, and `.university`.

## Build And Test

- Build/lint/test: none.
- Run locally by opening HTML files directly in a browser.
- Optional local server from repo root: `python3 -m http.server`.
- Validate changes manually in browser on both index and edited profile page(s).

## Conventions

- Profile pages must link stylesheet as `../style.css`.
- Profile pages must include one `<main class="profile-main">` with 4 blocks in order:
	`section.profile-block.profile-intro`, `section.profile-block.profile-study-place`,
	`section.profile-block.profile-study-focus`, `section.profile-block.profile-signature`.
- Intro block uses left photo + participant name section (`.profile-intro-media` and `.profile-intro-identity`).
- Theme contract on each page: `body[data-home-theme]` and exactly one `.home-theme-toggle-button`.
- Keep navbar width contract aligned with homepage shared max-width in `style.css`.
- Wrap each profile block in `.card` for consistent layout.
- Use `.university` for university/faculty paragraphs to keep visual consistency across profiles.

## New Member Checklist

1. Add photo to `Foto/`.
2. Create `FirstName_LastName/Name.html` from an existing profile pattern.
3. Ensure profile page uses `../style.css`, `../Foto/<filename>`, `.card`, and `.university` where applicable.
4. Ensure profile page keeps `body[data-home-theme]`, one `.home-theme-toggle-button`, and `main.profile-main` with 4 blocks.
5. Add new `<li>` entry to `index.html` inside `.team-list` linking to the new profile.
6. Verify navigation and layout in browser.
