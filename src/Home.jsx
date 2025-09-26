import React, { useEffect, useRef, useState } from 'react'
import './Css/Home.css'
import logo from './assets/Iscable.svg'
import first_img from './assets/img3.png'
import second_img from './assets/img6.png'
import third_img from './assets/img1.png'
import fourth_img from './assets/img2.png'
import fifth_img from './assets/img5.png'
import sixth_img from './assets/img4.png'
import Logo1 from './assets/logo1.svg'
import Logo2 from './assets/logo2.png'
import gsap from 'gsap'
const Home = () => {
    const [open, setOpen] = useState(false);
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();
    const img6 = useRef();
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            img1.current,
            { y: 1000, opacity: 0 },   // starting state (relative to your CSS)
            { y: 0, opacity: 1, duration: 0.5}
        );
        tl.fromTo(
            img2.current,
            {
                y: 1000, opacity: 0
            },
            {
                y: 0, duration: 1, opacity: 0.5 
            }
        )
        tl.fromTo(
            img3.current,
            {
                y: 1000, opacity: 0
            },
            {
                y: 0, duration: 1, opacity: 0.5
            }
        )
        tl.fromTo(
            img4.current,
            {
                y: 1000, opacity: 0
            },
            {
                y: 0, duration: 1, opacity: 0.5
            }
        )
        tl.fromTo(
            img5.current,
            {
                y: 1000, opacity: 0
            },
            {
                y: 0, duration: 1, opacity: 0.5
            }
        )
    }, [])
    const toggleMenu = () => {
        setOpen(!open);
    }
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className={`navlink ${open ? 'open' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#">Results</a>
                    <a href="#">Case Studies</a>
                    <a href="#" className='cta'>Let's Work</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
            </header>

            <sectio className="hero">
                {/* Images for background */}
                <img src={first_img} alt="" className='hero-img-1' ref={img1} />
                <img src={second_img} alt="" className='hero-img-2' ref={img2} />
                <img src={third_img} alt="" className='hero-img-3' ref={img3} />
                <img src={fourth_img} alt="" className='hero-img-4' ref={img4} />
                <img src={fifth_img} alt="" className='hero-img-5' ref={img5}/>
                <img src={sixth_img} alt="" className='hero-img-6'/>
                {/* Ends here below is the main content */}
                <div className="top-hero">
                    <h5 className='top-hero-h5'>We don’t just push send...</h5>
                    <h2 className='top-hero-h2'>Grow <span>Revenue</span> with Data You Already Own.</h2>
                    <p className='top-hero-p'>Not just another agency, we’re your e-commerce retention partner.</p>
                    <a href="#" className='top-hero-cta'>Schedule Your Free Consultation</a>
                    <span className='top-hero-span'>You're in Good Hands:</span>
                    <div className="top-row-img">
                        <img src={Logo1} alt="" className='logo1' />
                        <img src={Logo2} alt="" className='logo2' />
                    </div>
                </div>
                <div className="bottom-hero">
                    {/* <h5 className="bottom-hero-h5">You're in Good Hands</h5> */}
                    <div className="bottom-row-img">
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>

                </div>
            </sectio>
        </>
    )
}

export default Home