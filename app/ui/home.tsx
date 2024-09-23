import { Phone } from "lucide-react";
import { Button } from "./Button";

export default function Home(){
    return(
    <div id="home" className="mx-auto px-8 sm:px-20 h-screen min-h-[100vh] bg-slate-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="flex justify-center">
          <div className="text-3xl">
            <h1 className="">
              Olá, me chamo Vinicius Potulski
            </h1>
            <h1 className="font-semibold bg-gradient-to-r from-purple-700 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Desenvolvedor FullStack, seja bem-vindo ao meu portifólio.</h1>
            <Button href="#contacts" className="bg-purple-950 p-2 flex max-w-max" icon={Phone}>Contatos</Button>
          </div>
        </div>
      </div>
    );
}