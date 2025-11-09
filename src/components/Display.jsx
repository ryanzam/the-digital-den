import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Display = () => {

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.media',
                start: 'top 50px',
                end: 'bottom top',
                scrub: true,
                pin: true,
            }
        });

        timeline
            .to('.mask img', {
                transform: 'scale(1.5)',
                opacity: 1
            })
    }, [])

    return (
        <section id="display">
            <div className="content">
                <div className="wrapper">
                    <div >
                        <h2>Technology at your service</h2>

                        <div className="space-y-5 mt-7 pe-10 ">
                            <p>
                                One stop marketplace for all your technological needs
                            </p>
                            <p className=" lg:max-w-md">
                                We are committed to offer you all the latest cutting-edge tech.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="media">
                <video src="earthspace.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/logo.svg" />
                </div>
            </div>
        </section>
    )
}

export default Display