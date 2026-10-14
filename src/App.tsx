import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SitesPage from "./pages/SitesPage";
import SiteDetailPage from "./pages/SiteDetailPage";
import ClimatePage from "./pages/ClimatePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sites" element={<SitesPage />} />
        <Route path="sites/:siteId" element={<SiteDetailPage />} />
        <Route path="climate" element={<ClimatePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
