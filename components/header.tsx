"use client"

import React, {useEffect, useRef, useState} from "react";
import {animate, motion, useMotionTemplate, useMotionValue} from "framer-motion";
import {twMerge} from "tailwind-merge";
const COLORS_TOP = ["#34fd03", "#0e170c", "#379100", "#0e170d"];

export default function Header(){

    return (

        <section className={"relative grid h-96 place-content-center"}>


            <h2 className="relative z-0 text-[20vw] font-black text-green-800 md:text-[200px]">

                GONK ON SOL

            </h2>

            <Cards/>
        </section>

    )
}

const Cards = () => {

    const containerRef = useRef(null);


    return (

        <div className="absolute inset-0 z-10" ref={containerRef}>

            <Card

                containerRef={containerRef}

                src="/gonk.png"

                alt="Gonk"

                rotate="6deg"

                top="20%"

                left="25%"

                className="w-36 md:w-56"

            />

            <Card

                containerRef={containerRef}

                src="/gonk2.png"

                alt="Example image"

                rotate="12deg"

                top="45%"

                left="60%"

                className="w-24 md:w-48"

            />

            <Card

                containerRef={containerRef}

                src="/gonk3.png"

                alt="Example image"

                rotate="-6deg"

                top="20%"

                left="40%"

                className="w-52 md:w-80"

            />

            <Card

                containerRef={containerRef}

                src="/gonk4.png"

                alt="Example image"

                rotate="8deg"

                top="50%"

                left="40%"

                className="w-48 md:w-72"

            />

            <Card

                containerRef={containerRef}

                src="/gonk5.png"

                alt="Example image"

                rotate="18deg"

                top="20%"

                left="65%"

                className="w-40 md:w-64"

            />

            <Card

                containerRef={containerRef}

                src="/gonk6.png"

                alt="Example image"

                rotate="-3deg"

                top="35%"

                left="55%"

                className="w-24 md:w-48"

            />

        </div>

    );

};


// @ts-ignore
const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {

    const [zIndex, setZIndex] = useState(0);


    const updateZIndex = () => {

        const els = document.querySelectorAll(".drag-elements");


        let maxZIndex = -Infinity;


        els.forEach((el) => {

            let zIndex = parseInt(

                window.getComputedStyle(el).getPropertyValue("z-index")

            );


            if (!isNaN(zIndex) && zIndex > maxZIndex) {

                maxZIndex = zIndex;

            }

        });


        setZIndex(maxZIndex + 1);

    };


    return (

        <motion.img

            onMouseDown={updateZIndex}

            style={{

                top,

                left,

                rotate,

                zIndex,

            }}

            className={twMerge(

                "drag-elements absolute w-48 p-1 pb-4",

                className

            )}

            src={src}

            alt={alt}

            drag

            dragConstraints={containerRef}

            // Uncomment below and remove dragElastic to remove movement after release

            //   dragMomentum={false}

            dragElastic={0.65}

        />

    );

};

