"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Flip } from "gsap/Flip";

// Register GSAP plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase, Flip);
}

export default function LayoutPreloader({ onComplete }) {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

  // Unsplash premium maritime export/spice images
  const images = [
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop", // Cargo Ship
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop", // Premium Spices (Anise/Cardamom)
    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop", // Modern Logistics/Warehouse
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop", // Final epic golden harbor sunset
  ];

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden";

    // Create custom eases matching the exact math of the original bundle
    CustomEase.create("customEase", "0.6, 0.01, 0.05, 1");
    CustomEase.create("directionalEase", "0.16, 1, 0.3, 1");
    CustomEase.create("smoothBlur", "0.25, 0.1, 0.25, 1");
    CustomEase.create("gentleIn", "0.38, 0.005, 0.215, 1");

    const preloader = containerRef.current;
    if (!preloader) return;

    const imgWrappers = preloader.querySelectorAll(".image-wrapper");
    const finalImgWrapper = preloader.querySelector("#final-image");
    const textVe = preloader.querySelector("#text-ve");
    const textLa = preloader.querySelector("#text-la");
    const gridOverlay = preloader.querySelector(".grid-overlay");
    const gridColumns = preloader.querySelectorAll(".grid-column");
    const titleSpans = preloader.querySelectorAll(".title-line span");
    const headerLeft = preloader.querySelector(".header-left");
    const headerMiddle = preloader.querySelector(".header-middle");
    const headerRight = preloader.querySelector(".header-right");
    const footer = preloader.querySelector(".footer");
    
    const isMobile = window.innerWidth < 768;
    
    // Set initial states
    gsap.set(".preloader-container", {
      width: isMobile ? "280px" : "400px",
      height: isMobile ? "380px" : "300px",
      position: "relative",
      overflow: "hidden",
    });
    
    gsap.set(".text-element", {
      fontSize: isMobile ? "3.5rem" : "5rem",
      top: "50%",
      yPercent: -50,
    });
    
    gsap.set(".big-title", { opacity: 0 });
    gsap.set(titleSpans, { y: "100%" });
    gsap.set(gridOverlay, { opacity: 0 });
    gsap.set(gridColumns, {
      borderLeftColor: "rgba(255, 255, 255, 0)",
      borderRightColor: "rgba(255, 255, 255, 0)",
    });
    
    gsap.set([headerLeft, headerMiddle, headerRight], {
      opacity: 0,
      y: -20,
    });
    gsap.set(footer, { y: "100%" });

    gsap.set(imgWrappers, {
      visibility: "visible",
      clipPath: "inset(100% 0 0 0)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      xPercent: 0,
      yPercent: 0,
    });

    gsap.set(imgWrappers[0].querySelector("img"), { scale: 1.2 });

    // Initial position of side texts (VE/LA -> TA/NI) relative to the central box
    const positionTextElements = () => {
      const containerRect = preloader.querySelector(".preloader-container").getBoundingClientRect();
      const isMobileNow = window.innerWidth < 768;
      gsap.set(textVe, { left: `${containerRect.left - (isMobileNow ? 60 : 120)}px` });
      gsap.set(textLa, { left: `${containerRect.right + (isMobileNow ? 15 : 30)}px` });
    };

    positionTextElements();
    window.addEventListener("resize", positionTextElements);

    // Grid coordinates alignment helpers
    const getGridPositions = () => {
      const innerGrid = preloader.querySelector(".grid-overlay-inner");
      const columns = preloader.querySelectorAll(".grid-column");
      if (!innerGrid || !columns.length) return null;

      gsap.set(gridOverlay, { opacity: 1 });
      const positions = Array.from(columns).map((col) => {
        const rect = col.getBoundingClientRect();
        return {
          left: rect.left,
          right: rect.right,
          width: rect.width,
          center: rect.left + rect.width / 2,
        };
      });
      gsap.set(gridOverlay, { opacity: 0 });

      return {
        firstColumnLeft: positions[0].left,
        lastColumnRight: positions[positions.length - 1].right,
        column7Left: positions[6].left,
        padding: parseInt(window.getComputedStyle(innerGrid).paddingLeft) || 32,
      };
    };

    const alignHeaderToGrid = (grid) => {
      if (!grid) return;
      gsap.set(headerLeft, { position: "absolute", left: `${grid.firstColumnLeft}px` });
      gsap.set(headerMiddle, { position: "absolute", left: `${grid.column7Left}px` });
      gsap.set(headerRight, { position: "absolute", right: `${window.innerWidth - grid.lastColumnRight}px` });
    };

    // Animation Timeline
    const tl = gsap.timeline();
    timelineRef.current = tl;

    // 1. Clip-path slide reveal for each image in the center box
    imgWrappers.forEach((wrapper, index) => {
      if (index > 0) {
        tl.add(`image${index}`, "<0.18");
      }
      tl.to(
        wrapper,
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 0.65,
          ease: "smoothBlur",
        },
        index > 0 ? `image${index}` : 0
      );
    });

    tl.add("pauseBeforeZoom", ">0.2");
    tl.add("finalAnimation", "pauseBeforeZoom");

    // 2. Expand final image to full screen & split text to layout grid edges
    tl.add(() => {
      const grid = getGridPositions();
      alignHeaderToGrid(grid);

      const state = Flip.getState(finalImgWrapper);
      
      // Expand central container to full screen
      gsap.set(".preloader-container", { overflow: "visible" });
      gsap.set(finalImgWrapper, {
        position: "fixed",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
      });

      // Animate the Flip
      Flip.from(state, {
        duration: 1.3,
        ease: "customEase",
        absolute: true,
      });

      // Slide VE/LA -> TA/NI text elements to outer margins
      gsap.to(textVe, {
        left: `${grid ? grid.padding : (isMobile ? 16 : 32)}px`,
        fontSize: isMobile ? "2rem" : "3rem",
        duration: 1.3,
        ease: "directionalEase",
      });

      if (textLa) {
        const textLaState = Flip.getState(textLa);
        gsap.set(textLa, {
          left: "auto",
          right: `${grid ? grid.padding : (isMobile ? 16 : 32)}px`,
          fontSize: isMobile ? "2rem" : "3rem",
        });
        Flip.from(textLaState, {
          duration: 1.3,
          ease: "directionalEase",
          absolute: true,
        });
      }
    }, "finalAnimation");

    tl.add("pauseAfterZoom", ">0.3");
    tl.add("gridReveal", "pauseAfterZoom");

    // 3. Reveal Grid columns
    tl.to(
      gridOverlay,
      {
        opacity: 1,
        duration: 0.4,
        ease: "gentleIn",
      },
      "gridReveal"
    );

    tl.to(
      gridColumns,
      {
        borderLeftColor: "rgba(255, 255, 255, 0.12)",
        borderRightColor: "rgba(255, 255, 255, 0.12)",
        duration: 0.6,
        stagger: 0.08,
        ease: "gentleIn",
      },
      "gridReveal"
    );

    // 4. Reveal Header, Footer & Main Brand titles
    tl.add("headerFooter", ">-0.3");
    
    tl.to(
      headerLeft,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "directionalEase",
      },
      "headerFooter"
    );

    tl.to(
      headerMiddle,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "directionalEase",
        delay: 0.15,
      },
      "headerFooter"
    );

    tl.to(
      headerRight,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "directionalEase",
        delay: 0.3,
      },
      "headerFooter"
    );

    tl.to(
      footer,
      {
        y: 0,
        duration: 0.75,
        ease: "directionalEase",
      },
      "headerFooter+=0.4"
    );

    tl.add("titleReveal", ">-0.2");
    
    tl.to(
      ".big-title",
      {
        opacity: 1,
        duration: 0.3,
      },
      "titleReveal"
    );

    tl.to(
      titleSpans,
      {
        y: "0%",
        duration: 0.95,
        stagger: 0.15,
        ease: "customEase",
      },
      "titleReveal+=0.1"
    );

    // 5. Complete and Fade out Preloader to reveal the site!
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 1,
        delay: 1.5, // Let the gorgeous titles sit beautifully for a bit
        ease: "customEase",
        onComplete: () => {
          setIsActive(false);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        },
      }
    );

    return () => {
      window.removeEventListener("resize", positionTextElements);
      if (timelineRef.current) timelineRef.current.kill();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!isActive) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#0B1522] overflow-hidden select-none font-display uppercase tracking-tight text-white"
      style={{ height: "100dvh", width: "100dvw" }}
    >
      {/* Animated Film Grain Overlay */}
      <div className="noise-animated opacity-15 pointer-events-none z-[100]" />

      {/* Exquisite minimal header layout aligned to grid on animation finish */}
      <header className="fixed top-0 left-0 w-full pt-6 md:pt-10 z-[50] text-[1.1rem] md:text-[1.4rem] font-semibold text-white tracking-widest">
        <div className="w-full px-6 md:px-8 flex justify-between items-center header-inner relative">
          <div className="header-left font-display font-black tracking-widest text-gold-400">
            TANISI IMPEX
          </div>
          
          <div className="header-middle hidden md:flex items-center gap-12 font-accent text-xs text-white/50 tracking-wider">
            <span>VESSEL REGISTERED</span>
            <span>GLOBAL PORT REGISTRY</span>
          </div>

          <div className="header-right font-accent text-xs tracking-wider text-white/60">
            <span className="text-emerald-400 font-bold">EST. 2026</span>
          </div>
        </div>
      </header>

      {/* Left/Right Text elements (TA/NI) */}
      <div
        className="text-element fixed font-black text-white/80 z-[20] pointer-events-none select-none tracking-tighter"
        id="text-ve"
        style={{ fontFamily: "var(--font-display)" }}
      >
        TA
      </div>

      {/* Central wipe preloader container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]">
        <div className="preloader-container relative rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5">
          {images.map((src, index) => (
            <div
              key={index}
              className="image-wrapper overflow-hidden"
              id={index === images.length - 1 ? "final-image" : undefined}
            >
              <img
                src={src}
                alt={`Tanisi Impex ${index + 1}`}
                className="w-full h-full object-cover scale-[1.2]"
              />
              {/* Dark luxury nautical gradient overlay over the images */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522]/80 via-transparent to-[#0B1522]/40 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="text-element fixed font-black text-white/80 z-[20] pointer-events-none select-none tracking-tighter"
        id="text-la"
        style={{ fontFamily: "var(--font-display)" }}
      >
        NI
      </div>

      {/* Big typography typography reveal */}
      <div className="big-title fixed bottom-[10%] left-6 md:left-12 z-[25] font-black text-white pointer-events-none select-none">
        <div className="title-line overflow-hidden h-[4.5rem] sm:h-[6rem] md:h-[8rem] lg:h-[10rem] flex items-center">
          <span className="block text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none text-gold-gradient">
            MARITIME
          </span>
        </div>
        <div className="title-line overflow-hidden h-[4.5rem] sm:h-[6rem] md:h-[8rem] lg:h-[10rem] flex items-center">
          <span className="block text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none">
            CARGO
          </span>
        </div>
        <div className="title-line overflow-hidden h-[4.5rem] sm:h-[6rem] md:h-[8rem] lg:h-[10rem] flex items-center">
          <span className="block text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none text-white/90">
            AUTHORITY
          </span>
        </div>
      </div>

      {/* Layout Grid Overlay */}
      <div className="grid-overlay fixed inset-0 pointer-events-none opacity-0 z-[4]">
        <div className="grid-overlay-inner w-full h-full px-6 md:px-8 flex justify-between">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="grid-column flex-1 h-full border-l border-r border-white/0 mx-1 md:mx-2 first:ml-0 last:mr-0 hidden sm:block"
            />
          ))}
        </div>
      </div>

      {/* Footer minimal info */}
      <footer className="footer fixed bottom-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-[50] text-[0.8rem] md:text-[1.1rem] tracking-wider text-white/50 font-accent">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">PORT TERMINALS ACTIVE</span>
          <span className="sm:hidden">PORTS ACTIVE</span>
        </div>
        <div>
          <span>22.5726° N, 88.3639° E</span>
        </div>
      </footer>
    </div>
  );
}
