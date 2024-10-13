import React, {useEffect, useState} from "react";
import {MotionValue, motion} from "framer-motion";

const LETTER_DELAY = 0.025;

const BOX_FADE_DURATION = 0.125;


const FADE_DELAY = 5;

const MAIN_FADE_DURATION = 0.25;


const SWAP_DELAY_IN_MS = 5500;

// @ts-ignore
export default function BlockInTextCard({tag, text, examples}) {

    return (

        <div className="w-full max-w-xl space-y-6">

            <div>

                <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>


            </div>

            <p className="max-w-lg text-xl leading-relaxed">{text}</p>

            <div>

                <Typewrite examples={examples}/>

            </div>

        </div>

    );

};

// @ts-ignore
const Typewrite = ({examples}) => {

    const [exampleIndex, setExampleIndex] = useState(0);


    useEffect(() => {

        const intervalId = setInterval(() => {

            setExampleIndex((pv) => (pv + 1) % examples.length);

        }, SWAP_DELAY_IN_MS);


        return () => clearInterval(intervalId);

    }, []);


    return (

        <p className="mb-2.5 text-sm font-light uppercase text-green-400">


            GONK:{" "}

            {examples[exampleIndex].split("").map((l: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | MotionValue<string> | MotionValue<number> | null | undefined, i: number) => (

                <motion.span

                    initial={{

                        opacity: 1,

                    }}

                    animate={{

                        opacity: 0,

                    }}

                    transition={{

                        delay: FADE_DELAY,

                        duration: MAIN_FADE_DURATION,

                        ease: "easeInOut",

                    }}

                    key={`${exampleIndex}-${i}`}

                    className="relative"

                >

                    <motion.span

                        initial={{

                            opacity: 0,

                        }}

                        animate={{

                            opacity: 1,

                        }}

                        transition={{

                            delay: i * LETTER_DELAY,

                            duration: 0,

                        }}

                    >

                        {l}

                    </motion.span>

                    <motion.span

                        initial={{

                            opacity: 0,

                        }}

                        animate={{

                            opacity: [0, 1, 0],

                        }}

                        transition={{

                            delay: i * LETTER_DELAY,

                            times: [0, 0.1, 1],

                            duration: BOX_FADE_DURATION,

                            ease: "easeInOut",

                        }}

                        className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"

                    />

                </motion.span>

            ))}


        </p>

    );

};