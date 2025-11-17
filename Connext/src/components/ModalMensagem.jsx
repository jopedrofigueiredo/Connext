import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Label } from "@radix-ui/react-label"
import { SendHorizontal } from "lucide-react"
import { Toggle } from "./ui/toggle"

export default function ModalMensagem() {

    return (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Entre em contato</DialogTitle>
              <DialogDescription>
                Este usuário receberá uma solicitação de mensagem sua, e poderá aceitar ou recusar.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <div className="flex flex-row gap-2 w-full">
                <Input className=" "/>
                <Button type="button" variant="secondary">
                    <SendHorizontal />
                </Button>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                
              </DialogClose>
            </DialogFooter>
          </DialogContent>
  )
}


