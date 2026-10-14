import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ClimateChart from "../components/ClimateChart";
import TimelapseEmbed from "../components/TimelapseEmbed";
import { getSiteById } from "../data/sites";

export default function SiteDetailPage() {
  const { siteId } = useParams<{ siteId: string }>();
  const site = siteId ? getSiteById(siteId) : undefined;

  if (!site) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
        <p className="text-slate-400">Site not found.</p>
        <Link to="/sites" className="btn-primary mt-4">
          Back to sites
        </Link>
      </div>
    );
  }

  const chartData = site.metrics.map((m) => ({ year: m.year, value: m.value }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Link to="/sites" className="btn-ghost mb-6 inline-flex text-sm">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All sites
      </Link>
      <header className="mb-8">
        <p className="text-sm text-earth-400">{site.region}</p>
        <h1 className="mt-1 font-display text-3xl font-bold text-white md:text-4xl">{site.name}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{site.summary}</p>
      </header>

      <TimelapseEmbed lat={site.lat} lng={site.lng} zoom={site.zoom} title={site.name} />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="glass-panel p-5">
          <h2 className="font-display text-lg font-semibold text-white">1984 snapshot</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{site.change1984}</p>
        </div>
        <div className="glass-panel p-5">
          <h2 className="font-display text-lg font-semibold text-white">2020s snapshot</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{site.change2024}</p>
        </div>
      </div>

      <div className="mt-8">
        <ClimateChart
          data={chartData}
          title={`${site.metrics[0]?.label ?? "Regional indicator"} (${site.metrics[0]?.unit ?? ""})`}
          yLabel={`Source: ${site.dataSource}`}
          variant="bar"
          color="#5cb8a3"
          valueFormatter={(v) => `${v} ${site.metrics[0]?.unit ?? ""}`}
        />
      </div>

      <div className="glass-panel mt-8 p-5">
        <h2 className="font-display text-lg font-semibold text-white">Causes of change</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">
          {site.causes.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
