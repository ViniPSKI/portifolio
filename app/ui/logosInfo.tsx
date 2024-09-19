import Image from 'next/image';

export default function LogosInfo(){
    const logos = [
        '/java.png',
        '/js.png',
        '/aws.png',
        '/ts.png',
        '/twl.png',
        '/node.png',
        '/spring.png',
        '/py.png',
        '/vb.png',
        '/charp.png',
        '/nextjs.png',
        '/Angular.png',
        '/React.png',
        '/robot.png',
        '/Selenium.png',
        '/mongo.png',
        '/mariaDB.png',
        '/pg.png',
        '/junit5.png'
    ];

    return(
        <>
            {logos.map((logo, index)=>(
                <Image
                    key={index}
                    src={logo}
                    width={60}
                    height={60}
                    alt=""
                    className='dark:bg-zinc-700/75 rounded-md p-1'
                />
            ))}
        </>
    );

}