import { CardInterface, ProjectInterface } from "./Interface";

export const projectsData: ProjectInterface[]= [
    {
        title: "API de gerênciamento de tarefas",
        description: "API que faz o controle e gerênciamento de tarefas, permitindo o usuário criar artefatos para as tarefas e atribui-lás a outros usuários.",
        siteLink: "",
        gitLink: "",
        imagem: "/teste.png",
        badges:[
            {
                title: "Spring",
                icon: "/spring.svg"
            },
            {
                title: "Java",
                icon: "/java.svg"
            }
        ]
    },
    {
        title: "Previsão do Tempo",
        description: "Site que exibe a previsão do tempo de acordo com a cidade escolhida pelo usuário. Utiliza a API OpenWelht para a busca dos dados, exibindo a previsão atual e dos próximos 5 dias.",
        siteLink: "https://my-weather-hazel-beta.vercel.app/",
        gitLink: "https://github.com/ViniPSKI/my-weather",
        imagem: "/my-weather.png",
        badges:[
            {
                title: "Next.js",
                icon: "/nextjs_icon_dark.svg"
            },
            {
                title: "Tailwind",
                icon: "/tailwindcss.svg"
            }
        ]
    }
];

export const formacaoData: CardInterface[] = [
    {
        title:"Instituto Federal do Paraná - IFPR",
        subTitle:"Técnico em Informática - 2022", 
        description:"Curso técnico focado em programação, tendo participado de eventos como latinoware e de várias OBI", 
        barColors:""
    },
    {
        title:"Universidade Tecnológica Federal do Paraná - UTFPR",
        subTitle:"Bacharelado em Engenharia de Software - 2025", 
        description:"Bacharel em Engenharia de software, ainda cursando. Estando envolvido nas atividades academicas, principalmente como vice presidente do centro acadêmico do curso",
        barColors:""
    }
];

export const experienciaData: CardInterface[] = [
    {
        title:"Visual Software",
        subTitle:"Analista de Qualidade de 2021 a 2022", 
        description:"Atuando como analista de qualidade focado em identificação e detalhamentos de falhas originárias do produto em produção. Atuando com auxilio do TestLink", 
        barColors:""
    },
    {
        title:"Visual Software",
        subTitle:"Analista de Automação de Testes de 2022 a 2023", 
        description:"Responsável pelo projeto de automação de software, utilizando robot juntamente com bibliotecas em python escritas especificamente para o programa. Atuando também no controle das tarefas utilizando o Jira e versionamento com GitLab.", 
        barColors:""
    },
    {
        title:"Visual Software",
        subTitle:"Desenvolvedor Desktop 2024 - Atua", 
        description:"Desenvolvedor desktop, utilizando voltadas ao ambiente microsoft, como .Net, C# e principalmente VB6. No mesmo período atuando também como importador de base de dados, mantendo e criando novos importadores para diversos os mais diversos tipos de SGBDS (Firebird, Postgres, SqlServer, MariaDB, Oracle).", 
        barColors:""
    }
];