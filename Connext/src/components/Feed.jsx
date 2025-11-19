import { useState, useEffect } from "react"
import ModalPerfil from "./ModalPerfil";
import InputBusca from "./InputBusca";

export default function Feed() {
    const [perfis, setPerfis] = useState([]);
    
    useEffect(() => {
        fetch("/perfis.json")
            .then(res => res.json())
            .then(data => setPerfis(data))
            .catch(err => console.error("Erro ao carregar os perfis:", err));  
    }, []);

    return (
        <section className="flex flex-col items-center my-10">
            <div className="max-w-[1600px] px-3">
                <div className="w-full flex flex-col  items-center lg:gap-3">
                    <h2 className="text-xl xxs:text-2xl xs:text-3xl font-bold sm:text-4xl lg:my-8 text-nowrap">Conheça Outros Profissionais</h2>
                    <InputBusca classname="my-5 p-6 rounded-3xl"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                    {perfis.map((key) => (
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
            </div>
        </section>
    )
}