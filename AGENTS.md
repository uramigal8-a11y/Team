# AGENTS

- Notable finding (2026-04-11): Homepage styles are scoped under `.home-page` to avoid regressions in profile pages that reuse shared classes.
- Notable finding (2026-04-11): Navbar overflow on homepage is prevented by border-box on nav/container blocks and one shared max-width for homepage containers.
- Notable finding (2026-04-11): Cross-page theme persistence depends on a shared DOM contract: `body[data-home-theme]` and one `.home-theme-toggle-button` per page.