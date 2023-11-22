import React from "react";
import './style.css'




// export const Navbar =()=>{
//     return(
//         <div>
//             <div className="nav-container">
//                 <nav className="navbar">
//                     <a href="/home">HOME</a>
//                     <a href="/about">ABOUT</a>
//                     <a href="/release">RELEASE</a>
//                     <a href="/artist">ARTISTS</a>
                  
//                 </nav>
//                 <nav className="navbar">
//                     <a href="/playlist">PLAYLIST</a>
//                     <a href="/demo">DEMO DROP</a>
//                     <a href="/contact">CONTACT</a>
//                     <a href="/concerts">CONCERTS</a>
                   
//                 </nav>
//             </div>
//         </div>
//     )
// }


export const Home = () => {
    return (
        <div className="container">
        <div className="nav-container">
                <nav className="navbar">
                    <a href="/home">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a href="/release">RELEASE</a>
                    <a href="/artist">ARTISTS</a>
                  
                </nav>
                <nav className="navbar">
                    <a href="/playlist">PLAYLIST</a>
                    <a href="/demo">DEMO DROP</a>
                    <a href="/contact">CONTACT</a>
                    <a href="/concerts">CONCERTS</a>
                   
                </nav>
            </div>
    
        <div className="home-container">
            <h1 className="logo">RIDDLE INC<span className="square"></span></h1>
            <div className="content">
                <p>is a new stage in the music style that is forming right now. 
                    We are creating a new stage in the culture, not repeating existing ones.
                </p>
                {/* <div className="sphere"></div> */}
            </div>
        </div>
        </div>
    )
}

export const About= () => {
    return (
        <div className="about-container">
    
                <div className="sphere"> 

                </div>
                <div>
                    <h1 className="about-logo">We create the future</h1>
                    <p className="about-text">We're a company that not only finds and promotes talented, but also
                        adapts to the ever-changing landscape of the music industry.
                    </p>
                </div>

                <div className="sphere"> 

                </div>

        
        </div>
    )
}
