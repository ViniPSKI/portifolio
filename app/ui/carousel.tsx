import { useState } from "react";
import { ProjectInterface } from "../lib/Interface";
import Image from "next/image";
import Badge from "./badge";
import { ArrowLeftCircle, ArrowRightCircle, Github, Globe } from "lucide-react";
import { Button } from "./Button";

export default function Carousel({projects}:{projects:ProjectInterface[]}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
      };

    return(
        <div className="relative w-full overflow-hidden">
            <div className="bg-slate-200 dark:bg-zinc-900 rounded">
                <div
                    className="flex transition-transform"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {projects.map((item, index) => (
                    <div key={index} className="min-w-full">
                        <div className="flex">
                            <Image width={600} height={150} alt="" src={item.imagem} className="rounded w-full" /> 
                            
                        </div>
                        <div className="p-2">
                            <div>
                                <h1 className="font-medium text-lg">{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                            <div className="flex gap-4 mt-5">
                                {item.badges && item.badges.map((badge, index)=>(
                                    <Badge title={badge.title} icon={badge.icon} key={index}/>
                                ))}
                            </div>
                            <div className="flex gap-5 text-center justify-start items-end mt-5">
                                <a href={item.siteLink} className="bg-blue-800 text-white p-2 w-20 rounded-md flex"><Globe className="mr-2" />Site</a>
                                <a href={item.gitLink} className="bg-orange-700 p-2 w-28 text-white rounded-md flex"><Github className="mr-2"/>GitHub</a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <Button 
                onClick={prevSlide} 
                className="absolute left-1 top-1/3 transform -translate-y-1/2 p-2 cursor-pointer opacity-40"
            >
                <ArrowLeftCircle className="w-7 h-7" />
            </Button>
            <Button 
                onClick={nextSlide} 
                className="absolute right-1 top-1/3 transform -translate-y-1/2 p-2 cursor-pointer opacity-40"
            >
                <ArrowRightCircle className="w-7 h-7" />
            </Button>
            
        </div>
    );
}