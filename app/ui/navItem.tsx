import { ElementType } from "react";

interface navItemProps{
  icon:ElementType;
  activeSection: string;
  section: String;
}

export default function NavItem({icon:Icon, activeSection:ActiveSection, section: Section}:navItemProps){
    return(
        <div className="flex items-center gap-2">
          <a href={`#${Section}`}>
            <Icon className={ActiveSection === Section ? "w-9 h-9 hover:w-10 hover:h-10 text-blue-500" : "w-9 h-9 hover:w-10 hover:h-10"} />
          </a>
          <div
            className={`hidden lg:block w-1 h-14 mr-2 transition-colors ${
              ActiveSection === Section ? "bg-blue-500" : "bg-zinc-300 dark:bg-zinc-300/30"
            }`}
          ></div>
        </div>
    );
}