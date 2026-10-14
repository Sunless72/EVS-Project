# EVS Climate Atlas

Interactive environmental science website covering **1984–2024** change at major global sites (Gangotri Glacier, Aral Sea, Amazon, Dubai coast, Lake Urmia, Columbia Glacier, and more) with **Google Earth timelapse**, regional metrics, and global climate graphs.

## Features

- Embedded **Google Earth Engine timelapse** per site
- **40-year** temperature, CO₂, sea level, Arctic ice, forest, and wind anomaly charts
- Causes of climate and land-change explained in plain language
- Responsive UI, ready for static hosting

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy (Vercel — recommended)

1. Push this folder to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite** — build command `npm run build`, output directory `dist`.

`vercel.json` includes SPA routing so deep links work.

## Build

```bash
npm run build
npm run preview
```

Static files are in `dist/`.
