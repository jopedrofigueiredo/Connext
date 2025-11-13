import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import CardPerfil from "./CardPerfil"
import DadosModal from "./DadosModal"

export default function ModalPerfil({id, nome, foto, cargo, skills, localizacao, area, habilidadesTecnicas, softSkills, experiencias, formacao, projetos, idiomas, areaInteresses}) {

    return (
    <Dialog>
      <DialogTrigger>
        <CardPerfil id={id} nome={nome} foto={foto} cargo={cargo} skills={skills}/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mt-3 flex-col">
          <img className="rounded-full w-25 h-25"src="https://img.freepik.com/fotos-gratis/fundo-texturizado-abstrato_1258-30461.jpg" alt="Foto Usuário" />
          <DialogTitle>{nome}</DialogTitle>
          <h2 className="font-medium">{cargo}</h2>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>

        <DadosModal localizacao={localizacao}
                    area={area}
                    habilidadesTecnicas={habilidadesTecnicas}
                    softSkills={softSkills}
                    experiencias={experiencias}
                    formacao={formacao}
                    projetos={projetos}
                    idiomas={idiomas}
                    areaInteresses={areaInteresses}
        />

      </DialogContent>
    </Dialog>
)}