# Khoa Pham — personal portfolio

An English portfolio about data, AI, hands-on building, regional leadership and continued learning. Five accessible tabs organize Profile, Stories, Projects, CV and Credentials. The project library includes real images, original slide decks, PDF reports, static notebook archives and demonstrations that can be read inside the site. No framework or package installation is required.

Production: https://metislabs.io.vn/ · https://khoa-pham-portfolio-eta.vercel.app/

## Local preview

With Node.js installed:

```sh
node scripts/preview.mjs
```

Open http://127.0.0.1:4173. Stop with Ctrl+C.

```sh
node scripts/check-site.mjs
node scripts/check-content.mjs
```

Edit `dist/index.html` for the profile, experience and degree descriptions; `dist/content.js` for project/credential media; `dist/app.js` for stories, learning records and interactions; and `dist/styles.css` for appearance. All published media live in `dist/assets/`.

Each project has a stable `id`, category, authorship context, summary, stack, readable sections, media, documents and source references. Supported document types are `pdf`, `html`, `video` and `drive-video`. Local reports are isolated in sandboxed frames and documents load only when expanded. Images can be enlarged without leaving the site. Tabs, filters and project links are represented in the URL; the CV prints as a standalone document.

The 5 November 2026 catalog contains 29 cases after combining overlapping Drive/GitHub artifacts. It includes all 12 inspected Drive project groups and 19 grouped GitHub cases, plus three previously documented LinkedIn experiments. The Data Engineering collection contains six related assignments. Original notebook exports preserve saved work without executing it, and are labeled separately from curated case notes.

## Deploy on Vercel

1. Import this GitHub repository at https://vercel.com/new.
2. Keep the repository root as the Root Directory and use the **Other** framework preset.
3. The included `vercel.json` sets the validation command and publishes `dist`. No environment variables are needed.
4. Deploy. Vercel provides a `vercel.app` address. Automatic deployments require a working Git integration; the existing project is maintained with Vercel CLI deployments.
5. To use your own domain, open the project's **Settings → Domains**, add the domain, and create the exact DNS records Vercel shows at your domain registrar. Domain registration is purchased separately from hosting. Do not replace unrelated mail records.

Vercel Hobby is intended for personal, non-commercial use. Review the current plan terms if you turn this into a business site.

Official guidance: https://vercel.com/docs/plans/hobby and https://vercel.com/docs/domains/working-with-domains/add-a-domain .

## Other free hosting options

- **Cloudflare Pages:** connect the repository, use `node scripts/check-site.mjs` as the build command and `dist` as the output directory. Supports custom domains. See https://developers.cloudflare.com/pages/ .
- **GitHub Pages:** free for public repositories; publish the contents of `dist` through a Pages workflow. Supports custom domains. See https://docs.github.com/en/pages .

## Content and assets

Professional information comes from Khoa's supplied CV, academic documents and public GitHub/LinkedIn posts. The page keeps source links as secondary references. MedSegAPI is research software, Research Radar is a personal proof of concept, Interview Agent is a team hackathon prototype, and Smart Farm IoT is AIT coursework. Degrees are supported by supplied documents; learning records without individual certificate evidence are marked as CV-listed.

The 5 November refresh covered the supplied Drive tree and public original GitHub repositories. LinkedIn's Projects/certification sections were not accessible for that refresh; previously reviewed professional posts remain included. No private repositories or account material are published. Public credential excerpts omit identifiers, date of birth and verification tokens. Archived cloud notebooks remove account identifiers and credential-like strings; original source notebooks stay outside this repository.

Photos and project images belong to their respective rights holders and are included for this personal portfolio; no blanket reuse license is granted. Anton is distributed under the SIL Open Font License included at `dist/assets/fonts/OFL.txt`.

This repository is a portable export of the portfolio. It does not contain hosting credentials, internal research notes, or the original hosting service's configuration.
