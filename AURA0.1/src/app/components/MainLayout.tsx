import { Outlet, Link, useLocation } from "react-router";
import { useState } from "react";
import { Sprout, User, Map, LayoutDashboard, Settings, Home } from "lucide-react";
import { clsx } from "clsx";

export function MainLayout() {
  const location = useLocation();
  const [lang, setLang] = useState<"zh" | "en">("zh");

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2A2A2A] font-sans selection:bg-[#B0D3A1] selection:text-[#2A2A2A] flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-[#E8E2D9]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <Sprout className="w-8 h-8 text-[#87A96B]" strokeWidth={1.5} />
              <span className="font-semibold text-lg tracking-wide text-[#2A2A2A]">
                绿漪 <span className="text-[#87A96B] font-medium text-sm ml-1">Aura</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={clsx(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#87A96B]",
                  location.pathname === "/"
                    ? "text-[#87A96B]"
                    : "text-[#5A5A5A]"
                )}
              >
                <Home className="w-4 h-4" strokeWidth={1.5} />
                {lang === "zh" ? "首页" : "Home"}
              </Link>
              
              <Link
                to="/map"
                className={clsx(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#87A96B]",
                  location.pathname.startsWith("/map")
                    ? "text-[#87A96B]"
                    : "text-[#5A5A5A]"
                )}
              >
                <Map className="w-4 h-4" strokeWidth={1.5} />
                {lang === "zh" ? "选地认领" : "Plots"}
              </Link>
              
              <Link
                to="/dashboard"
                className={clsx(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#87A96B]",
                  location.pathname.startsWith("/dashboard")
                    ? "text-[#87A96B]"
                    : "text-[#5A5A5A]"
                )}
              >
                <LayoutDashboard className="w-4 h-4" strokeWidth={1.5} />
                {lang === "zh" ? "我的菜园" : "My Garden"}
              </Link>
              <div className="h-4 w-[1px] bg-[#E8E2D9]" />
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLang(lang === "zh" ? "en" : "zh")}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F0E8] text-[#5A5A5A] hover:bg-[#E8E2D9] transition-colors text-xs font-semibold tracking-wider"
                  title={lang === "zh" ? "切换为英文" : "Switch to Chinese"}
                >
                  {lang === "zh" ? "EN" : "中"}
                </button>

                <Link
                  to="/settings"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F0E8] text-[#5A5A5A] hover:bg-[#E8E2D9] transition-colors"
                  title={lang === "zh" ? "设置" : "Settings"}
                >
                  <Settings className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* Mobile menu button (visual only for mockup) */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setLang(lang === "zh" ? "en" : "zh")}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F0E8] text-[#5A5A5A] hover:bg-[#E8E2D9] transition-colors text-xs font-semibold tracking-wider"
                title={lang === "zh" ? "切换为英文" : "Switch to Chinese"}
              >
                {lang === "zh" ? "EN" : "中"}
              </button>
              <button className="text-[#2A2A2A] p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-[#E8E2D9] text-[#5A5A5A] py-12 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 h-6 text-[#87A96B]" strokeWidth={1.5} />
            <span className="font-medium tracking-wide text-[#2A2A2A]">绿漪 Aura</span>
          </div>
          <p className="text-sm">© 2026 Aura. {lang === "zh" ? "保留所有权利。" : "All rights reserved."}</p>
        </div>
      </footer>
    </div>
  );
}