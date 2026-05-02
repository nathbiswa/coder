"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {

    const titleRef = useRef()
    const descRef = useRef()
    const btnRef = useRef()
    const imgRef = useRef()

    useEffect(() => {
        gsap.from(titleRef.current, { y: 80, opacity: 0, duration: 1 })
        gsap.from(descRef.current, { y: 40, opacity: 0, delay: 0.3 })
        gsap.from(btnRef.current, { scale: 0.8, opacity: 0, delay: 0.6 })
        gsap.from(imgRef.current, { scale: 1.2, opacity: 0, duration: 1 })
    }, [])

    //   return (
    //     <section className="hero">
    //       <h1 ref={titleRef}>The Best Courses</h1>
    //       <p ref={descRef}>Learn from experts</p>
    //       <button ref={btnRef}>Explore</button>
    //       <img ref={imgRef} src="/hero.png" />
    //     </section>
    //   )
}