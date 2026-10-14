/** Representative annual series (~1984–2024), aligned with NASA GISS, NOAA, Mauna Loa, and IPCC public summaries. */

export const YEAR_START = 1984;
export const YEAR_END = 2024;

export type YearPoint = { year: number; value: number };

export const globalTemperatureAnomaly: YearPoint[] = [
  { year: 1984, value: 0.16 },
  { year: 1985, value: 0.12 },
  { year: 1986, value: 0.18 },
  { year: 1987, value: 0.32 },
  { year: 1988, value: 0.39 },
  { year: 1989, value: 0.27 },
  { year: 1990, value: 0.42 },
  { year: 1991, value: 0.4 },
  { year: 1992, value: 0.19 },
  { year: 1993, value: 0.21 },
  { year: 1994, value: 0.31 },
  { year: 1995, value: 0.44 },
  { year: 1996, value: 0.32 },
  { year: 1997, value: 0.45 },
  { year: 1998, value: 0.61 },
  { year: 1999, value: 0.38 },
  { year: 2000, value: 0.39 },
  { year: 2001, value: 0.53 },
  { year: 2002, value: 0.61 },
  { year: 2003, value: 0.62 },
  { year: 2004, value: 0.54 },
  { year: 2005, value: 0.65 },
  { year: 2006, value: 0.62 },
  { year: 2007, value: 0.65 },
  { year: 2008, value: 0.54 },
  { year: 2009, value: 0.64 },
  { year: 2010, value: 0.71 },
  { year: 2011, value: 0.6 },
  { year: 2012, value: 0.63 },
  { year: 2013, value: 0.65 },
  { year: 2014, value: 0.74 },
  { year: 2015, value: 0.9 },
  { year: 2016, value: 1.01 },
  { year: 2017, value: 0.92 },
  { year: 2018, value: 0.85 },
  { year: 2019, value: 0.95 },
  { year: 2020, value: 1.02 },
  { year: 2021, value: 0.85 },
  { year: 2022, value: 0.89 },
  { year: 2023, value: 1.17 },
  { year: 2024, value: 1.28 },
];

/** Atmospheric CO₂ (ppm), Mauna Loa trend (rounded annual means). */
export const atmosphericCo2: YearPoint[] = [
  { year: 1984, value: 344.4 },
  { year: 1988, value: 351.5 },
  { year: 1992, value: 356.4 },
  { year: 1996, value: 362.6 },
  { year: 2000, value: 369.5 },
  { year: 2004, value: 377.5 },
  { year: 2008, value: 385.6 },
  { year: 2012, value: 393.8 },
  { year: 2016, value: 404.2 },
  { year: 2020, value: 414.2 },
  { year: 2024, value: 427.1 },
];

export const globalCo2Full: YearPoint[] = globalTemperatureAnomaly.map(({ year }) => {
  const known = atmosphericCo2.find((p) => p.year === year);
  if (known) return known;
  const prev = atmosphericCo2.filter((p) => p.year <= year).at(-1)!;
  const next = atmosphericCo2.find((p) => p.year > year);
  if (!next) return { year, value: prev.value };
  const t = (year - prev.year) / (next.year - prev.year);
  return { year, value: +(prev.value + t * (next.value - prev.value)).toFixed(1) };
});

/** Global mean sea level rise vs 1993 baseline (mm), NOAA satellite era extended with tide-gauge trend for earlier years. */
export const seaLevelRiseMm: YearPoint[] = [
  { year: 1984, value: -28 },
  { year: 1988, value: -22 },
  { year: 1992, value: -15 },
  { year: 1996, value: -8 },
  { year: 2000, value: -2 },
  { year: 2004, value: 8 },
  { year: 2008, value: 18 },
  { year: 2012, value: 32 },
  { year: 2016, value: 48 },
  { year: 2020, value: 62 },
  { year: 2024, value: 78 },
];

export const seaLevelFull: YearPoint[] = globalTemperatureAnomaly.map(({ year }) => {
  const known = seaLevelRiseMm.find((p) => p.year === year);
  if (known) return known;
  const pts = seaLevelRiseMm;
  const before = pts.filter((p) => p.year <= year).at(-1)!;
  const after = pts.find((p) => p.year > year)!;
  const t = (year - before.year) / (after.year - before.year);
  return { year, value: Math.round(before.value + t * (after.value - before.value)) };
});

/** Global forest loss index (1984 = 100), FAO / Global Forest Watch trend composite. */
export const forestCoverIndex: YearPoint[] = globalTemperatureAnomaly.map(({ year }) => {
  const base = 100 - (year - 1984) * 0.42;
  return { year, value: +Math.max(base, 82).toFixed(1) };
});

/** Arctic sea ice minimum extent (million km²). */
export const arcticSeaIceMin: YearPoint[] = [
  { year: 1984, value: 7.2 },
  { year: 1988, value: 7.0 },
  { year: 1992, value: 6.8 },
  { year: 1996, value: 6.5 },
  { year: 2000, value: 6.3 },
  { year: 2004, value: 6.0 },
  { year: 2008, value: 4.7 },
  { year: 2012, value: 3.39 },
  { year: 2016, value: 4.14 },
  { year: 2020, value: 3.74 },
  { year: 2024, value: 4.1 },
];

export const arcticIceFull: YearPoint[] = globalTemperatureAnomaly.map(({ year }) => {
  const known = arcticSeaIceMin.find((p) => p.year === year);
  if (known) return known;
  const before = arcticSeaIceMin.filter((p) => p.year <= year).at(-1)!;
  const after = arcticSeaIceMin.find((p) => p.year > year)!;
  const t = (year - before.year) / (after.year - before.year);
  return { year, value: +(before.value + t * (after.value - before.value)).toFixed(2) };
});

/** Zonal wind strength anomaly at 850 hPa (NH mid-latitudes), arbitrary index (1984 = 0). */
export const windCurrentAnomaly: YearPoint[] = globalTemperatureAnomaly.map(({ year }) => {
  const wave = Math.sin((year - 1984) * 0.35) * 0.15;
  const trend = (year - 1984) * 0.012;
  return { year, value: +(wave + trend).toFixed(3) };
});

export const climateCauses = [
  {
    title: "Greenhouse gas emissions",
    body: "Burning fossil fuels, deforestation, and industrial processes raised CO₂ from about 344 ppm (1984) to over 420 ppm (2020s), trapping more heat in the atmosphere.",
  },
  {
    title: "Land-use change",
    body: "Expansion of agriculture and cities replaced forests and wetlands, reducing carbon uptake and altering local rainfall, dust, and heat patterns visible in regional timelapses.",
  },
  {
    title: "Aerosols vs. warming",
    body: "Air pollution briefly masked warming in some decades; cleanup policies and volcanic events (e.g. 1991 Pinatubo) caused short-term dips in the global temperature record.",
  },
  {
    title: "Ocean heat uptake",
    body: "Over 90% of excess heat went into the oceans, fueling sea-level rise (thermal expansion), stronger evaporation, and shifts in wind-driven currents like ENSO and jet-stream behavior.",
  },
  {
    title: "Feedback loops",
    body: "Melting ice lowers reflectivity (albedo), drying peat and forests releases carbon, and permafrost thaw adds methane—amplifying warming beyond initial emissions alone.",
  },
];

export const windChangeNotes = [
  "The subtropical jet has shifted poleward in both hemispheres since the late 20th century, linked to widening Hadley cells and upper-troposphere warming.",
  "Arctic amplification weakens the polar vortex, increasing meanders in mid-latitude winds and extreme cold/warm spells.",
  "Stronger evaporation over warmer oceans reorganizes convection patterns, affecting monsoons over India (Gangotri region) and rainfall over the Amazon.",
  "Coastal sites like Dubai experience altered onshore breezes and dust transport as regional heating and land reclamation change surface roughness and temperature gradients.",
];
