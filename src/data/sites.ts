export type SiteMetric = { year: number; value: number; unit: string; label: string };

export type EnvironmentalSite = {
  id: string;
  name: string;
  region: string;
  category: "glacier" | "water" | "forest" | "coast" | "desert";
  lat: number;
  lng: number;
  zoom: number;
  summary: string;
  change1984: string;
  change2024: string;
  causes: string[];
  metrics: SiteMetric[];
  dataSource: string;
};

/** Google Earth Engine Timelapse embed — satellite imagery 1984–2022. */
export function timelapseEmbedUrl(lat: number, lng: number, zoom = 10): string {
  return `https://earthengine.google.com/timelapse/embed/v2?#v=${zoom},${lng},${lat},latlng&t=0.05`;
}

export function timelapseExternalUrl(lat: number, lng: number, zoom = 10): string {
  return `https://earthengine.google.com/timelapse#v=${zoom},${lng},${lat},latlng&t=0.05`;
}

export const sites: EnvironmentalSite[] = [
  {
    id: "gangotri",
    name: "Gangotri Glacier",
    region: "Uttarakhand, India — Himalaya",
    category: "glacier",
    lat: 30.987,
    lng: 79.08,
    zoom: 11.5,
    summary:
      "One of the largest Himalayan glaciers, feeding the Ganges. Retreat has accelerated as higher elevations warm faster than the global average.",
    change1984:
      "1984 imagery shows a continuous ice tongue extending down-valley with limited exposed moraine.",
    change2024:
      "By the 2020s the snout has retreated kilometers; proglacial lakes and bare rock dominate former ice cover in timelapse.",
    causes: [
      "Regional warming and black carbon deposition on ice",
      "Reduced winter snow accumulation",
      "Monsoon variability affecting melt seasons",
    ],
    metrics: [
      { year: 1984, value: 29.0, unit: "km", label: "Approx. glacier length" },
      { year: 1994, value: 28.2, unit: "km", label: "Approx. glacier length" },
      { year: 2004, value: 27.0, unit: "km", label: "Approx. glacier length" },
      { year: 2014, value: 25.8, unit: "km", label: "Approx. glacier length" },
      { year: 2024, value: 24.5, unit: "km", label: "Approx. glacier length" },
    ],
    dataSource: "ISRO / Geological Survey of India reports; Google Earth Timelapse",
  },
  {
    id: "aral-sea",
    name: "Aral Sea",
    region: "Kazakhstan / Uzbekistan, Central Asia",
    category: "water",
    lat: 45.0,
    lng: 59.5,
    zoom: 8,
    summary:
      "Once the fourth-largest lake, the Aral Sea shrank dramatically after rivers were diverted for cotton irrigation.",
    change1984: "1984 views show a single large blue water body with modest separation in the south.",
    change2024:
      "Timelapse reveals division into remnant North Aral and isolated southern basins, with vast exposed seabed (Aralkum Desert).",
    causes: [
      "Amu Darya and Syr Darya river diversion for agriculture",
      "Evaporation in an arid continental climate",
      "Legacy pollution from exposed lake bed",
    ],
    metrics: [
      { year: 1984, value: 68000, unit: "km²", label: "Surface area" },
      { year: 1994, value: 37000, unit: "km²", label: "Surface area" },
      { year: 2004, value: 17000, unit: "km²", label: "Surface area" },
      { year: 2014, value: 8000, unit: "km²", label: "Surface area" },
      { year: 2024, value: 7500, unit: "km²", label: "Surface area (partial recovery in North)" },
    ],
    dataSource: "NASA Earth Observatory; UNEP Aral Sea programmes",
  },
  {
    id: "amazon",
    name: "Amazon Rainforest",
    region: "Brazil — Rondônia / Amazonas",
    category: "forest",
    lat: -10.5,
    lng: -62.5,
    zoom: 9,
    summary:
      "The world's largest tropical forest shows expanding patterns of deforestation, fragmentation, and fire scarring in satellite timelapse.",
    change1984: "Dense continuous forest canopy with few linear clearings along rivers and roads.",
    change2024:
      "Fishbone deforestation patterns, regrowth patches, and burned areas appear across the arc of settlement.",
    causes: [
      "Cattle ranching and soy expansion",
      "Road building (e.g. BR-364 corridor effects)",
      "Drought and fire feedbacks linked to climate change",
    ],
    metrics: [
      { year: 1984, value: 100, unit: "index", label: "Intact forest index (1984=100)" },
      { year: 1994, value: 94, unit: "index", label: "Intact forest index" },
      { year: 2004, value: 88, unit: "index", label: "Intact forest index" },
      { year: 2014, value: 83, unit: "index", label: "Intact forest index" },
      { year: 2024, value: 79, unit: "index", label: "Intact forest index" },
    ],
    dataSource: "INPE PRODES; Global Forest Watch; Google Timelapse",
  },
  {
    id: "dubai-coast",
    name: "Dubai Coastline",
    region: "United Arab Emirates — Persian Gulf",
    category: "coast",
    lat: 25.1124,
    lng: 55.139,
    zoom: 11,
    summary:
      "Artificial islands and port expansion transformed shallow Gulf waters into one of the most visible urban coastlines on Earth.",
    change1984: "Natural coastline with sparse development along Dubai Creek and open tidal flats.",
    change2024:
      "Palm Jumeirah, Palm Jebel Ali outlines, and extended port infrastructure dominate offshore timelapse.",
    causes: [
      "Land reclamation and mega-engineering projects",
      "Urban population and tourism growth",
      "Shipping and desalination infrastructure",
    ],
    metrics: [
      { year: 1984, value: 72, unit: "km", label: "Urban coastal length (approx.)" },
      { year: 1994, value: 95, unit: "km", label: "Urban coastal length" },
      { year: 2004, value: 180, unit: "km", label: "Urban coastal length" },
      { year: 2014, value: 220, unit: "km", label: "Urban coastal length" },
      { year: 2024, value: 240, unit: "km", label: "Urban coastal length" },
    ],
    dataSource: "UAE coastal surveys; satellite land-cover studies",
  },
  {
    id: "lake-urmia",
    name: "Lake Urmia",
    region: "Northwest Iran",
    category: "water",
    lat: 37.716,
    lng: 45.428,
    zoom: 9.5,
    summary:
      "A hypersaline lake that lost most of its volume through drought and upstream water use, then partially recovered after intervention.",
    change1984: "Full turquoise lake with stable shoreline and minimal exposed salt flats.",
    change2024:
      "Timelapse shows extreme shrinkage around 2010–2016 and partial refilling after dam releases and water management.",
    causes: [
      "Damming of feeder rivers for agriculture",
      "Multi-year drought in the Middle East",
      "Groundwater extraction in the basin",
    ],
    metrics: [
      { year: 1984, value: 5200, unit: "km²", label: "Surface area" },
      { year: 1994, value: 5000, unit: "km²", label: "Surface area" },
      { year: 2004, value: 4600, unit: "km²", label: "Surface area" },
      { year: 2014, value: 2000, unit: "km²", label: "Surface area" },
      { year: 2024, value: 3100, unit: "km²", label: "Surface area" },
    ],
    dataSource: "Iran Department of Environment; journal remote-sensing studies",
  },
  {
    id: "columbia-glacier",
    name: "Columbia Glacier",
    region: "Alaska, USA — Prince William Sound",
    category: "glacier",
    lat: 61.167,
    lng: -146.888,
    zoom: 10.5,
    summary:
      "One of the fastest retreating glaciers in Alaska, with dramatic calving and terminus collapse visible year by year in timelapse.",
    change1984: "Terminus extended far into Columbia Bay with heavy ice cover in the fjord.",
    change2024:
      "Ice retreated tens of kilometers up-fjord; open water and icebergs replace former glacier tongue.",
    causes: [
      "Atmospheric warming in Alaska (high latitude amplification)",
      "Ocean warmth eroding tidewater glacier fronts",
      "Dynamic thinning and calving instability",
    ],
    metrics: [
      { year: 1984, value: 54, unit: "km", label: "Glacier length" },
      { year: 1994, value: 48, unit: "km", label: "Glacier length" },
      { year: 2004, value: 38, unit: "km", label: "Glacier length" },
      { year: 2014, value: 32, unit: "km", label: "Glacier length" },
      { year: 2024, value: 28, unit: "km", label: "Glacier length" },
    ],
    dataSource: "USGS Benchmark Glacier programme; Google Timelapse",
  },
  {
    id: "greenland-ice",
    name: "Greenland Ice Sheet (Kangerlussuaq)",
    region: "Greenland",
    category: "glacier",
    lat: 67.0,
    lng: -50.0,
    zoom: 8,
    summary:
      "Outlet glaciers and melt ponds expanded as the ice sheet lost mass at accelerating rates since the 1990s.",
    change1984: "Bright continuous ice sheet with limited melt rivers at the margin.",
    change2024: "Darker ice, expanded melt areas, and retreated glacier fronts in western Greenland timelapse.",
    causes: [
      "Surface melt doubling since mid-1990s",
      "Ocean-driven melting at glacier termini",
      "Albedo loss from soot and melt water",
    ],
    metrics: [
      { year: 1984, value: 0, unit: "Gt/yr", label: "Net mass loss" },
      { year: 1994, value: 50, unit: "Gt/yr", label: "Net mass loss" },
      { year: 2004, value: 150, unit: "Gt/yr", label: "Net mass loss" },
      { year: 2014, value: 280, unit: "Gt/yr", label: "Net mass loss" },
      { year: 2024, value: 320, unit: "Gt/yr", label: "Net mass loss" },
    ],
    dataSource: "NASA GRACE / GRACE-FO; NSIDC",
  },
  {
    id: "great-barrier-reef",
    name: "Great Barrier Reef",
    region: "Queensland, Australia",
    category: "water",
    lat: -18.5,
    lng: 147.5,
    zoom: 9,
    summary:
      "Coral bleaching from marine heatwaves appears as subtle shifts in reef color and lagoon clarity in long satellite records.",
    change1984: "Stable reef structures with consistent shallow-water patterns.",
    change2024:
      "Repeated bleaching events (2016, 2017, 2020, 2022) stressed northern and central reefs; recovery varies by sector.",
    causes: [
      "Ocean warming and marine heatwaves",
      "Acidification from absorbed CO₂",
      "Cyclones, runoff, and crown-of-thorns outbreaks",
    ],
    metrics: [
      { year: 1984, value: 28, unit: "%", label: "Live coral cover (avg. estimate)" },
      { year: 1994, value: 26, unit: "%", label: "Live coral cover" },
      { year: 2004, value: 24, unit: "%", label: "Live coral cover" },
      { year: 2014, value: 22, unit: "%", label: "Live coral cover" },
      { year: 2024, value: 19, unit: "%", label: "Live coral cover" },
    ],
    dataSource: "AIMS Long-Term Monitoring Program; NOAA Coral Reef Watch",
  },
];

export function getSiteById(id: string): EnvironmentalSite | undefined {
  return sites.find((s) => s.id === id);
}
