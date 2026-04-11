# AGENTS

- Notable finding (2026-04-11): Homepage styles are scoped under `.home-page` to avoid regressions in profile pages that reuse shared classes.
- Notable finding (2026-04-11): Navbar overflow on homepage is prevented by border-box on nav/container blocks and one shared max-width for homepage containers.
- Notable finding (2026-04-11): Keep homepage theme tokens needed by navbar at `.home-page` scope, not only inside `.home-shell`, because navbar is rendered outside `.home-shell`.
- Notable finding (2026-04-11): Cross-page theme persistence depends on a shared DOM contract: `body[data-home-theme]` and one `.home-theme-toggle-button` per page.
- Notable finding (2026-04-11): Participant pages use the same navbar width contract as homepage and no longer require a dedicated back-link in profile content.
- Notable finding (2026-04-11): Participant markup contract is one `main.profile-main` with 4 ordered blocks (`.profile-intro`, `.profile-study-place`, `.profile-study-focus`, `.profile-signature`).
