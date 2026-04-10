# Copilot Instructions

## Repository Overview

This is a static HTML/CSS team page for a student group at a Ukrainian university. There is **no build system, no package manager, and no JavaScript**. All files are plain HTML and CSS that can be opened directly in a browser.

## Tech Stack

- **HTML5** – all pages use `<!DOCTYPE html>` with `lang="uk"` (Ukrainian)
- **CSS3** – one shared stylesheet (`style.css`) at the repository root
- **No frameworks, no JavaScript, no build tools**
- **Charset**: UTF-8; some files include a UTF-8 BOM (`﻿`) at the start — preserve this when editing those files

## Repository Structure

```
/
├── index.html               # Main team page; lists all team members with links to their profiles
├── style.css                # Shared stylesheet for all pages
├── Foto/                    # Profile photos used by member pages
│   ├── Fox.png              # Myhal Yurii's photo
│   ├── kingpin.png          # Matvii Kovalov's photo
│   └── Sv.jpg               # Sviatoslav Lylo's photo
├── Myhal_Yurii/
│   └── Myhal.html           # Profile page for Myhal Yurii (Team Lead)
├── Matvii_Kovalov/
│   └── Kovalov.html         # Profile page for Matvii Kovalov
└── Sviatoslav_Lylo/
    └── Sviatoslav.html      # Profile page for Sviatoslav Lylo
```

## Team Members

| Name | Role | University | Faculty/Group |
|---|---|---|---|
| Myhal Yurii | Team Lead | LNU імені Івана Франка | ПМІ-13с |
| Matvii Kovalov | Member | LNU імені Івана Франка | ПМІ-13с |
| Sviatoslav Lylo | Member | Львівська політехніка | Computer Science (AI) |

## Coding Conventions

### HTML
- All pages are written in Ukrainian (`lang="uk"`)
- Member profile pages live in a dedicated subdirectory named `FirstName_LastName/`
- Profile pages reference the shared stylesheet with `../style.css` (one level up)
- Profile pages link back to `../index.html` with the text `← Назад на головну`
- Profile photos are stored in `/Foto/` and referenced as `../Foto/<filename>`
- The `.card` div wraps all page content

### CSS (style.css)
- One shared stylesheet for all pages — do **not** create per-page stylesheets
- CSS comments are written in Ukrainian
- Key classes: `.card` (page wrapper), `.profile-photo` (circular avatar), `.team-list` (member list on index), `.university` (university info paragraph)

### Adding a New Team Member
1. Add a profile photo to `/Foto/`
2. Create a new directory `/FirstName_LastName/` with a `Name.html` file modelled after an existing profile page
3. Add a `<li>` entry to the `.team-list` in `index.html` linking to the new profile page

## No Build or Test Commands

There are no build, lint, or test commands. To validate changes:
- Open the relevant `.html` file in a browser, or use a simple HTTP server (e.g., `python3 -m http.server`) from the repository root

## Language Note

All user-visible text and code comments are in Ukrainian. When adding or editing content, match the existing Ukrainian language style.
