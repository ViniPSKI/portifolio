'use client'

import Image from "next/image";
import { BadgeInterface } from "../lib/Interface";

export default function Badge({...props}: BadgeInterface){
    return(
        <div className="bg-zinc-100 dark:bg-zinc-500 rounded-xl p-1 flex gap-1">
            <Image width={25} height={25} src={props.icon} alt="" />
            <p className="flex mr-2">{props.title}</p>
        </div>
    );
}