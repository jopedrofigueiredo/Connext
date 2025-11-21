import { useState, useEffect } from "react"
import ModalPerfil from "./ModalPerfil";
import InputBusca from "./InputBusca";
import MsgSemResultado from "./MsgSemResultado";

export default function Feed() {
    const [perfis, setPerfis] = useState([]);
    const [perfisFiltrados, setPerfisFiltrados] = useState([])
    const [busca, setBusca] = useState("")
    
    useEffect(() => {
        fetch("/perfis.json")
            .then(res => res.json())
            .then(data => setPerfis(data))
            .catch(err => console.error("Erro ao carregar os perfis:", err));  
    }, []);

    useEffect(() => {
        setPerfisFiltrados(perfis)
    }, [perfis])

    
    useEffect(() => {
    const filtrados = perfis.filter((p) => 
        p.nome.toLowerCase().includes(busca.toLowerCase()) ||
        p.cargo.toLowerCase().includes(busca.toLowerCase()) ||
        p.localizacao.toLowerCase().includes(busca.toLowerCase()) ||
        p.area.toLowerCase().includes(busca.toLowerCase())
       )
       setPerfisFiltrados(filtrados)
    }, [busca])

    return (
        <section className="flex flex-col items-center my-10 min-h-screen">
            <div className="max-w-[1600px] px-3">
                <div className="w-full flex flex-col  items-center lg:gap-3">
                    <h2 className="text-xl xxs:text-2xl xs:text-3xl font-bold sm:text-4xl lg:my-8 text-nowrap">Descubra Outros Profissionais</h2>
                    <InputBusca classname="my-5 p-6 rounded-3xl border-gray-300 border-3 input-focusSky transition-colors" 
                                value={busca} 
                                onChange={(e) => setBusca(e.target.value)}/>
                </div>
                {perfisFiltrados.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                        {perfisFiltrados.map((key) => (
                            <ModalPerfil id={key.id}
                                         nome={key.nome} 
                                         foto={key.foto} 
                                         cargo={key.cargo} 
                                         skills={key.resumo}
                                         localizacao={key.localizacao}
                                         area={key.area}
                                         habilidadesTecnicas={key.habilidadesTecnicas}
                                         softSkills={key.softSkills}
                                         experiencias={key.experiencias}
                                         formacao={key.formacao}
                                         projetos={key.projetos}
                                         certificacoes={key.certificacoes}
                                         idiomas={key.idiomas}
                                         areaInteresses={key.areaInteresses}
                                    />
                            ))}
                        </div>
                    ) : (
                        <MsgSemResultado />
                )}
            </div>
        </section>
    )
}