import { Input } from "./ui/input";

export default function InputBusca({classname}) {

    return (
        <Input className={classname}
               placeholder="Pesquise por nome, cidade ou área"       
        />
    )
}