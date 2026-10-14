import ClimateChart from "../components/ClimateChart";
import {
  arcticIceFull,
  climateCauses,
  globalCo2Full,
  globalTemperatureAnomaly,
  seaLevelFull,
  windChangeNotes,
  windCurrentAnomaly,
  forestCoverIndex,
  YEAR_END,
  YEAR_START,
} from "../data/climate";

export default function ClimatePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="section-title">Climate & atmospheric change</h1>
      <p className="mt-3 max-w-3xl text-slate-400">
        Interactive graphs for {YEAR_START}–{YEAR_END}: temperature, greenhouse gases, sea level, ice extent, forest
        cover index, and wind-circulation anomalies—with plain-language causes below each section.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ClimateChart
          data={globalTemperatureAnomaly}
          title="Global temperature anomaly"
          yLabel="NASA GISS-style · °C vs 1951–1980"
          color="#e8a838"
          variant="area"
          valueFormatter={(v) => `${v.toFixed(2)} °C`}
        />
        <ClimateChart
          data={globalCo2Full}
          title="Atmospheric CO₂"
          yLabel="Mauna Loa annual mean · parts per million"
          color="#94a3b8"
          variant="line"
          valueFormatter={(v) => `${v.toFixed(1)} ppm`}
        />
        <ClimateChart
          data={seaLevelFull}
          title="Global mean sea level rise"
          yLabel="mm relative to 1993 satellite baseline (extended trend)"
          color="#60a5fa"
          variant="area"
          valueFormatter={(v) => `${v} mm`}
        />
        <ClimateChart
          data={arcticIceFull}
          title="Arctic sea ice minimum extent"
          yLabel="million km² (September minimum, trend composite)"
          color="#38bdf8"
          variant="line"
          valueFormatter={(v) => `${v.toFixed(2)} M km²`}
        />
        <ClimateChart
          data={forestCoverIndex}
          title="Global intact forest index"
          yLabel="Index (1984 = 100, downward = cumulative loss pressure)"
          color="#34d399"
          variant="line"
          valueFormatter={(v) => v.toFixed(1)}
        />
        <ClimateChart
          data={windCurrentAnomaly}
          title="Mid-latitude wind strength anomaly"
          yLabel="Normalized index · positive = stronger zonal flow component"
          color="#c084fc"
          variant="line"
          valueFormatter={(v) => v.toFixed(3)}
        />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-white">What is driving these trends?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {climateCauses.map((item) => (
            <article key={item.title} className="glass-panel p-5">
              <h3 className="font-semibold text-earth-300">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-white">Wind & ocean circulation shifts</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Wind patterns are less visible in a single graph than temperature, but their change connects regional
          timelapses to global physics:
        </p>
        <ul className="mt-4 space-y-3">
          {windChangeNotes.map((note) => (
            <li key={note} className="glass-panel px-4 py-3 text-sm text-slate-300">
              {note}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
