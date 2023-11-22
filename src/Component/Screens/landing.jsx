import React from "react";
import { Home,About } from "../Home";
import { Artist, Release, Demo , Music, Follow, Footer} from "../Music";

export const Landing = ()=>{
    return(
        <>
        <Home/>
        <About/>
        <Release/>
        <Artist/>
        <Demo/>
        <Music/>
        <Follow/>
        <Footer/>
        </>
    )
}
