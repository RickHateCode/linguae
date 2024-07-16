"use client";
import { TypewriterEffectSmooth } from "../sub-ui/typewritter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "WELCOME",
    
    },
    {
      text: "TO",
    
    },
  
    {
      text: "BPARTNERS",
      className: "text-blue-400"
    },
    // {
    //   text: "avec",
      
      
    // },
    // {
    //     text: "notre",
    //     className: "text-blue-500 dark:text-blue-500 ",
         
    // },
    // {
    //     text: "expertise",
    //     className: "text-blue-500 dark:text-blue-500",
    // },
    // {
    //     text: "a",
    //     className: "text-blue-500 dark:text-blue-500 ",
    // },
    // {
    //     text: "vos",
    //     className: "text-blue-500 dark:text-blue-500",
    // },
    // {
    //     text: "cotés",
    //     className: "text-blue-500 dark:text-blue-500 ",
    // },

  ];
  return (
    <div className=" absolute flex flex-col items-center  justify-center h-[40rem] mr-12 md:justify-center md:items-center">
     
      <TypewriterEffectSmooth words={words} />
      
     
    </div>
  );
}
