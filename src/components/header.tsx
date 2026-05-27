import { NavMenus } from '@/utils/helper'
import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { Menu, X, Home, FolderKanban, User, Wrench } from "lucide-react";

const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  projects: FolderKanban,
  about: User,
  services: Wrench,
};

const Header = () => {
  const [activeSection, setActiveSection] = React.useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const section = params.get("section")
      setActiveSection(section || "home")
    };
    syncFromUrl();

    window.addEventListener("popstate", syncFromUrl);

    return () => window.removeEventListener("popstate", syncFromUrl)
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  type Menu = {
    key: string;
    url: string;
    label: string;
  };
  
  const handleNavigationalLinkClick = (menu: Menu) => {
    const url = new URL(window.location.href);
    if(menu.key === "home"){
      url.search = "";
      window.history.pushState({}, "", url);
      window.scrollTo({top : 0, behavior: "smooth"});
      setActiveSection("home");
      setMobileMenuOpen(false);
      return;
    }

    url.searchParams.set("section", menu.key);
    window.history.pushState({}, "", url);

    document.getElementById(menu.key)?.scrollIntoView({behavior : "smooth", block : "start"});

    setActiveSection(menu.key);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-4 left-0 z-100
    w-full container mx-auto
    flex items-center justify-between

    px-4 py-2
    rounded-full

    bg-white/40
    backdrop-blur-xl
    backdrop-saturate-150

    border border-gray-200/60
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]

    hover:bg-white/60
    transition-all duration-300">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">Tria.</h2>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-1">
            {NavMenus.map((menu) => {
              const isActive = activeSection === menu.key;
              const Icon = navIcons[menu.key];

              return(
                <li key={menu.key}>
                  <a onClick={(e) => {
                    e.preventDefault();
                    handleNavigationalLinkClick(menu)
                  }} className={cn(
                    "inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-800 hover:font-semibold hover:text-pink-500 transition-all ease-in-out duration-75 px-3 py-2 rounded-full",
                    isActive && "text-pink-500 font-semibold underline"
                  )} href={menu.url}>
                    {Icon && <Icon className="size-4" />}
                    {menu.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <a 
            href="/?section=contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigationalLinkClick({
                label: "Contact",
                url: "/?section=contact",
                key: "contact",
              });
            }}
          >
            <Button className="cursor-pointer">Contact Us</Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center justify-center size-10 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 left-0 z-100 lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-white/90 backdrop-blur-2xl border-l border-gray-200/60 shadow-2xl flex flex-col">
            <div className="flex justify-end p-4">
              <button
                className="flex items-center justify-center size-10 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex-1 px-4">
              <ul className="flex flex-col gap-1">
                {NavMenus.map((menu) => {
                  const isActive = activeSection === menu.key;
                  const Icon = navIcons[menu.key];

                  return(
                    <li key={menu.key}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigationalLinkClick(menu);
                        }}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-700 hover:bg-neutral-100 hover:text-pink-500 transition-all duration-200",
                          isActive && "bg-pink-50 text-pink-600 font-semibold"
                        )}
                        href={menu.url}
                      >
                        {Icon && <Icon className="size-5" />}
                        {menu.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-200/60">
              <a
                href="/?section=contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigationalLinkClick({
                    label: "Contact",
                    url: "/?section=contact",
                    key: "contact",
                  });
                }}
                className="w-full"
              >
                <Button className="w-full cursor-pointer">Contact Us</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default Header;
