'use client'

import CardProjects from "./CardProject";

export default function Projects(){
    return(
        <div id="projects" className="w-screen h-screen bg-slate-50 dark:bg-zinc-950 p-2 overflow-auto">
            <h1 className="text-center text-3xl font-semibold">Meus Projetos</h1>
            <div className="mt-10">
                <div className="flex flex-wrap justify-center gap-8">
                    <CardProjects
                        title="API de gerênciamento de tarefas"
                        description="API que faz o controle e gerênciamento de tarefas, permitindo o usuário criar artefatos para as tarefas e atribui-lás a outros usuários."
                        imagem="/teste.png"
                        siteLink=""
                        gitLink=""
                    />
                    <CardProjects
                        title="Teste 12"
                        description=" teste 34"
                        imagem="/teste.png"
                        siteLink=""
                        gitLink=""
                    />
                    <CardProjects
                        title="Teste 12"
                        description=" teste 34"
                        imagem="/teste.png"
                        siteLink=""
                        gitLink=""
                    />
                    <CardProjects
                        title="Teste 12"
                        description=" teste 34"
                        imagem="/teste.png"
                        siteLink=""
                        gitLink=""
                    />
                    <CardProjects
                        title="Teste 12"
                        description=" teste 34"
                        imagem="/teste.png"
                        siteLink=""
                        gitLink=""
                    />
                    <CardProjects
                        title="Teste 12"
                        description=" teste 34"
                        imagem="/teste.png"
                        siteLink=""
                        gitLink=""
                    />
                </div>
            </div>
        </div>
    );
}