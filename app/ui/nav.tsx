import { HomeIcon, FileText, FileCode, NotebookIcon, Moon, Sun } from "lucide-react";
import NavItem from "./navItem";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Nav({ activeSection }: { activeSection: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-0 p-2 lg:bottom-auto lg:top-1/2 lg:right-4 w-full lg:w-auto transform lg:-translate-y-1/2 z-50">
      <div className="p-2 flex flex-row lg:flex-col gap-4 items-center justify-center w-full rounded lg:w-14 dark:lg:bg-transparent lg:bg-transparent bg-slate-200 dark:bg-zinc-800 lg:rounded-xl">
        <div className="relative flex flex-row lg:flex-col justify-evenly lg:justify-center items-center w-full lg:w-auto">
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "dark" ? (
              <Sun className="w-8 h-8 mb-0 lg:mb-8 mr-5" />
            ) : (
              <Moon className="w-8 h-8 mb-0 lg:mb-8 mr-5" />
            )}
          </button>

          <NavItem icon={HomeIcon} activeSection={activeSection} section="home" />
          <NavItem icon={FileText} activeSection={activeSection} section="about" />
          <NavItem icon={FileCode} activeSection={activeSection} section="projects" />
          <NavItem icon={NotebookIcon} activeSection={activeSection} section="contacts" />
        </div>
      </div>
    </div>
  );
}
