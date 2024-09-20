'use client'

import { projectsData } from "../lib/Data";
import { ProjectInterface } from "../lib/Interface";
import CardProjects from "./CardProject";

export default function Projects(){

    const projects: ProjectInterface[] = projectsData;

    return(
        <div id="projects" className="w-screen h-screen bg-slate-50 dark:bg-zinc-950 p-2 overflow-auto">
            <h1 className="text-center text-3xl font-semibold">Meus Projetos</h1>
            <div className="mt-10">
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index)=>(
                        <CardProjects
                            key={index}
                            title={project.title}
                            description={project.description}
                            imagem={project.imagem}
                            siteLink={project.siteLink}
                            gitLink={project.gitLink}
                            badges={project.badges}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}