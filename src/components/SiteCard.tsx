import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import type { EnvironmentalSite } from "../data/sites";

const categoryColors: Record<EnvironmentalSite["category"], string> = {
  glacier: "bg-sky-500/20 text-sky-300",
  water: "bg-blue-500/20 text-blue-300",
  forest: "bg-emerald-500/20 text-emerald-300",
  coast: "bg-amber-500/20 text-amber-300",
  desert: "bg-orange-500/20 text-orange-300",
};

export default function SiteCard({ site }: { site: EnvironmentalSite }) {
  return (
    <Link
      to={`/sites/${site.id}`}
      className="glass-panel group flex flex-col p-5 transition hover:border-earth-500/40 hover:shadow-earth-500/10"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${categoryColors[site.category]}`}>
          {site.category}
        </span>
        <MapPin className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
      </div>
      <h3 className="font-display text-xl font-semibold text-white group-hover:text-earth-300">{site.name}</h3>
      <p className="mt-1 text-sm text-slate-400">{site.region}</p>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-300">{site.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-earth-400">
        View timelapse & data
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
