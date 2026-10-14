import SiteCard from "../components/SiteCard";
import { sites } from "../data/sites";

export default function SitesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="section-title">Sites & Google Earth timelapse</h1>
      <p className="mt-3 max-w-3xl text-slate-400">
        Major ecosystems and landmarks with ~40 years of satellite history. Select a site for embedded timelapse,
        regional graphs, and explained causes of visible change.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}
