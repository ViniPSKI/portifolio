export default function Home(){
    return(
    <div id="home" className="w-screen h-screen bg-slate-50 dark:bg-zinc-950 grid grid-cols-1 content-center">
        <div className="flex justify-center">
          <div className="text-center text-3xl">
            <h1 className="">
              Olá, me chamo Vinicius Potulski
            </h1>
            <h1 className="font-semibold bg-gradient-to-r from-purple-700 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Desenvolvedor FullStack, seja bem-vindo ao meu portifólio.</h1>
          </div>
        </div>
      </div>
    );
}