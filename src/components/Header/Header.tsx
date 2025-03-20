import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-16 bg-[#18181b] text-white flex flex-row justify-between items-center pl-16 pr-16 text-[14px] border-b-2 border-amber-50">
      <div className="flex flex-row justify-between items-center">
        <Link to={"/"} className="pr-4">
          <img src="logo_brv.png" alt="" width={60} height={60} />
        </Link>
        <ul className="flex flex-row justify-between">
          <li><Link to={"/"} className="hover:bg-[#353535] p-2 rounded-sm">Inicio</Link></li>
          <li><Link to={"/store"} className="hover:bg-[#353535] p-2 rounded-sm">Loja</Link></li>
          <li><Link to={"/brvPoints"} className="hover:bg-[#353535] p-2 rounded-sm">brvPoints</Link></li>
        </ul>
      </div>

      <Link to={"/"} className="hover:bg-[#353535] p-2 rounded-xl flex justify-center items-center">
        <span className="material-symbols-outlined">shopping_cart</span>
      </Link>
    </header>
  );
}