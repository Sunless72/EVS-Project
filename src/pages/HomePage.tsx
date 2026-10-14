import { Link } from "react-router-dom";
import { BarChart3, Map, ThermometerSun, Wind } from "lucide-react";
import ClimateChart from "../components/ClimateChart";
import SiteCard from "../components/SiteCard";
import { globalTemperatureAnomaly, YEAR_END, YEAR_START } from "../data/climate";
import { sites } from "../data/sites";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-earth-800/80 via-earth-950 to-earth-950"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #3d8b7a 0%, transparent 45%), radial-gradient(circle at 80% 20%, #e8a838 0%, transparent 35%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-earth-400">
            Environmental Science · {YEAR_START}–{YEAR_END}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Forty years of change on one living planet
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Explore iconic landscapes—from Gangotri and the Aral Sea to Dubai&apos;s coast and the Amazon—with
            Google Earth timelapse, regional measurements, and global climate graphs backed by public science
            datasets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/sites" className="btn-primary">
              <Map className="h-4 w-4" aria-hidden />
              Explore sites
            </Link>
            <Link to="/climate" className="btn-ghost">
              <BarChart3 className="h-4 w-4" aria-hidden />
              Climate dashboards
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ThermometerSun, label: "Global warming", value: "+1.28°C", sub: "vs 1951–1980 (2024 est.)" },
              { icon: Map, label: "Featured sites", value: String(sites.length), sub: "With timelapse embeds" },
              { icon: Wind, label: "Wind & circulation", value: "Shifting", sub: "Jet stream & monsoon impacts" },
              { icon: BarChart3, label: "Interactive charts", value: "6+", sub: "Temperature, CO₂, ice, sea level" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="glass-panel p-4">
                <Icon className="mb-2 h-5 w-5 text-earth-400" aria-hidden />
                <p className="text-xs text-slate-400">{label}</p>
                <p className="font-display text-2xl font-semibold text-white">{value}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Global temperature trend</h2>
            <p className="mt-2 max-w-xl text-slate-400">
              NASA GISS-style global land–ocean temperature anomaly, showing acceleration after 2000.
            </p>
          </div>
          <Link to="/climate" className="btn-ghost text-sm">
            All climate graphs →
          </Link>
        </div>
        <ClimateChart
          data={globalTemperatureAnomaly}
          title="Global mean temperature anomaly"
          yLabel="°C relative to 1951–1980 baseline"
          color="#e8a838"
          variant="area"
          valueFormatter={(v) => `${v.toFixed(2)} °C`}
        />
      </section>

      <section className="border-t border-white/10 bg-earth-900/30 py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-title">Featured environmental sites</h2>
          <p className="mt-2 mb-8 max-w-2xl text-slate-400">
            Each location includes satellite timelapse, decade comparisons, local metrics, and drivers of change.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sites.slice(0, 6).map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/sites" className="btn-primary">
              View all {sites.length} sites
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
