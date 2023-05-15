import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ScrollAnimation = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='top'>
            <h1 className="">React<br /> Animate On Scroll Library</h1>
            <h3>Fade-up</h3>
            <div className="animation" data-aos="fade-up"></div>
            <h3>Fade-down</h3>
            <div className="animation" data-aos="fade-down"></div>
            <h3>Fade-right</h3>
            <div className="animation" data-aos="fade-right"></div>
            <h3>Fade-left</h3>
            <div className="animation" data-aos="fade-left"></div>
            <div className="animation" data-aos="fade-up-right"></div>
            <div className="animation" data-aos="fade-up-left"></div>
            <div className="animation" data-aos="fade-down-right"></div>
            <div className="animation" data-aos="fade-down-left"></div>
            <h3>Flip</h3>
            <div className="animation" data-aos="flip-right"></div>
            <div className="animation" data-aos="flip-left"></div>
            <div className="animation" data-aos="flip-up"></div>
            <div className="animation" data-aos="flip-down"></div>
            <h3>Zoom Animation</h3>
            <div className="animation" data-aos="zoom-in"></div>
            <div className="animation" data-aos="zoom-out"></div>
            <div className="animation" data-aos="zoom-in-up"></div>
            <div className="animation" data-aos="zoom-in-down"></div>
            <div className="animation" data-aos="zoom-in-left"></div>
            <div className="animation" data-aos="zoom-in-right"></div>
            <div className="animation" data-aos="zoom-out-up"></div>
            <div className="animation" data-aos="zoom-out-down"></div>
            <div className="animation" data-aos="zoom-out-right"></div>
            <div className="animation" data-aos="zoom-out-left"></div>
            <div
                className="animation"
                data-aos="fade-up"
                data-aos-duration="3000">
            </div>
            <div
                className="animation"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
            </div>
        </div>
    )
}

export default ScrollAnimation