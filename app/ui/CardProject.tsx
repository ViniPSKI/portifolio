'use client'

import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Badge from "./badge";
import { ProjectInterface } from "../lib/Interface";

export default function CardProjects({title, description, siteLink, gitLink, imagem, badges}: ProjectInterface){
    return(
        <div className="bg-zinc-200 w-[25%] rounded-md dark:bg-zinc-700 border dark:border-zinc-600 transition duration-500 hover:scale-110 flex flex-col justify-between">
            <div>
                <Image src={imagem} width={500} height={600} alt="" className="rounded" />
            </div>
            <div className="p-2">
                <div>
                    <h1 className="font-medium text-lg">{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="flex gap-4 mt-5">
                    {badges && badges.map((badge, index)=>(
                        <Badge title={badge.title} icon={badge.icon} key={index}/>
                    ))}
                </div>
                <div className="flex gap-5 text-center justify-start items-end mt-5">
                    <a href={siteLink} className="bg-blue-800 text-white p-2 w-20 rounded-md flex"><Globe className="mr-2" />Site</a>
                    <a href={gitLink} className="bg-orange-700 p-2 w-28 text-white rounded-md flex"><Github className="mr-2"/>GitHub</a>
                </div>
            </div>
        </div>
    );
}