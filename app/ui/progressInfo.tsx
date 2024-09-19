
interface progressInfoProps{
    title:string;
    barColor: string;
    width: string;
}

export default function ProgressInfo({title, barColor, width}:progressInfoProps){
    return(
        <div>
            <div className="mb-1 text-base font-medium dark:text-white">{title}</div>
                <div className="w-5/6 bg-gray-300 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className={`${barColor} h-2.5 rounded-full ${width}`}></div>
            </div>
        </div>
    );
}