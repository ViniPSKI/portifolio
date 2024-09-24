import { experienciaData, formacaoData } from "../lib/Data";
import { CardInterface } from "../lib/Interface";
import LogosInfo from "./logosInfo";
import ProgressInfo from "./progressInfo";
import SideCard from "./sideCard";
import Image from 'next/image';

export default function About() {
    const formacao: CardInterface[] = formacaoData;
    const experiencia: CardInterface[] = experienciaData;
  
    return (
      <div
        id="about"
        className="mx-auto px-8 sm:px-20 w-screen min-h-screen flex items-center justify-center bg-slate-50 dark:bg-zinc-950 overflow-auto"
      >
        <div className="grid lg:grid-cols-7 p-2 gap-2 w-full">
          <div className="col-span-4">
            <div className="grid grid-cols-4">
              <div className="lg:col-span-1">
                <Image
                  src="/foto-perfil.jpeg"
                  width={250}
                  height={250}
                  alt="Foto de perfil para utilizar no avatar"
                  className="rounded-full hidden lg:block"
                />
              </div>
              <div className="lg:col-span-2 lg:ml-10 col-span-4">
                <p className="text-lg">
                  Comecei a entrar no mundo da tecnologia com 15 anos, aprendendo
                  desde a lógica até a programação em si. Tendo como linguagem
                  matriz Java e desde então buscando evoluir na mesma. Minha
                  carreira profissional com desenvolvimento começou ao criar
                  bibliotecas que auxiliassem na automação de testes, utilizando
                  python e outros frameworks para auxilio. Atualmente atuando como
                  desenvolvedor desktop tendo como base a plataforma microsoft,
                  utilizando .Net, C# e principalmente VB6. Estudando com foco
                  principal em Java e SpringBoot na parte do backend, e no
                  frontend React e Next.
                </p>
                <span>Objetivo Principal: Encontrar uma vaga para desenvolvimento backend Java.</span>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-xl font-semibold mb-3">Principais Habilidades</h1>
              <ProgressInfo title="Backend" barColor="bg-yellow-600" width="w-11/12" />
              <ProgressInfo title="Frontend" barColor="bg-sky-500" width="w-7/12" />
              <h1 className="text-xl font-semibold mb-3 mt-5">Principais Tecnologias</h1>
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
              {formacao.map((form, index) => (
                <SideCard
                  key={index}
                  title={form.title}
                  subTitle={form.subTitle}
                  description={form.description}
                  barColors="bg-purple-900 dark:bg-purple-950 group-hover:bg-purple-700"
                />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold mb-2 mt-10">Experiência Profissional</h1>
              {experiencia.map((xp, index) => (
                <SideCard
                  key={index}
                  title={xp.title}
                  subTitle={xp.subTitle}
                  description={xp.description}
                  barColors="bg-red-900 dark:bg-red-800 group-hover:bg-red-600"
                />
              ))}
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold mb-4">Tecnologias que tenho conhecimento</h1>
              <div className="flex flex-wrap gap-1 lg:max-w-[60%] max-w-full">
                <LogosInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  