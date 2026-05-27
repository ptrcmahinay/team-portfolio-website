import { NavMenus } from '@/utils/helper'
import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
const Header = () => {
  const [activeSection, setActiveSection] = React.useState("home");

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
      return;
    }

    // other section

    url.searchParams.set("section", menu.key);
    window.history.pushState({}, "", url);

    document.getElementById(menu.key)?.scrollIntoView({behavior : "smooth", block : "start"});

    setActiveSection(menu.key);
  };

  return (
    <header className="sticky top-4 left-0 z-100
  w-full container mx-auto
  flex items-center justify-between

  px-4 py-2 md:py-2
  rounded-full

  bg-white/40
  backdrop-blur-xl
  backdrop-saturate-150

  border border-gray-200/60
  shadow-[0_8px_30px_rgba(0,0,0,0.08)]

  hover:bg-white/60
  transition-all duration-300">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">Tria.</h2>
      <nav className="absolute left-1/2 -translate-x-1/2">
        <ul className="flex items-center gap-6">
          {NavMenus.map((menu) => {
            const isActive = activeSection === menu.key;

            return(
              <li key={menu.key}>
                <a onClick={(e) => {
                  e.preventDefault();
                  handleNavigationalLinkClick(menu)
                }} className={cn("text-neutral-600 hover:text-neutral-800 hover:font-semibold hover:text-pink-500 transition-all ease-in-out duration-75 p-2.5", isActive && "text-pink-500 font-semibold underline")} href={menu.url}>
                  {menu.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

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
        <Button className={"cursor-pointer"}>Contact Us</Button>
      </a>
    </header>
  )
};

export default Header;