import { Navbar } from "./ui/Navbar";
import Image from 'next/image';
import {inter,roboto_mono, merienda} from "./lib/fonts";
import { Pyramid } from "./ui/pyramide";
import { CardHoverEffectDemo } from "./ui/CardHover";
import { GoogleGeminiEffectDemo } from "./ui/gemini";
import TitleBpartners from "./ui/titleBp";
import LampDemo from "./ui/lamp-section";
import { BackgroundGradientDemo } from "./ui/BGCard-gradient";
import { InfiniteMovingCardsDemo } from "./ui/infinite-moving-card";
import Contact from "./ui/contact";
import TypewriterEffectSmoothDemo from "./ui/typewritter";
import localfont from "next/font/local"
import Button from "./ui/button";
import Line from "./sub-ui/title-line";
import CardServices from "./ui/card-services";

export default function Page() {
    return(      
      <>
        <section className="conatiner mx-auto bg-cover bg-center h-screen  flex-col md:bg-cover md:bg-center md:height md:flex-col " style={{backgroundImage: `url('/black.png')`, backgroundSize: 'cover',
        objectFit: 'cover',}}>
        <div className="absolute inset-0  bg-gradient-to-r from-neutral-950 to-stone-950 opacity-70 h-screen hover:bg-gradient-to-l" />
        <div className="container mx-auto h-96">
        <div className=" absolute flex justify-between container mx-auto">
         <div className="min-width-20 min-h-24 md:min-w-60 mmin-h-20 ">
            <Image
           src="/logo bpartenregtb.png"
            width={240}
            height={70}
            alt=""
            className=""
            />
          </div>
          <div className="hidden md:block mr-6">
            <Navbar/>
          </div>
        </div>
         <div className="flex-col">
         <TypewriterEffectSmoothDemo />
          <Line className="bg-green-500 justify-center item-center absolute mt-[340px] mx-24 w-44 min-[320px]:mx-[70px] min-[393px]:mx-[110px] min-[353px]:mx-[97px] min-[375px]:mx-[110px] min-[411px]:mx-[126px] min-[344px]:mx-[92px] min-[540px]:w-[300px] md:mt-[550px] min-[712px]:mt-[475px] min-[712px]:mx-120px] lg:mt-[668px] lg:mx-[180px] xl:mt-[430px] xl:mx-[340px] 2xl:mt-[580px] 2xl:w-[800px]"/>
          <Button text="viens on cause " className="bg-green-600  mt-96 mx-16 w-60 rounded-full hover:bg-blue-600 py-2 min-[320px]:mx-10 min-[375px]:mx-20 min-[414px]:mx-24 min-[430px]:mt-96 min-[411px]:ml-24 min-[540px]:mx-40 min-[360px]:mx-16 min-[344px]:mx-16 md:w-96 md:mx-48 md:mt-[600px] min-[712px]:mt-[530px] min-[712px]:mx-52 min-[820px]:mx-52 min-[853px]:mx-48 lg:mt-[750px] lg:w-[540px] lg:mx-64   xl:mx-[400px] xl:mt-[500px] 2xl:mx-[450px] 2xl:w-[600px] 2xl:mt-[660px] absolute "/>
         </div>
        </div>
        <div className="absolute  mt-40  2xl:mt-[650px] 2xl:container 2xl:ml-60  md:mt-[450px] md:absolute md:mx-4  md:flex md:item-center min-[820px]:mt-[590px] lg:mt-[800px]  min-[912px]:mt-[800px] min-[853px]:mt-[700px] min-[712px]:mt-[400px] xl:mt-[250px]"> 
           <CardHoverEffectDemo/>
        </div>
        </section>
        <section className="min-h-svh bg-black">
          <div className="flex-col">
            <div className="md:pt-64 ">
              <GoogleGeminiEffectDemo/>
            </div>  
            <div>
              <p>lets walk together</p>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <InfiniteMovingCardsDemo/>
        </section>
        {/* <section className="container mx-auto ">
          <TitleBpartners src="/profil.png" title="Qui Sommes nous?"/>
          <div className="pt-10  mx-4 space-y-9 sm:text-lg sm:mt-10  sm:space-y-8  xl:flex xl:space-x-8">
          <div className=" xl:mb-4">
           <Image
           src="/siegevert.png"
            width={500}
            height={100}
            alt=""
            className="w-full rounded-2xl sm:min-w-full sm:rounded-2xl md:rounded-2xl xl:min-w-[500px] xl:min-h-full xl:shrink-0 xl:rounded-2xl"
            />
           </div>
           <div className="xl:mt-0">
           <p className="text-justify sm:text-justify md:text-lg lg:text-2xl sm:text-justify xl:text-2xl xl:pt">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me.
              I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist. So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me.
              I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
           </div>
          </div>
        </section> */}
        <section className="bg-white container mx-auto h-auto 2xl:h-screen">
          <div className="space-y-28 2xl:space-y-40">
          <div className="space-y-8 2xl:mx-44">
            <TitleBpartners title="A-Propos?" className="w-72  min-[320px]:w-60 min-[393px]:w-80 min-[390px]:w-[310px] min-[353px]:w-[280px] min-[375px]:w-[295px]  min-[430px]:w-[350px] min-[344px]:w-[270px] min-[540px]:w-[450px]  min-[912px]:w-[640px] md:w-[600px] md:mx-[40px] min-[712px]:w-[580px] lg:w-[750px] lg:mx-20 xl:w-[1000px]" classNameText="mx-12 min-[320px]:mx-10  min-[390px]:mx-20 min-[353px]:mx-14 min-[375px]:mx-16 min-[430px]:mx-24 min-[344px]:mx-14 min-[540px]:mx-36 font-extrabold md:text-5xl min-[912px]:mx-56 md:mx-[230px] min-[712px]:mx-[210px] lg:mx-[340px] xl:mx-[450px]"/>
            <p className="text-center text-lg min-[540px]:mx-28 min-[540px]:text-lg md:text-2xl sm:text-2xl xl:text-2xl xl:mr-68">decouvrez notre histoir et nos valeurs  </p>
          </div>
           <div className=" mx-5 space-y-8 xl:flex xl:space-x-0 xl:pb-28 xl:mx-0 xl:ml-24 2xl:pb-0">
           <div className="md:mx-20 sm:mx-20 lg:mx-32 xl:mx-0 ">
           <Image
          src={`/siegevert.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain w-full sm:w-[600px] md:w-[600px] lg:w-[700px] xl:w-[5000px] 2xl:w-[6000px]"
        />
           </div>
          <div className=" pb-8 lg:px-10 xl:px-14 2xl:pt-2 space-y-28 ">
          <p className="text-sm text-black text-center  text-xl sm:text-center md:text-2xl  lg:text-2xl lg:text-center  xl:text-2xl  xl:text-left">B-Partners est un cabinet d’intermédiation pluridisciplinaire, spécialisé dans l’accompagnement professionnel des promoteurs, organisations et entreprises.
Résolument engagé dans l’accompagnement avec pour cheval de bataille la mutualisation des compétences, B-Partners chemine avec vous pour la réalisation de vos objectifs
Le cabinet peut répondre à une demande variée grâce à son réseau de consultants professionnels intervenant dans différents secteurs d’activités
La réflexion stratégique, le marketing, la communication digitale, le design graphique et l’intermédiation globale font partie du champ de compétence plurielle de B-Partners </p>
           {/* <Button text="Rejoignez nous" className="bg-green-500 rounded-full p-2 w-80 mx-40 hover:bg-blue-500"/> */}
          </div>
           </div>
          </div>
        </section>
        <section className="bg-cyan-100  h-auto w-screen 2xl:h-screen">
          <div className="py-8 space-y-10 container mx-auto 2xl:space-y-28">
          <div className="space-y-8 2xl:mx-44">
            <TitleBpartners title="Nos Services" className="w-72  min-[320px]:w-60 min-[393px]:w-80 min-[390px]:w-[310px] min-[353px]:w-[280px] min-[375px]:w-[295px] min-[430px]:w-[350px] min-[344px]:w-[270px] min-[540px]:w-[450px]  min-[912px]:w-[640px] md:mx-[40px] md:w-[600px] min-[712px]:w-[580px] lg:w-[750px] lg:mx-20 xl:w-[1000px]" classNameText="mx-7 min-[320px]:mx-4 min-[390px]:mx-14 min-[353px]:mx-8 min-[375px]:mx-9 min-[430px]:mx-20 min-[344px]:mx-8 min-[540px]:mx-32  md:text-5xl  min-[912px]:mx-52 md:mx-[200px] min-[712px]:mx-[190px] lg:mx-[320px] xl:mx-[430px]"/>
            <p className="text-center  text-lg min-[393px]:mx-4 min-[390px]:mx-6 min-[540px]:text-lg md:text-2xl min-[712px]:mx-10 sm:text-2xl">decouvrez nos service adaptez a votre niveaux financier </p>
          </div>
           <div className="space-y-8 mx-8 py-8  min-[360px]:mx-[22px]  min-[375px]:mx-[26px]  min-[320px]:mx-[30px] min-[390px]:mx-[35px] min-[411px]:mx-[27px] min-[430px]:mx-[38px] min-[540px]:mx-[45px] min-[912px]:mx-1 min-[820px]:mx-20 md:mx-[90px] min-[712px]:mx-[35px] lg:mx-28 xl:flex  xl:space-x-8 xl:mx- xl:space-y-0">
           <CardServices/>
           <CardServices/>
           <CardServices/>
           </div>
          </div>
        </section>
        <section>
           <LampDemo/>
        </section>
        <section>
           <Contact/>
        </section>
      </>
    ) 
  }