"use client";
import React from "react";
import { BackgroundGradient } from "../sub-ui/background-gradient";
// import { IconAppWindow } from "abler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div className="w-full">
      <BackgroundGradient className="rounded-[22px] p-2  space-y-2 sm:p-10 lg:p-8 bg-black lg:w-full lg:space-y-14 ">
        <h3 className="lg:text-white lg:text-2xl lg:pl-80 hidden md:block">Cest quoi BPartners??</h3>
        <div className="lg:flex lg:space-x-8 space-y-4">
        <Image
          src={`/siegevert.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain w-full lg:w-[500px]"
        />
       

        <div className="space-y-4">
        
        <p className="text-sm text-white sm:text-justify md:text-lg lg:text-xl lg:text-left sm:text-justify xl:text-2xl xl:pt">B-Partners est un cabinet dintermédiation pluridisciplinaire, spécialisé dans laccompagnement professionnel des promoteurs, organisations et entreprises.
Résolument engagé dans laccompagnement avec pour cheval de bataille la mutualisation des compétences, B-Partners chemine avec vous pour la réalisation de vos objectifs
Le cabinet peut répondre à une demande variée grâce à son réseau de consultants professionnels intervenant dans différents secteurs dactivités
La réflexion stratégique, le marketing, la communication digitale, le design graphique et lintermédiation globale font partie du champ de compétence plurielle de B-Partners </p>
        </div>
        </div>
        
      </BackgroundGradient>
    </div>
  );
}
