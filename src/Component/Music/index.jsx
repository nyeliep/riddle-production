import React from "react";
import './style.css';


export const Release = () => {
    return (
        <div className="release-container">
            <div className="release-header">
                <p className="production-text">riddle inc. production</p>
                <h1 className="last-release-title">LAST RELEASE</h1>
            </div>

            <div className="release-content">
                <div className="left-col">
                    <h1 className="release-title">Echoes of the Abyss</h1>
                    <p className="artist-name">by the Choosen</p>
                    <a className="listen-link" href="/listen">LISTEN</a>

                    <div className="song-details">
                        <h4>Lost in the Cosmos <p className="artist-name">by the FLOVE</p></h4>
                        <h4>Melodies of the Night <p className="artist-name">by the NTTC</p></h4>
                    </div>
                </div>
                <div className="right-col">
                    <img className="release-video" src="media/album-cover3.webp"/>
                    <img className="release-video" src="media/album-cover4.webp"/>
                    <img className="release-video" src="media/album-cover5.webp"/>
                    <img className="release-video" src="media/album-cover2.webp"/>
                   
                    
                </div>
            </div>
        </div>
    )
}

export const Artist = () => {
    return (
        <div className="artist-container">
            <div className="artist-header">
                <p className="production-text">the heart of our team</p>
                <h1 className="last-release-title">ARTISTS</h1>
            </div>

            <div className="artist-content">
                <div className="left-col">
                    <img className="artist-img" src="media/album-cover2.webp" alt="The Crimson Storm" />
                    <h1 className="artist-title">The Crimson Storm</h1>
                </div>

                <div className="right-col">
                    <div className="song-details">
                        <h4>
                            The Crimson Storm is a soulful performer whose music is a blend of blues, rock, and jazz.
                            His powerful voice and guitar playing mesmerize listeners and transport them to another world.
                        </h4>
                    </div>
                </div>
            </div>

            <div className="artist-content">
                <div className="left-col">
                    <div className="song-details">
                        <h4>
                            Luna Siren is a rising star in the world of electronic music with a unique sound that combines ambient
                            textures and driving rhythms. Her live performances are sensory experiences that take the audience on a journey.
                        </h4>
                    </div>
                </div>

                <div className="right-col">
                    <img className="artist-img" src="media/album-cover2.webp" alt="Luna Siren" />
                    <h1 className="artist-title">Luna Siren</h1>
                </div>
            </div>

        
            <a href="/artists" className="more-artists-link">MORE ARTISTS</a>
            
        </div>
    )
}

export const Demo = () => {
    return (
        <div className="demo-container">
            <div className="demo-header">
                <p className="production-text">We are constantly looking for new artists</p>
            </div>

            <div className="demo-content">
                <a className="demo-link" href="/demo">Demo drop</a>

                <p className="demo-text">
                    Only submit streamable links to your unreleased tracks.
                    Preferably Soundcloud, Youtube, Dropbox, Google Drive etc.
                    If we like it, we will get in touch with you.
                </p>
            </div>
        </div>
    )
}


export const Music = ()=>{
    return(
        <div className="music-container">
            <div className="music-header">
                <p className="production-text">riddle inc. production</p>
                <h1 className="music-title">OUR MUSIC IS</h1>
                <h1 className="title">AROUND THE WORLD</h1>
                <p>Our team helps artist not only in creating tracks, but also in organising big shows
                    in the best clubs around the world, so don't miss this upcoming performances.
                </p>
            </div>
            <div>
                <div className="performance">
                <h1>Pixelated Dreams</h1>
                <p>Pixelated Dreams performances in Copenhagan.Pixelated Dreams is a combination of classic rock and modern
                   trends that create a unique sound. They performed their best tracks and showcased new tracks from yet-to-be realeased albums.
                </p>
                </div>
                <div className="concerts">
                    <a href="/concerts">All Concerts</a>
                </div>
            </div>
        </div>
    )
}

export const Follow = () => {
    return (
        <div className="follow-us-container">
            <div className="follow-us-header">
                <p className="production-text">find us here</p>
                <h1 className="follow-us-title">FOLLOW OUR NEWS</h1>
                <p className="production-text">and our releases on our popular platforms</p>
            </div>
            <div className="follow-links-container">
                <div className="follow-links-row">
                    <div className="fol-left-col">
                        <h1>APPLE MUSIC</h1>
                    </div>
                    <div className="fol-right-col">
                        <h1>YOUTUBE</h1>
                    </div>
                </div>
                <div className="follow-links-row">
                    <div className="fol-left-col">
                        <h1>INSTAGRAM</h1>
                    </div>
                    <div className="fol-right-col">
                        <h1>SPOTIFY</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Footer = () => {
    return (
        <div className="footer-container">
            <div>
            <div className="footer-content">
                <div className="footer-content-block">
                    <h2>DIVE INTO A NEW WORLD OF MUSIC</h2>
                    <p>
                        Riddle inc. is a new stage in the music style that is forming right now.
                        We are creating a new stage in the culture not repeating existing ones.
                    </p>
                </div>
                <div className="footer-content-block">
                    <h2>Visit</h2>
                    <div className="link-container">
                        <nav className="navlinks">
                            <a href="/home">HOME</a>
                            <a href="/about">ABOUT</a>
                            <a href="/release">RELEASE</a>
                            <a href="/artist">ARTISTS</a>
                        </nav>
                        <nav className="navlinks">
                            <a href="/playlist">PLAYLIST</a>
                            <a href="/demo">DEMO DROP</a>
                            <a href="/contact">CONTACT</a>
                            <a href="/concerts">CONCERTS</a>
                        </nav>
                     
                    </div>
                    <div className="info-link">
                    <a href="/policy">Data policy</a>
                    <a href="imprint">Imprint</a>
                </div>
                </div>
            </div>
            
                <div className="footer-logo">
                    <h1>RIDDLE INC<span className="circle"></span></h1>
                    <p>@2023 all rights reserved</p>
                </div>
         </div>
        </div>
    );
}