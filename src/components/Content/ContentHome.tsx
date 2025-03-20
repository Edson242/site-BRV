import { Link } from "react-router-dom";
import Content2 from "./Content2";
import { Bot } from "lucide-react";

export default function ContentHome() {
  let playersInServer: number = 0
  const IP: string = ""
  const PORT: string = ""

  const OpenMTA = () => {
    window.location.href = `mtasa://${IP}:${PORT}`
  }

  return (
    <div>
      <div className="flex justify-center items-center flex-row pt-10">
        <div className="w-full h-96 border rounded-lg text-white flex justify-between items-center bg-zinc-900 bg-gradient-to-r from-zinc-950/35 via-zinc-900/40 to-zinc-950/35 mr-16 ml-16 overflow-hidden">
          <div className="px-10 mt-6 md:-mt-6">
            <img src="../logo_brv.png" alt="logo" width={128} height={80} className="w-28 h-20 mb-5 select-none" />

            <h1 className="text-4xl font-bold uppercase hidden md:inline">brasil realidade virtual</h1>
            <p className="text-base">Conheça o melhor servidor de MTA do momento! Faça amigos e crie sua <br />família ou seja de alguma gang!</p>
            <p className="text-base mt-3">Estamos  com <strong>{playersInServer || 0}</strong> jogadores no servidor.</p>

            <div className="flex flex-row mt-8 gap-5">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 w-fit text-sm border border-zinc-700 bg-zinc-900 hover:bg-zinc-950 hover:cursor-pointer" onClick={() => OpenMTA()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gamepad2 w-5 h-5 mr-2"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
                Jogar Agora!
              </button>
              <Link to={"/store"} className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 w-fit text-sm border border-zinc-700 bg-zinc-900 hover:bg-zinc-950 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart w-5 h-5 mr-2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                Ir à loja!
              </Link>
              <Link to={"https://discord.gg/jU5QVfmszN"} className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 w-fit text-sm border border-zinc-700 bg-zinc-900 hover:bg-zinc-950 hover:cursor-pointer">
                <Bot className="w-5 h-5 mr-2" />
                Discord
              </Link>
            </div>
          </div>
          <img src="./cj-render.jpg" alt="" width={400} height={200} className="hidden md:block pt-20" />
        </div>

      </div>
      <div className="mr-16 ml-16 mt-6">
        <Content2 />
      </div>
    </div>
  );
}