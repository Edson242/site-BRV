import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <img src="B_V.png" alt="" className="w-full h-full bg-transparent" />
      <div className="flex justify-center flex-col items-center absolute">
        <h1>404</h1>
        <p>Página não encontrada!</p>
        <Link to={"/"}>
          <span className="material-symbols-outlined">home</span>
        </Link>
      </div>
    </div>
  );
}