import { twMerge } from 'tailwind-merge';
import { CardInterface } from '../lib/Interface';

export default function SideCard({title, description, subTitle, barColors}:CardInterface){
    return(
        <div className="group flex flex-1 transition duration-500 hover:scale-110 max-w-screen-sm">
            <div className={twMerge(`w-1 h-14 mr-2 transition-colors`, barColors)}></div>
            <div>
                <h1 className="font-semibold text-lg">{title}</h1>
                <h2 className="font-light text-sm">{subTitle}</h2>
                <p className="hidden group-hover:block">{description}</p>
            </div>
        </div>
    );
}