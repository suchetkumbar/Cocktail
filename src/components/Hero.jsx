import {useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const herosplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines, words' });

        herosplit.chars.forEach((char)=> char.classList.add('text-gradient'));

        gsap.from(herosplit.chars,{
            yPercent:100,
            duration:1.0,
            ease:"expo.out",
            stagger:0.05
        });

        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.0,
            delay:1, // Delay to start after the hero title animation
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start:'top top',
                end:'bottom top',
                scrub: true,
            }
        })
        .to('right-leaf',{y:200},0)
        .to('left-leaf',{y:-200},0)
        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top'; 

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true, // makes the video play on scroll
                pin: true, // pins the video in place during the scroll
            }
        });
        videoRef.current.onloadedmetadata = () => { 
            tl.to(videoRef.current,{
                currentTime: videoRef.current.duration,
                duration: videoRef.current.duration,
                ease: 'none',
            });
        };
    }, []);

  return (
    <>
        <section id="hero" className = "noisy">
            <h1 className='title'>
                MOJITO
            </h1>

            <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf'/>
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf'/>

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        <p>Cool. Cris. Classic.</p>
                        <p>Sip the Spirit <br /> of Summer</p>
                    </div>

                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every cocktail on our menu is crafted with passion and precision, using only the freshest ingredients and premium spirits. Whether you're a fan of timeless classics or adventurous new blends, our diverse selection has something to tantalize every palate.
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
        <div className='video absolute inset-0'>
            <video
                src="/videos/output.mp4"
                ref={videoRef}
                muted
                playsInline
                preload='auto'
                />
        </div>
    </>
  )
}

export default Hero
