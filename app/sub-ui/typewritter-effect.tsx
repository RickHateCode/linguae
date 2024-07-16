"use client";

import { cn } from "../lib/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);
  
  //render words
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-2xl sm:text-xl md:text-3xl lg:text-7xl 2xl:text-9xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div className="md:space-x-4 space-x-2 2xl:space-x-10">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(` text-sm  min-[430px]:text-3xl min-[411px]:text-[29px] min-[353px]:text-[24px]  min-[393px]:text-[27px]  min-[320px]:text-[22px] min-[360px]:text-[25px] min-[540px]:text-4xl md:text-5xl min-[820px]:text-[54px] min-[712px]:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-extrabold text-white `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex-col  my-2 ml-1 max-[393px]:ml-3 min-[540px]:ml-10 md:mt-[400px] md:ml-14 min-[820px]:ml-4 min-[712px]:mt-[250px] lg:ml-8 lg:mt-[600px] xl:mt-[120px] xl:ml-36 2xl:mt-[400px] 2xl:ml-16", className)}>
      <motion.div
        className="overflow-hidden pb-2 "
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <article className="mx-1 text-wrap"
          style={{
            whiteSpace: "nowrap",
          }}>
          {renderWords()}{""}
        </article>
        {/* <div
          className="mx-1 text-"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "} */}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "loop",
        }}
        // className={cn(
        //   "block rounded-sm w-[3px]  md:h-20 bg-blue-500",
        //   cursorClassName
        // )}
      ></motion.span>
    </div>
  );
};
