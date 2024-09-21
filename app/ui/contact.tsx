import { Linkedin } from "lucide-react";
import { useState } from "react";
import Alert from "./alert";
import { Button } from "./Button";

export default function Contact(){
    const textSend = "Olá, vim através do seu portifólio.";
    const [showAlert, setShowAlert] = useState(false);

    const triggerAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
        setShowAlert(false);
        }, 3000);
    };

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText('viniciuscanesso@outlook.com');
        triggerAlert();
      };

    return(
        <div id="contacts" className="w-screen h-screen bg-slate-50 dark:bg-zinc-950 grid content-center">
                <div className="flex justify-center">
                    <div className="justify-center">
                        <h1 className="text-2xl font-semibold">Entre em contato</h1>
                        <p className="font-light">Entre em contato, será um prazer conversar com você!</p>
                        <div className="grid gap-1">
                            <Button 
                                href={`https://wa.me/5546999739949?text=${textSend}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-2 rounded text-center bg-emerald-600">Whatsapp</Button>

                            <Button 
                                onClick={copyToClipboard} 
                                className="p-2 rounded bg-indigo-900 text-white cursor-pointer text-center">Copiar e-mail</Button>
                            {showAlert && <Alert message="E-mail copiado com sucesso!" />}

                            <Button 
                            href="https://www.linkedin.com/in/vinicius-potulski-2b9517213/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2 rounded text-center bg-blue-500 text-white">Linkedin</Button>
                            
                        </div>
                        <p className="font-light">Ou descubra em quais outros projetos estou trabalhando!</p>
                        <a href="https://github.com/ViniPSKI" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-amber-700 text-white">GitHub</a>
                    </div>
                </div>
        </div>
    );
}   