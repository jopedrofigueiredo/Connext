import { ToogleTema } from "./ToogleTema";

export default function Header() {
    return (
        <header className="h-35 flex py-10 justify-center border-b shadow-lg">
            <div className="max-w-400 w-full flex justify-center relative">
                <h1 className="text-6xl font-bold text-sky-600">conNext</h1>
                <div className="absolute right-0 px-2 xs:px-10 h-full flex items-center ">
                    <ToogleTema />
                </div>
            </div>
        </header>
    )
}