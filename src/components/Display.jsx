import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Display = () => {

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#display',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
            }
        });

        timeline
            .to('.mask img', {
                transform: 'scale(1.5)',
                opacity: 1
            }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
    }, [])

    return (
        <section id="display">
            <div className="media">
                <video src="earthspace.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/logo.svg" />
                </div>
            </div>

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
        </section>
    )
}

export default Display