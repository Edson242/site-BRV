import { toast } from "sonner";
import { CardContent, CardFooter, CardHeader } from "../ui/card";
import AlertD from "../Alert/Alert";

interface ICardProps {
  Title: String
  Valor: Number
  Help: string[]
  ID: Number
  Img: String
}

export default function Card({ Img, Help, ID, Title, Valor }: ICardProps) {

  const addItem = (id: Number, product: String, valor: Number) => {
    toast.success(`Produto ${product.toUpperCase()}(${id}) - R$ ${valor},00 adicionado com sucesso ao carrinho!`, { position: "top-center", style: { backgroundColor: "green" } })
  }

  return (
    <div className="rounded-md bg-zinc-900 border border-zinc-700 w-full max-w-[235px] p-4">
      <CardHeader>
        <img src={`${Img || ""}`} alt="" className="rounded-md" />
      </CardHeader>
      <CardContent>
        <img src="" alt="" />
        <p className="text-xl font-bold uppercase">{Title}</p>
        <p className="text-sm text-gray-400 pt-2">por apenas</p>
        <p className="text-2xl font-bold uppercase pb-3">R$ {Valor.toString()},00</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center gap-2">
          <button onClick={() => addItem(ID, Title, Valor)} className="rounded-md border border-zinc-700 w-full p-4 h-10 hover:cursor-pointer flex justify-center items-center bg-green-400 hover:bg-green-500">Adicionar</button>
          {/* <button onClick={() => question(Help)} className="rounded-md border border-zinc-700 w-full p-4 h-10 hover:cursor-pointer flex justify-center items-center hover:bg-gray-500">?</button> */}
          <AlertD help={Help}/>
        </div>
      </CardFooter>
    </div>
  );
}