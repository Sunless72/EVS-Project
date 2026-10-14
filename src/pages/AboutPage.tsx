import { YEAR_END, YEAR_START } from "../data/climate";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="section-title">About this project</h1>
      <div className="prose prose-invert mt-6 max-w-none space-y-4 text-slate-300">
        <p>
          <strong className="text-white">EVS Climate Atlas</strong> is an educational website summarizing
          environmental change from {YEAR_START} to {YEAR_END}. It combines Google Earth Engine timelapse
          imagery with charts derived from publicly reported climate indicators.
        </p>
        <h2 className="font-display text-xl text-white">Data & timelapse</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>
            Timelapse:{" "}
            <a
              href="https://earthengine.google.com/timelapse/"
              className="text-earth-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Earth Timelapse
            </a>{" "}
            (1984–2022 satellite composite)
          </li>
          <li>
            Temperature:{" "}
            <a
              href="https://data.giss.nasa.gov/gistemp/"
              className="text-earth-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              NASA GISS Surface Temperature Analysis
            </a>
          </li>
          <li>
            CO₂:{" "}
            <a
              href="https://gml.noaa.gov/ccgg/trends/"
              className="text-earth-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              NOAA Global Monitoring Laboratory
            </a>
          </li>
          <li>
            Sea level & ice: NOAA Climate.gov, NSIDC Arctic Sea Ice News
          </li>
          <li>Regional metrics: national agencies and peer-reviewed remote sensing cited on each site page</li>
        </ul>
        <h2 className="font-display text-xl text-white">Deploy online</h2>
        <p className="text-sm">
          This site is a static React app. Deploy free on{" "}
          <a href="https://vercel.com" className="text-earth-400 underline" target="_blank" rel="noopener noreferrer">
            Vercel
          </a>
          , Netlify, or GitHub Pages: run <code className="rounded bg-earth-800 px-1">npm install</code> then{" "}
          <code className="rounded bg-earth-800 px-1">npm run build</code> and upload the <code className="rounded bg-earth-800 px-1">dist</code> folder.
        </p>
        <p className="text-xs text-slate-500">
          Chart values are rounded composites for classroom presentation; cite primary sources above for formal
          reports.
        </p>
      </div>
    </div>
  );
}
