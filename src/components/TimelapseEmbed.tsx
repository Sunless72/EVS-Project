import { ExternalLink } from "lucide-react";
import { timelapseEmbedUrl, timelapseExternalUrl } from "../data/sites";

type Props = {
  lat: number;
  lng: number;
  zoom: number;
  title: string;
};

export default function TimelapseEmbed({ lat, lng, zoom, title }: Props) {
  const src = timelapseEmbedUrl(lat, lng, zoom);
  const external = timelapseExternalUrl(lat, lng, zoom);

  return (
    <div className="glass-panel overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3">
        <h3 className="text-sm font-semibold text-white">Google Earth Timelapse — {title}</h3>
        <a
          href={external}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost text-xs"
        >
          Open full screen
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
      <div className="relative aspect-video w-full bg-earth-800">
        <iframe
          title={`Google Earth timelapse for ${title}`}
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>
      <p className="px-4 py-2 text-xs text-slate-500">
        Satellite timelapse 1984–2022 · Powered by Google Earth Engine
      </p>
    </div>
  );
}
