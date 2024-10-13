// @ts-nocheck
"use client"

import { motion } from "framer-motion";
import {useRef, useState} from "react";
import {FiCreditCard, FiCrosshair, FiMail, FiUser, FiUsers} from "react-icons/fi";
import {FaRocket} from "react-icons/fa";
import {GiGrowth, GiIncomingRocket} from "react-icons/gi";
import {BsBuildingFillLock} from "react-icons/bs";

export default function RoadMap() {

    const [section, setSection] = useState('dev')

    const handleSectionClick = (id: string) => {
        setSection(section === id ? '' : id);
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            sectionElement.scrollIntoView({behavior: 'smooth'});
        }
    };

    const Card = ({ title, subtitle, Icon, refs }) => {

        return (

            <a

                onClick={() => {
                    handleSectionClick(refs)
                }}

                className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"

            >

                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />


                <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-green-400 group-hover:rotate-12 transition-transform duration-300" />

                <Icon className="mb-2 text-2xl text-green-600 group-hover:text-white transition-colors relative z-10 duration-300" />

                <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">

                    {title}

                </h3>

                <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">

                    {subtitle}

                </p>

            </a>

        );

    };


    return (
        <div className={"flex justify-center w-full"}>

            <div>
                <h1 className={"flex justify-center text-center text-green-500 font-extrabold text-2xl"}>Space Map</h1>
                <br/>
                <div className="overflow-hidden rounded-full bg-gray-200">
                    <div className="h-2 w-1/4 rounded-full bg-green-500"></div>
                </div>

                <br/>
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">

                    <Card

                        title="Takeover"

                        subtitle="Establish CTO"

                        refs={"dev"}

                        Icon={FiCrosshair}

                    />

                    <Card title="Land" subtitle="Establish Grounding"  refs={"com"} Icon={GiIncomingRocket}/>

                    <Card title="Build" subtitle="Build Foundation"  refs={"utl"} Icon={BsBuildingFillLock}/>

                    <Card

                        title="Grow"

                        subtitle="Take Over SOL"

                        refs={"gro"}

                        Icon={GiGrowth}

                    />

                </div>
                <br/>
                <article className="relative rounded-xl border border-gray-700 bg-gray-800 p-4">
                    <div className="flex items-center justify-center text-center gap-4">

                        <div id={"dev"} className={`mb-8 ${section === 'dev' ? 'block' : 'hidden'}`}>
                            <h3 className="mx-52 text-lg font-medium text-green-500">🚀 Takeover 🚀</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <div
                                        className="block h-full rounded-lg border border-green-500 p-4">
                                        <strong className="font-medium text-green-500">Establish CTO</strong>

                                        <p className="mt-1 text-xs font-medium text-green-400">
                                            Develop Telegram channel ✅<br/>
                                            Develop Twitter account ✅<br/>
                                            Build Team ✅<br/>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="block h-full rounded-lg border border-green-500 p-4">
                                        <strong className="font-medium text-green-500">Develop</strong>

                                        <p className="mt-1 text-xs font-medium text-green-400">
                                            Create Website ✅<br/>
                                            Launch to Raydium ✅<br/>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div id={"com"} className={`mb-8 ${section === 'com' ? 'block' : 'hidden'}`}>
                            <h3 className="mx-52 text-lg font-medium text-green-500">🚀 Land 🚀</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <div
                                        className="block h-full rounded-lg border border-green-500 p-4">
                                        <strong className="font-medium text-green-500">Listings</strong>

                                        <p className="mt-1 text-xs font-medium text-green-400">
                                            DexScreener (40k) ✅<br/>
                                            DexTools (100k) <br/>
                                            CoinGecko (200k) <br/>
                                            CoinMarketCap (400k) <br/>
                                            CEX (1m) <br/>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div id={"utl"} className={`mb-8 ${section === 'utl' ? 'block' : 'hidden'}`}>
                            <h3 className="mx-52 text-lg font-medium text-green-500">🚀 Build 🚀</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <div
                                        className="block h-full rounded-lg border border-green-500 p-4">
                                        <strong className="font-medium text-green-500">Utility Development</strong>

                                        <p className="mt-1 text-xs font-medium text-green-500">
                                            Space BuyBot ($100k) <br/>
                                            Space Swap ($150k) <br/>
                                            Space Tools ($250k) <br/>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div id={"gro"} className={`mb-8 ${section === 'gro' ? 'block' : 'hidden'}`}>
                            <h3 className="mx-52 text-lg font-medium text-green-500">🚀 Growth 🚀</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <div
                                        className="block h-full rounded-lg border border-green-700 p-4">
                                        <strong className="font-medium text-green-500">MORE TO COME</strong>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>


        </div>

    )
}
