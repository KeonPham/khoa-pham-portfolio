# Khoa Pham — personal portfolio

An English portfolio about data, AI, hands-on building, regional leadership and continued learning. Responsive HTML, CSS and JavaScript with real project and professional images. No framework or package installation is required.

## Local preview

With Node.js installed:

```sh
node scripts/preview.mjs
```

Open http://127.0.0.1:4173. Stop with Ctrl+C.

```sh
node scripts/check-site.mjs
```

Edit `dist/index.html` for content, `dist/styles.css` for appearance, and `dist/app.js` for optional motion. Images and the self-hosted font are in `dist/assets/`.

## Deploy on Vercel

1. Import this GitHub repository at https://vercel.com/new.
2. Keep the repository root as the Root Directory and use the **Other** framework preset.
3. The included `vercel.json` sets the validation command and publishes `dist`. No environment variables are needed.
4. Deploy. Vercel provides a `vercel.app` address, and future commits to the production branch can deploy automatically.
5. To use your own domain, open the project's **Settings → Domains**, add the domain, and create the exact DNS records Vercel shows at your domain registrar. Domain registration is purchased separately from hosting. Do not replace unrelated mail records.

Vercel Hobby is intended for personal, non-commercial use. Review the current plan terms if you turn this into a business site.

Official guidance: https://vercel.com/docs/plans/hobby and https://vercel.com/docs/domains/working-with-domains/add-a-domain .

## Other free hosting options

- **Cloudflare Pages:** connect the repository, use `node scripts/check-site.mjs` as the build command and `dist` as the output directory. Supports custom domains. See https://developers.cloudflare.com/pages/ .
- **GitHub Pages:** free for public repositories; publish the contents of `dist` through a Pages workflow. Supports custom domains. See https://docs.github.com/en/pages .

## Content and assets

Professional information comes from Khoa's supplied CV, academic documents and public GitHub/LinkedIn posts. The page links to its supporting sources. MedSegAPI is research software, Research Radar is a personal proof of concept, and Interview Agent is a team hackathon prototype.

Photos and project images belong to their respective rights holders and are included for this personal portfolio; no blanket reuse license is granted. Anton is distributed under the SIL Open Font License included at `dist/assets/fonts/OFL.txt`.

This repository is a portable export of the portfolio. It does not contain hosting credentials, internal research notes, or the original hosting service's configuration.

