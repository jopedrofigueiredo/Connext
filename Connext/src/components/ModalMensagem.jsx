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
              <DialogTitle></DialogTitle>
              <DialogDescription>
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input/>
                <Button type="button" variant="secondary">
                  <Toggle
                   aria-label="Toggle bookmark"
                   size="sm"
                   variant="outline"
                   className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                  >
                    <SendHorizontal />
                    </Toggle>
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


