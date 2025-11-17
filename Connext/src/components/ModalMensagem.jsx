import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SendHorizontal } from "lucide-react"
import { useState } from "react"
import AlertSucesso from "./ui/AlertSucesso"

export default function ModalMensagem() {
    const [showAlert, setShowAlert] = useState(false)

    const handleSubmit = () => {
      setShowAlert(true)
    
      setTimeout(() => {
        setShowAlert(false)
      }, 3000)
    }

    return (
          <DialogContent className="sm:max-w-md">
            {showAlert && (<AlertSucesso titulo={"Sucesso!"} 
                                         mensagem={"Sua mensagem foi enviada com Sucesso."} 
                                         className={"absolute z-10 -top-full animate-in transition-all"}
            />)}
            <DialogHeader>
              <DialogTitle>Entre em contato</DialogTitle>
              <DialogDescription>
                Este usuário receberá uma solicitação de mensagem sua, e poderá aceitar ou recusar.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <form className="flex flex-row gap-2 w-full">
                <Input className=""/>
                <Button type="button" variant="secondary" onClick={handleSubmit}>
                    <SendHorizontal />
                </Button>
              </form>
            </div>
            <DialogFooter className="sm:justify-start"/>
          </DialogContent>
  )
}


