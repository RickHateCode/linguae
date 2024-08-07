"use client";
export default function FunCard({text}:{text:String}){
    return(
        <div className="relative mx-auto 2xl:mx-none">
           <div className="book w-72 h-96">
               <p className="px-8 text-center">{text}</p>
                <div className="cover">
                   <p>Survoler</p>
               </div>
           </div>
        </div>
    )
}