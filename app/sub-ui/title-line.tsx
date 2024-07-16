'use client'
import react, { useEffect } from "react";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "../lib/cn";

export default function Line({className}: {className:string}) {

    useEffect(() => {
      // start animation
      return () => {}; // clean up 
    }, []);
  
    return <div className={cn("line mt-2 h-1 pr-20 w-64 -w-64 sm:w-96 sm:mt-1 md:w-[500px] lg:mt-5 lg:w-[670px]", className)}/>
  } 