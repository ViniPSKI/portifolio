import LogosInfo from "./logosInfo";
import ProgressInfo from "./progressInfo";
import SideCard from "./sideCard";
import Image from 'next/image';

export default function About(){
    return(
    <div id="about" className="w-screen h-screen bg-slate-100 dark:bg-zinc-900 grid content-center">
        <div className="grid grid-cols-7 p-2 ml-10">
            <div className="col-span-4">
                <div className="grid grid-cols-4">
                    <div className="col-span-1">
                        <Image
                            src="/foto-perfil.jpeg"
                            width={250}
                            height={250}
                            alt="Foto de perfil para utilizar no avatar"
                            className="rounded-full"
                        />
                    </div>
                    <div className="col-span-2 ml-10">
                        <p className="text-lg">
                            Comecei a entrar no mundo da tecnologia com 15 anos, aprendendo desde a lógica até a programação em si. Tendo como linguagem matriz Java e desde então buscando evoluir na mesma.
                            Minha carreira profissional com desenvolvimento começou ao criar bibliotecas que auxiliassem na automação de testes, utilizando python e outros frameworks para auxilio.
                            Atualmente atuando como desenvolvedor desktop tendo como base a plataforma microsoft, utilizando .Net, C# e principalmente VB6.
                            Estudando com foco principal em Java e SpringBoot na parte do backend, e no frontend React e Next.
                        </p>
                        <span className="">Objetivo Principal: Encontrar uma vaga para desenvolvimento backend Java.</span>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="text-xl font-semibold mb-3">Principais Habilidades</h1>
                    <ProgressInfo title="Backend" barColor="bg-yellow-600" width="w-11/12" />
                    <ProgressInfo title="Frontend" barColor="bg-sky-500" width="w-7/12" />

                    <h1 className="text-xl font-semibold mb-3 mt-5">Principais Técnologias</h1>
                    <ProgressInfo title="Java" barColor="bg-red-600" width="w-10/12" />
                    <ProgressInfo title="SpringBoot" barColor="bg-emerald-600" width="w-9/12" />
                    <ProgressInfo title="Angular" barColor="bg-gradient-to-r from-orange-700 to-purple-700" width="w-6/12" />
                    <ProgressInfo title="AWS" barColor="bg-yellow-500" width="w-1/12" />
                    <ProgressInfo title="React" barColor="bg-sky-600" width="w-8/12" />
                    <ProgressInfo title="Next.js" barColor="dark:bg-zinc-300 bg-zinc-700" width="w-8/12" />
                </div>
            </div>
            <div className="col-span-3 flex flex-col gap-4 p-2">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold mb-2">Minha formação acadêmica</h1>
                    <SideCard 
                        title="Instituto Federal do Paraná - IFPR" 
                        subTitle="Técnico em Informática - 2022" 
                        description="Curso técnico focado em programação, tendo participado de eventos como latinoware e de várias OBI" 
                        barColors="bg-purple-900 dark:bg-purple-950 group-hover:bg-purple-700" />

                    <SideCard 
                        title="Universidade Tecnológica Federal do Paraná - UTFPR" 
                        subTitle="Bacharelado em Engenharia de Software - 2025" 
                        description="Bacharel em Engenharia de software, ainda cursando. Estando envolvido nas atividades academicas, principalmente como vice presidente do centro acadêmico do curso"
                        barColors="bg-purple-900 dark:bg-purple-950 group-hover:bg-purple-700" />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold mb-2 mt-10">Experiência Profissional</h1>
                    <SideCard 
                        title="Visual Software" 
                        subTitle="Analista de Qualidade de 2021 a 2022" 
                        description="Atuando como analista de qualidade focado em identificação e detalhamentos de falhas originárias do produto em produção. Atuando com auxilio do TestLink."
                        barColors="bg-red-900 dark:bg-red-800 group-hover:bg-red-600" />

                    <SideCard 
                        title="Visual Software" 
                        subTitle="Analista de Automação de Testes de 2022 a 2023" 
                        description="Responsável pelo projeto de automação de software, utilizando robot juntamente com bibliotecas em python escritas especificamente para o programa. Atuando também no controle das tarefas utilizando o Jira e versionamento com GitLab."
                        barColors="bg-red-900 dark:bg-red-800 group-hover:bg-red-600" />

                    <SideCard 
                        title="Visual Software" 
                        subTitle="Desenvolvedor Desktop 2024 - Atual" 
                        description="Desenvolvedor desktop, utilizando voltadas ao ambiente microsoft, como .Net, C# e principalmente VB6. No mesmo período atuando também como importador de base de dados, mantendo e criando novos importadores para diversos os mais diversos tipos de SGBDS (Firebird, Postgres, SqlServer, MariaDB, Oracle)."
                        barColors="bg-red-900 dark:bg-red-800 group-hover:bg-red-600" />
                </div>
                <div className="mt-4">
                    <h1 className="text-xl font-semibold mb-4">Técnologias que tenho conhecimento</h1>
                    <div className="flex flex-wrap gap-3 max-w-[60%]">
                            <LogosInfo />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}