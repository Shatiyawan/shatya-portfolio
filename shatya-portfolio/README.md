# Firgin Shatyawan (Shatya) - Portfolio Website

A static, bilingual (English / Bahasa Indonesia) portfolio built with HTML, CSS and vanilla JavaScript.
No backend, no build step, no external dependencies. Works on GitHub Pages.

## Folder structure
```
portfolio/
├── index.html
├── README.md
├── .nojekyll
├── assets/
│   ├── profile-photo.jpg          <- YOU ADD THIS
│   ├── cv/
│   │   ├── firgin-shatyawan-glints-cv.pdf      <- YOU ADD THIS
│   │   └── firgin-shatyawan-siapkerja-cv.pdf   <- YOU ADD THIS
│   ├── projects/                  <- project images go here
│   └── icons/ (favicon.svg, profile-placeholder.svg)
├── css/  style.css, animations.css, responsive.css
└── js/   config.js, translations.js, projects.js, language.js, theme.js, main.js
```

## Test locally
Easiest: double-click `index.html`. Everything works that way except that some browsers
restrict PDF previews on `file://`. For a faithful test, run a local server in the project folder:
```
python3 -m http.server 8000
```
Then open http://localhost:8000 (on Windows use `python -m http.server 8000`, or the VS Code "Live Server" extension).

## Replace your photo
Save a portrait (about 640x800 px, 4:5 ratio, JPG under 200 KB) as `assets/profile-photo.jpg`.
Until then a placeholder silhouette appears.

## Replace the two CV PDFs
Put your files in `assets/cv/` with exactly these names:
- `firgin-shatyawan-glints-cv.pdf`
- `firgin-shatyawan-siapkerja-cv.pdf`

To use different names or paths, edit only the `cvs` list in `js/config.js`. The card text lives in `js/translations.js`
(`cv.glints.*`, `cv.siapkerja.*`). Paths are relative (no leading slash) so they work on GitHub Pages project URLs.

## Add portfolio projects
1. Put the image in `assets/projects/` (for example `my-app.jpg`).
2. Copy one object in `js/projects.js` and edit it. Set `status` honestly:
   `client` (real client work), `concept` (finished self-initiated project) or `planned` (idea not yet made).
3. Categories: `uiux`, `web`, `graphic`, `infographic`, `multimedia`.
The three starter cards are marked `planned`. Change them to `concept` only when the work is finished.

## Edit content
- Contact details, email, social links, CV paths, skills list: `js/config.js`
- All visible text in both languages: `js/translations.js`
- Colors, fonts, spacing: variables at the top of `css/style.css`
- Exact employment dates: add them to the `exp.*.duration` lines in `js/translations.js`
- Email address: set `email` in `js/config.js`. Social links: set `url` for each entry.

## Publish on GitHub Pages
1. Create a free GitHub account and a new public repository (for example `portfolio`).
2. Upload the contents of this folder (so `index.html` is at the repository root), or with Git:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. In the repository go to Settings > Pages. Under "Build and deployment" choose "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.
5. After publishing, change the `og:image` meta tag in `index.html` to the full URL of your photo so link previews show it.

## Notes
- Theme and language choices are saved in your browser (localStorage).
- Contact is via WhatsApp, email and social links only. There is no contact form because a static site has no backend.
- Some phones cannot show PDFs inside a page; the site then opens the PDF in a new tab, and Download PDF always works.
