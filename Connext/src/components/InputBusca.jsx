import { Input } from "./ui/input";

export default function InputBusca({classname, value, onChange}) {

    return (
        <Input className={classname}
               placeholder="Pesquise por nome, cidade, cargo ou área"
               value={value}
               onChange={onChange}       
        />
    )
}