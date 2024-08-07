
import Image from 'next/image';
// import {inter,roboto_mono, merienda} from "./lib/fonts";
import { Pyramid } from "./ui/pyramide";
import { CardHoverEffectDemo } from "./ui/CardHover";
import { GoogleGeminiEffectDemo } from "./ui/gemini";

import LampDemo from "./ui/lamp-section";
import { BackgroundGradientDemo } from "./ui/BGCard-gradient";
// import { InfiniteMovingCardsDemo } from "./ui/infinite-moving-card";
import Contact from "./ui/contact";

import localfont from "next/font/local"
import Button from "./ui/button";

import CardServices from "./ui/card-services";
import Navbar from "./ui/Navbar";
import Hero from "./ui/hero";
import Features  from './ui/features';
import { RetroGridDemo } from './ui/motionGrid';
import AnimDevice from './ui/animDevice';
import FunCard from './ui/funCard';
import About from './ui/About';

export default function Page() {
    return(      
      <>
        <section className='bg-white h-[40vh]'>
          {/* <Navbar/> */}
            <Hero/>
        </section>

        <section className=' relative mt-64 bg-black h-[60vh] sm:mt-56 sm:relative md:mt-72'>
          <div className='relative mx-auto max-w-5xl pt-24 sm:pt-44'>
          <div className="text-center ">
            <p className="relative mt-6 text-2xl  text-white whitespace-pre-wrap sm:text-4xl">
            Linguae est la première agence de traduction innovante, entièrement en ligne.
Commandez vos traductions en quelques clics linguae soccupe du reste
pour vous garantir un niveau de qualité irréprochable dans les plus brefs délais.
            </p>
          </div>
          </div>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Features/>
        </section>
        {/* <section className='relative bg-blue-200 h-[60vh]'>
          <div className='space-y-28 py-24   mx-auto'>
             <div className="mx-auto max-w-2xl px-6 lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Nos Services de traduction les mieux adapter a vos besoins
               </p>
             </div>
             <div className='grid max-w-4xl px-14 grid-cols-1 gap-y-9 mx-auto md:flex lg:max-w-[1590px] lg:gap-x-9'> */}
                 {/* <FunCard text={"Traduction des textes pratiques "}/>
                 <FunCard text={"Traduction audiovisuelle (transcription, sous-titrage"}/>
                 <FunCard text={"Localisation (traduction des sites web)"}/>
                 <FunCard text={"Formation sur l'utilisation des logiciels de traduction."}/>
                 <FunCard text={"Formation sur l'utilisation des plateformes de traduction"}/> */}
             {/* </div>
          </div>
        </section> */}
        <section className=' h-[180vh] lg:h-[70vh] md:h-[95vh]'>
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8  2xl:max-w-[1590px]">
              <div className="mx-auto max-w-2xl lg:text-center">
                 <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                   Nos Services de traduction les mieux adapter a vos besoins
                 </p>
              </div>
             <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl 2xl:max-w-[1990px]">
              <dl className="grid max-w-xl grid-cols-1 mx-auto gap-y-10 sm:grid-cols-2 sm:max-w-7xl lg:max-w-7xl lg:grid-cols-3 lg:gap-y-12  2xl:flex">
                 <FunCard text={"Traduction des textes pratiques "}/>
                 <FunCard text={"Traduction audiovisuelle (transcription, sous-titrage"}/>
                 <FunCard text={"Localisation (traduction des sites web)"}/>
                 <FunCard text={"Formation sur l'utilisation des logiciels de traduction."}/>
                 <FunCard text={"Formation sur l'utilisation des plateformes de traduction"}/>
               </dl>
            </div>
            </div>
         </div>
        </section>
        <section className=' mt-[77rem] relative mt-64 bg-black h-[70vh] sm:mt-56 sm:relative md:mt-[40rem] lg:mt-[25rem] 2xl:mt-[10rem]'>
          <Contact/>
        </section>
        <AnimDevice/>
        <section className='bg-black h-56'>
           <footer className='mx-auto'>
               <h1 className='text-4xl text-white text-center pt-24'>Linguae</h1>
           </footer>
        </section>
      </>
    ) 
  }