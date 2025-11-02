import { useEffect, useRef } from "react";

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>The Digital Den</h1>
                <p>Your gateway to digital innovation and creativity.</p>
            </div>

            <video ref={videoRef} src="video.mp4" autoPlay muted playsInline />

            <button>Get in Touch</button>
        </section>
    )
}

export default Hero