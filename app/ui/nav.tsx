import { HomeIcon, FileText, FileCode, NotebookIcon, Moon, Sun } from "lucide-react";
import NavItem from "./navItem";
import { useTheme } from "next-themes";

export default function Nav({activeSection}:{activeSection:string}){
    const { theme, setTheme } = useTheme();

    return(
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2">
        <div className="p-2 flex flex-col gap-4 items-center w-14 rounded-xl">
          <div className="relative flex flex-col items-center">
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme == "dark" ? <Sun className="w-8 h-8 gap-2 mr-5 mb-8" /> : <Moon className="w-8 h-8 gap-2 mr-5 mb-8" />}
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