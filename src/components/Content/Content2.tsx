export default function Content2() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_400px]">
      <div>
        <div className="text-center border border-dashed border-zinc-700 rounded-lg">
          <div className="p-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-frown w-20 h-20 mx-auto text-zinc-300 mb-4">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" x2="9.01" y1="9" y2="9"></line>
            <line x1="15" x2="15.01" y1="9" y2="9"></line>
          </svg>
            <h1 className="text-3xl font-bold text-zinc-100">Nenhum post encontrado!</h1>
            <p className="text-base text-zinc-300">Em breve, estaremos publicando novos posts...</p>
          </div>
        </div>
      </div>
      <div>
        <iframe src="https://discord.com/widget?id=1223095871646859284&theme=dark" className="w-full h-[500px]">
        </iframe>
      </div>
    </div>
  );
}