"use client";
import Image from "next/image";
import Line from "../sub-ui/title-line";
// import { merienda,nunito_sans } from "../lib/fonts";
import { cn } from "../lib/cn";


export default function TitleBpartners({title, className, classNameText}:{title:string; className:string; classNameText:string}){

    return(
       <div className=" mt-12 lg:mt-20">
          <div className="flex">
            <div className="flex-col ml-10">
            <h1 className={cn("text-4xl font-extrabold", classNameText)} >{title}</h1>
            <Line className={cn("bg-green-600", className)}/>
            </div>
          </div>
           
         </div>
       
    )
}