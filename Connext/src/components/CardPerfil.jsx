import {React, useState} from "react";
import { Card, CardContent,  CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

export default function CardPerfil({id, nome, foto, cargo, skills}) {
    
    return (
      <div className="w-full flex justify-center px-3 box-border" id={id}>
        <Card className="w-full max-w-sm hover:scale-102 hover:transition duration-150" >
          <CardHeader className="flex-col justify-center justify-items-center">
            <img className="rounded-full w-25 h-25 border-3 border-sky-600" src={foto} alt="Foto Usuário" width="100px" height="100" />
            <CardTitle className="text-center font-bold">{nome}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-5">
            <h3 className="text-center font-bold mb-3 bg-sky-600 w-fit px-5 rounded-2xl">{cargo}</h3>
            <div>
                <p className="darK:text-gray-300">
                  {skills}
                </p>
            </div>
          </CardContent>
            <CardFooter className="flex-col gap-2">
          </CardFooter>
        </Card>
      </div>
    )
}
 