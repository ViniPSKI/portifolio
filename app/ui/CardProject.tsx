import { Github, Globe } from "lucide-react";
import Image from "next/image";

interface cardProjectsProps{
    title: string;
    description: string;
    siteLink: string;
    gitLink: string;
    imagem: string;
}

export default function CardProjects({title, description, siteLink, gitLink, imagem}: cardProjectsProps){
    return(
        <div className="bg-zinc-300 w-[25%] rounded-md dark:bg-zinc-700 border dark:border-zinc-600 transition duration-500 hover:scale-110">
            <div>
                <Image src={imagem} width={500} height={600} alt="" className="rounded" />
            </div>
            <div className="p-2">
                <div>
                    <h1 className="font-medium text-lg">{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-zinc-500 dark:bg-zinc-500 rounded-2xl max-w-[20%] p-1 flex gap-1">
                        <Image width={25} height={25} src="/java.png" alt="" />
                        <p>Java</p>
                    </div>
                    <div className="bg-zinc-500 dark:bg-zinc-500 rounded-2xl w-[20%] p-1 flex gap-1">
                        <Image width={25} height={25} src="/spring.png" alt="" />
                        <p className="">Spring</p>
                    </div>
                </div>
                <div className="flex gap-5 mt-5 text-center">
                    <a href={siteLink} className="bg-blue-950 p-2 w-20 rounded-md flex"><Globe className="mr-2" /> Site</a>
                    <a href={gitLink} className="bg-orange-700 p-2 w-28 rounded-md flex"><Github className="mr-2"/> GitHub</a>
                </div>
            </div>
        </div>
    );
}