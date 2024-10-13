
import Header from "@/components/header";
import Divider from "@/components/divider";
import Terminal from "@/components/swap/Terminal";
import RoadMap from "@/components/RoadMap";
import React from "react";
import Starfield from "@/components/starfield";

export default function Home() {
  return (
    <>
            <Starfield
                starCount={2500}
                starColor={[255, 255, 255]}
                speedFactor={0.1}
                backgroundColor="black"
            />
            <Header/>
            <br/>
            <Divider/>
            <br/>
            <Terminal/>
            <br/>
            <Divider/>
            <br />
            <RoadMap/>

    </>
  )
}
