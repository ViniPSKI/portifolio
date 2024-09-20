export interface BadgeInterface{
    icon: string;
    title: string;
}

export interface ProjectInterface{
    title: string;
    description: string;
    siteLink: string;
    gitLink: string;
    imagem: string;
    badges: BadgeInterface[];
}

export interface CardInterface{
    title: string;
    subTitle:string;
    description: string;
    barColors: string;
}