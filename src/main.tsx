import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.css";
import { ThemeProvider } from "@/components/theme/theme.provider.tsx";
import "@/styles/cyberpunk.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
