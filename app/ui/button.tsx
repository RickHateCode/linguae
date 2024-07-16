export default function Button({className, text}:{className:string; text:string}){
      return(
        <button className={className}>
         <p className="text-sm md:text-xl lg:text-3xl xl:text-4xl 2xl:text-2xl">{text}</p>
        </button> 
      )
}