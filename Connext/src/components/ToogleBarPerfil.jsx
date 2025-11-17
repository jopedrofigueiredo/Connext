import { ThumbsUpIcon, BookmarkIcon, MessageCircleIcon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem, } from "@/components/ui/toggle-group"
import ModalMensagem from "./ModalMensagem"
import { Dialog, DialogTrigger,} from "@/components/ui/dialog"

export default function ToogleBarPerfil() {

    return (
      <Dialog>
        <ToggleGroup type="multiple" variant="outline" spacing={2} size="lg">
          <ToggleGroupItem
            value="ThumbsUp"
            aria-label="toogle Thumbsup"
            className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-black data-[state=on]:*:[svg]:stroke-black"
          >
            <ThumbsUpIcon />
          </ToggleGroupItem>
          <DialogTrigger asChild>
          <ToggleGroupItem
            value="MessageCircle"
            aria-label="Toggle MessageCircle"
          >
            <MessageCircleIcon />  
          </ToggleGroupItem>
          </DialogTrigger>
          <ToggleGroupItem
            value="bookmark"
            aria-label="Toggle bookmark"
            className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
          >
            <BookmarkIcon />  
          </ToggleGroupItem>
        </ToggleGroup>

        <ModalMensagem />

    </Dialog>
    )
}