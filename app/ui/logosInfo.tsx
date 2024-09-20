import Image from 'next/image';

export default function LogosInfo(){
    const logos = [
        '/java.svg',
        '/javascript.svg',
        '/aws.svg',
        '/typescript.svg',
        '/tailwindcss.svg',
        '/nodejs.svg',
        '/spring.svg',
        '/python.svg',
        '/vb.png',
        '/csharp.svg',
        '/nextjs_icon_dark.svg',
        '/angular.svg',
        '/react.svg',
        '/robot.png',
        '/Selenium.png',
        '/mongodb-wordmark.svg',
        '/mariadb.svg',
        '/postgresql.svg',
        '/junit5.png', 
        '/mysql.svg',
        '/bootstrap.svg'
    ];

    return(
        <>
            {logos.map((logo, index)=>(
                <Image
                    key={index}
                    src={logo}
                    width={60}
                    height={50}
                    alt=""
                    className='dark:bg-zinc-700/75 rounded-md p-1'
                />
            ))}
        </>
    );

}