"use client";

import Navigation from "../Navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ApplyCircleCursor } from "../ApplyCircleCursor/ApplyCircleCursor";

interface AnimatedLayoutProps {
    children: React.ReactNode;
}

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
            let mm = gsap.matchMedia();
            const applySection = document.querySelector(".apply");
            const footer = document.querySelector("#footer");
            const cursor = document.querySelector(".cursor");
            const ball = document.querySelector(".ball");
            const palms = ["first-bg-palm", "second-bg-palm", "third-bg-palm", "fourth-bg-palm"];
            const pinSpacer = document.createElement("div");
            pinSpacer.classList.add("pin-footer");

            mm.add("(max-width: 767px)", () => {
                ScrollSmoother.create({
                    smooth: 3,
                    speed: 1,
                    wrapper: "#customW",
                    content: "#customC",
                    normalizeScroll: true,
                    effects: true,
                });

                const pinBannerTrigger = ScrollTrigger.create({
                    trigger: ".first-section-background",
                    pin: true,
                    start: "top top",
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=1200",
                });

                const navTrigger = ScrollTrigger.create({
                    trigger: ".navigation",
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=1200",
                });

                const bannerContentTrigger = ScrollTrigger.create({
                    trigger: ".pin-banner",
                    pinSpacing: false,
                    start: 0,
                    pin: true,
                    scrub: 1,
                    end: `+=1200`,
                });

                const spacerTrigger = ScrollTrigger.create({
                    trigger: "#spacer",
                    start: 0,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    end: "+=380",
                });


            });

            mm.add("(min-width: 768px)", () => {
                ScrollSmoother.create({
                    smooth: 3,
                    speed: 1,
                    wrapper: "#customW",
                    content: "#customC",
                    normalizeScroll: true,
                    effects: true,
                });

                const xTo = gsap.quickTo(cursor, "x", { duration: 0.9, ease: "power3" });
                const yTo = gsap.quickTo(cursor, "y", { duration: 0.9, ease: "power3" });
    
                applySection?.addEventListener("mouseenter", () => {
                    gsap.set(ball, { css: {display: "flex"} });
                    gsap.set(cursor, { translateX: -200, translateY: -200 })
                    gsap.fromTo(cursor, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "power3" })
                });
    
                applySection?.addEventListener("mouseleave", () => {
                    gsap.set(cursor, { translateX: -200, translateY: -200 })
                    gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: "power3" })
                });

                pinSpacer?.addEventListener("mouseenter", () => {
                    gsap.set(ball, { css: {display: "flex"} });
                    gsap.set(cursor, { translateX: -200, translateY: -200 })
                    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power3" })
                });

                footer?.addEventListener("mouseenter", () => {
                    gsap.set(cursor, { translateX: -200, translateY: -200 })
                    gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: "power3" })
                });

                // footer?.addEventListener("mouseleave", () => {
                //     gsap.set(ball, { css: {display: "flex"} });
                //     gsap.set(cursor, { translateX: -200, translateY: -200 })
                //     gsap.fromTo(cursor, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "power3" })
                // });

                pinSpacer?.addEventListener("mouseleave", () => {
                    gsap.set(cursor, { translateX: -200, translateY: -200 })
                    gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: "power3" })
                });
    
                document.addEventListener("mousemove", (e) => {
                    xTo((e.pageX - 20) - 100);
                    yTo((e.pageY - 20) - 100);
                    gsap.set(cursor, { translateX: -200, translateY: -200 })
                });

                const pinBannerTrigger = ScrollTrigger.create({
                    trigger: ".first-section-background",
                    pin: true,
                    start: "+=450 0",
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=1000",
                });

                const navTrigger = ScrollTrigger.create({
                    trigger: ".navigation",
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=1400",
                });

                const bannerContentTrigger = ScrollTrigger.create({
                    trigger: ".pin-banner",
                    pinSpacing: false,
                    start: "top-=150px 0",
                    pin: true,
                    scrub: 1,
                    end: `+=1200`,
                });

                const spacerTrigger = ScrollTrigger.create({
                    trigger: "#spacer",
                    start: "top-=150px 0",
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    end: "+=380",
                });

                const sponsorsTrigger = ScrollTrigger.create({
                    trigger: "#sponsors",
                    start: "center center",
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    end: "+=600"
                });

                const applyTrigger = ScrollTrigger.create({
                    trigger: "#apply",
                    start: "center-=50 center",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=1200"
                });

                const spacer2Trigger = ScrollTrigger.create({
                    trigger: "#spacer2",
                    start: 0,
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=150",
                });


                const spacer3Trigger = ScrollTrigger.create({
                    trigger: "#spacer3",
                    start: 0,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    end: "+=550",
                });

                gsap.set("#footer", { y: -40 });

                const footerTrigger = ScrollTrigger.create({
                    trigger: "#footer",
                    start: "top+=40 bottom",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    end: "+=600",
                    pinReparent: true,
                    pinSpacer: pinSpacer,
                });

                const palmAnimation = gsap.timeline({
                    paused: true,
                    defaults: {
                        duration: 1,
                        ease: "power1.inOut",
                    },
                });

                palms.forEach(palm => {
                    palmAnimation.fromTo(`#${palm}`, {
                        x: 0,
                        scale: 1,
                        rotate: 0,
                        y: 0,
                    }, {
                        x: palm.startsWith("first") || palm.startsWith("second") ? 40 : -50,
                        y: palm.startsWith("first") || palm.startsWith("second") ? -50 : 0,
                        scale: 1.1,
                        rotate: palm.startsWith("first") || palm.startsWith("second") ? 7 : -9,
                    }, 0)
                });

                ScrollTrigger.create({
                    trigger: "#sponsors",
                    start: "center center",
                    end: "+=600px",
                    scrub: true,
                    animation: palmAnimation,
                    onEnter: () => {
                        palmAnimation.play();
                    },
                    onLeaveBack: () => {
                        palmAnimation.pause();
                    },
                });
            });

            gsap.to("#sun", {
                x: 0,
                y: 360,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            });

            gsap.to("#wave1", {
                y: 90,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird1", {
                x: -60,
                y: 450,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird2", {
                x: 70,
                y: 450,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird3", {
                x: 80,
                y: 380,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird4", {
                x: -50,
                y: 370,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird5", {
                x: 60,
                y: 290,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })
        }
    );


    return (
        <>
            <ApplyCircleCursor />
            <div id="customW">
                <div id="customC">
                    <Navigation />
                    {children}
                </div>
            </div>
        </>
    )
};