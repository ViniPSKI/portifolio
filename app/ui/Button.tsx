import { ComponentProps, ElementType } from "react";
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'a'>{
    icon?: ElementType;
}

export function Button({icon:Icon, className, ...props}: ButtonProps){
    return (
        <a className={twMerge('bg-zinc-600 items-center gap-2 text-white h-10 px-2 rounded hover:bg-opacity-85 transition-colors', className)} {...props}>{Icon && <Icon />} {props.children}</a>
    );
}