import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { YearPoint } from "../data/climate";

type Props = {
  data: YearPoint[];
  title: string;
  yLabel: string;
  color?: string;
  variant?: "line" | "area" | "bar";
  valueFormatter?: (v: number) => string;
  chartId?: string;
};

const tooltipStyle = {
  backgroundColor: "#0f1a16",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  fontSize: "12px",
};

export default function ClimateChart({
  data,
  title,
  yLabel,
  color = "#5cb8a3",
  variant = "line",
  valueFormatter = (v) => String(v),
  chartId,
}: Props) {
  const gradId = chartId ?? title.replace(/\W+/g, "-").toLowerCase();
  const chartData = data.map((d) => ({ ...d, display: d.value }));

  return (
    <div className="glass-panel p-4 md:p-5">
      <h3 className="mb-1 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mb-4 text-xs text-slate-400">{yLabel}</p>
      <div className="h-64 w-full md:h-72">
        <ResponsiveContainer width="100%" height="100%">
          {variant === "area" ? (
            <AreaChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`grad-${gradId}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.45} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fill: "#94a3b8", fontSize: 11 }} tickMargin={6} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} width={48} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={{ color: "#e2e8f0" }}
                formatter={(v: number) => [valueFormatter(v), "Value"]}
              />
              <Area type="monotone" dataKey="display" stroke={color} fill={`url(#grad-${gradId})`} strokeWidth={2} />
            </AreaChart>
          ) : variant === "bar" ? (
            <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fill: "#94a3b8", fontSize: 11 }} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} width={48} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [valueFormatter(v), "Value"]} />
              <Bar dataKey="display" fill={color} radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fill: "#94a3b8", fontSize: 11 }} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} width={48} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [valueFormatter(v), "Value"]} />
              <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
              <Line type="monotone" dataKey="display" stroke={color} strokeWidth={2} dot={false} name="Annual" />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
