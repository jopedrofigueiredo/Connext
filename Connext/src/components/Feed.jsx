import CardPerfil from "./CardPerfil"
import { useState, useEffect } from "react"

export default function Feed() {
    const [perfis, setPerfis] = useState([]);
    
    useEffect(() => {
        fetch("../../public/perfis.json")
            .then(res => res.json())
            .then(data => setPerfis(data))
            .catch(err => console.error("Erro ao carregar os perfis:", err));  
    }, []);

    return (
        <section className="flex justify-center w-max-8xl my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {perfis.map((key) => (
                    <CardPerfil id={key.id}
                                nome={key.nome} 
                                foto={key.foto} 
                                cargo={key.cargo} 
                                skills={key.resumo}
                            />)
                        )
                }
            </div>
        </section>
    )
}