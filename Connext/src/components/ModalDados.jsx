import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import CardPerfil from "./CardPerfil"

export default function ModalDados({id, nome, foto, cargo, skills, localizacao, area, habilidadesTecnicas, softSkills, experiencias, formacao, projetos, idiomas, areaInteresses}) {

    return (
    <Dialog>
      <DialogTrigger>
        <CardPerfil id={id} nome={nome} foto={foto} cargo={cargo} skills={skills}/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
)}