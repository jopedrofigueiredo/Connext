import {React, useState} from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

export default function CardPerfil(nome, foto, cargo, skills, id) {
    
    return (
      <div className="w-full flex justify-center px-3 box-border">
        <Card className="w-full max-w-sm" id={null}>
          <CardHeader className="flex-col justify-center">
            <img className="rounded-full w-25 h-25" src="https://img.freepik.com/fotos-gratis/fundo-de-gotas-de-agua_23-2148098971.jpg" alt="Foto Usuário" width="100px" height="100" />
            <CardTitle className="text-center font-bold mb-4">nome</CardTitle>
          </CardHeader>
          <CardContent className="flex-col">
            <h3 className="text-center font-medium mb-3">Cargo</h3>
            <div>
                <label className="font-medium text-lg ">Skills</label>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, consequatur.
                </p>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
          </CardFooter>
        </Card>
      </div>
    )
}
 