import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Home, FolderKanban, User, Wrench } from "lucide-react";
import { NavMenus } from "@/utils/helper";

const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  projects: FolderKanban,
  about: User,
  services: Wrench,
};

const Header = () => {
  const [activeSection, setActiveSection] = React.useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigate = (key: string) => {
    setActiveSection(key);
    setMobileMenuOpen(false);

    const el = document.getElementById(key);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (key === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const url = new URL(window.location.href);

    if (key === "home") {
      url.search = "";
    } else {
      url.searchParams.set("section", key);
    }

    window.history.pushState({}, "", url);
  };

  const renderNav = (isMobile = false) => (
    <ul className={isMobile ? "flex flex-col gap-1" : "flex items-center gap-1"}>
      {NavMenus.map((menu) => {
        const Icon = navIcons[menu.key];
        const isActive = activeSection === menu.key;

        return (
          <li key={menu.key}>
            <button
              onClick={() => navigate(menu.key)}
              className={cn(
                "flex items-center gap-2 transition-colors",
                isMobile
                  ? "w-full px-4 py-3 rounded-xl"
                  : "px-3 py-2 rounded-full",
                isActive
                  ? "text-pink-600 font-semibold"
                  : "text-neutral-600 hover:text-pink-500"
              )}
            >
              {Icon && <Icon className="size-4" />}
              {menu.label}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <header className="sticky top-4 z-50 w-full container mx-auto flex items-center justify-between px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border shadow-sm">
        <h2 className="text-2xl font-bold text-neutral-800">Tria.</h2>

        {/* Desktop */}
        <nav className="hidden lg:block">{renderNav()}</nav>

        <div className="hidden lg:block">
          <Button onClick={() => navigate("contact")}>Contact Us</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-white p-4">
            {renderNav(true)}

            <Button
              className="w-full mt-4"
              onClick={() => navigate("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;