import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogAction } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function AlertD() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para mostrar o AlertDialog
  const showAlertDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const dados = ["a", "b", "c", "d", "e", "f", "g"]

  return (
    <div>
      {/* Trigger, que você pode usar em algum outro lugar do seu app */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>

        <AlertDialogContent className="bg-zinc-900 text-white">
          <p className="text-xl font-semibold mb-[-15px]">Informações do Produto</p>
          <p className="text-[12px] ">Saiba tudo o que vem ao comprar esse produto em nosso servidor.</p>
          <Separator className="bg-zinc-700"/>

          <p className="text-sm font-semibold">Descrição: </p>
          {
            dados.map((dado) => {
              return <p className='text-sm mb-[-5px]'>{dado}.</p>
            })
          }

          <div className="flex justify-end space-x-2">
            <AlertDialogAction
              className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-500 hover:cursor-pointer"
              onClick={closeDialog}
            >
              OK
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Botão que chamará a função showAlertDialog */}
      <Button
        className="bg-green-500 text-white rounded-full w-10 h-10 hover:bg-green-600 hover:cursor-pointer"
        onClick={showAlertDialog}
      >
        ?
      </Button>
    </div>
  );
}

export default AlertD;
