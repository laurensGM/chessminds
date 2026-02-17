# ChessMinds

Ionic/Angular chess app.

## GitHub Pages deployment

The site is built and deployed by GitHub Actions when you push to `master`.

1. **Enable GitHub Actions as the source**
   - Repo **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

2. **After pushing**, the workflow builds the app and deploys it. Your site will be at:
   - `https://<your-username>.github.io/chessminds/`

3. **If you use a custom domain** (e.g. `https://chessminds.example.com`), change the build step in `.github/workflows/deploy-pages.yml` to use base href `/`:
   - Replace `--base-href /${{ github.event.repository.name }}/` with `--base-href /`

## Local development

```bash
npm install
npm start
```

Build for production (output in `www/`):

```bash
npm run build
```
