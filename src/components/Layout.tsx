import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Globe2, Menu, X } from "lucide-react";

const nav: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/sites", label: "Sites & Timelapse" },
  { to: "/climate", label: "Climate Data" },
  { to: "/about", label: "About & Sources" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-earth-950/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Globe2 className="h-7 w-7 text-earth-400" aria-hidden />
            EVS Climate Atlas
          </NavLink>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive ? "bg-earth-800 text-earth-300" : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-200 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-white/10 px-4 py-3 md:hidden">
            {nav.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm ${isActive ? "text-earth-300" : "text-slate-300"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 bg-earth-900/50 py-8 text-center text-sm text-slate-400">
        <p>EVS Project — Environmental change 1984–2024</p>
        <p className="mt-1 text-xs text-slate-500">
          Data compiled from public NASA, NOAA, IPCC, and regional agency summaries for educational use.
        </p>
      </footer>
    </div>
  );
}
