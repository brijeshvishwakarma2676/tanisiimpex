import * as React from "react";
import { CATEGORIES } from "@/data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PROJECT_DATA = CATEGORIES.map((cat) => ({
  title: cat.name,
  image: cat.image,
  category: cat.tagline,
  year: "EST. 2026",
  description: cat.description,
  slug: cat.slug,
}));

const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

// Utility functions
const lerp = (start, end, factor) =>
  start + (end - start) * factor;

const getProjectData = (index) => {
  const i =
    ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) %
    PROJECT_DATA.length;
  return PROJECT_DATA[i];
};

const getProjectNumber = (index) => {
  return (
    ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) %
      PROJECT_DATA.length +
    1
  )
    .toString()
    .padStart(2, "0");
};

export function ArgentLoopInfiniteSlider() {
  const [visibleRange, setVisibleRange] = React.useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  // Refs for state that changes frequently (animation loop)
  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0, // Will be set on mount
    minimapHeight: 250, // Fixed height from CSS
  });

  // Refs to store DOM elements
  const projectsRef = React.useRef(new Map());
  const minimapRef = React.useRef(new Map());
  const infoRef = React.useRef(new Map());
  const requestRef = React.useRef();

  // Helper to update parallax for a single item
  const updateParallax = (img, scroll, index, height) => {
    if (!img) return;
    
    if (!img.dataset.parallaxCurrent) {
      img.dataset.parallaxCurrent = "0";
    }
    
    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.2;
    current = lerp(current, target, 0.1);
    
    // Optimization: only update if changed significantly
    if (Math.abs(current - target) > 0.01) {
        img.style.transform = `translateY(${current}px) scale(1.5)`;
        img.dataset.parallaxCurrent = current.toString();
    }
  };

  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min(
      (Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY =
      s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  const snapToProject = () => {
    const s = state.current;
    const current = Math.round(-s.targetY / s.projectHeight);
    const target = -current * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = {
      time: Date.now(),
      y: s.targetY,
      target: target,
    };
  };

  const updatePositions = () => {
    const s = state.current;
    const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;

    // Update Projects
    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      updateParallax(img, s.currentY, index, s.projectHeight);
    });

    // Update Minimap Images
    minimapRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      if (img) {
          updateParallax(img, minimapY, index, s.minimapHeight);
      }
    });

    // Update Info
    infoRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
    });
  };

  const animate = () => {
    const s = state.current;
    const now = Date.now();

    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint =
        -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
    }

    if (s.isSnapping) updateSnap();
    if (!s.isDragging) {
      s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    }

    updatePositions();
  };
  
  const renderedRange = React.useRef({ min: -CONFIG.BUFFER_SIZE, max: CONFIG.BUFFER_SIZE });

  const animationLoop = () => {
     animate();
     
     const s = state.current;
     const currentIndex = Math.round(-s.targetY / s.projectHeight);
     const min = currentIndex - CONFIG.BUFFER_SIZE;
     const max = currentIndex + CONFIG.BUFFER_SIZE;

     if (min !== renderedRange.current.min || max !== renderedRange.current.max) {
         renderedRange.current = { min, max };
         setVisibleRange({ min, max });
     }

     requestRef.current = requestAnimationFrame(animationLoop);
  };

  React.useEffect(() => {
    state.current.projectHeight = window.innerHeight;
    
    const onScroll = () => {
      const container = document.querySelector('.parallax-container-wrapper');
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const s = state.current;
      
      // If we are above the container, target is 0
      if (rect.top > 0) {
        s.targetY = 0;
        return;
      }
      
      // We are inside or past the container
      const scrolledInto = -rect.top;
      
      // Map scroll into a smooth targetY
      // Multiply by a speed factor for parallax effect (e.g., 1.5)
      s.targetY = -(scrolledInto * 1.5);
      s.lastScrollTime = Date.now();
      s.isSnapping = false;
    };

    const onResize = () => {
        state.current.projectHeight = window.innerHeight;
        const minimapEl = document.querySelector('.minimap-wrapper');
        if (minimapEl) {
            state.current.minimapHeight = minimapEl.clientHeight;
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    
    // Initial sync
    onResize();
    onScroll();

    // Start Loop
    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Generate range of indices
  const indices = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) {
    indices.push(i);
  }

  return (
    <div className="parallax-container sticky top-0 w-full h-screen overflow-hidden bg-[#0B1522] text-white select-none">
      <ul className="project-list absolute inset-0 m-0 p-0 list-none">
        {indices.map((i) => {
          const data = getProjectData(i);
          return (
            <div
              key={i}
              className="project absolute top-0 left-0 w-full h-full overflow-hidden will-change-transform"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img src={data.image} alt={data.title} className="w-full h-full object-cover will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522]/80 via-transparent to-[#0B1522]/30 mix-blend-multiply pointer-events-none" />
            </div>
          );
        })}
      </ul>

      {/* Center White Block */}
      <div className="minimap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] lg:w-[70%] max-w-[1200px] h-[300px] lg:h-[220px] bg-white z-20 pointer-events-auto shadow-2xl">
        <div className="minimap-wrapper relative w-full h-full overflow-hidden text-black uppercase font-bold text-[10px] lg:text-[11px] tracking-widest font-mono">
          
          <div className="minimap-img-preview absolute top-0 left-0 w-full h-full pointer-events-none">
            {indices.map((i) => {
              const data = getProjectData(i);
              return (
                <div
                  key={i}
                  className="minimap-img-item absolute top-0 left-0 w-full h-full flex items-center justify-end lg:justify-center p-6 lg:p-0"
                  ref={(el) => {
                    if (el) minimapRef.current.set(i, el);
                    else minimapRef.current.delete(i);
                  }}
                >
                  <div className="w-[120px] h-[160px] lg:w-[240px] lg:h-[140px] overflow-hidden relative">
                    <img src={data.image} alt={data.title} className="absolute top-0 left-0 w-full h-full object-cover" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="minimap-info-list absolute top-0 left-0 w-full h-full pointer-events-none">
            {indices.map((i) => {
              const data = getProjectData(i);
              const num = getProjectNumber(i);
              return (
                <div
                  key={i}
                  className="minimap-item-info absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row justify-between p-6 lg:p-10 pointer-events-auto"
                  ref={(el) => {
                    if (el) infoRef.current.set(i, el);
                    else infoRef.current.delete(i);
                  }}
                >
                  {/* Mobile & Tablet Layout (Visible < lg) */}
                  <div className="flex lg:hidden flex-col justify-between h-full w-[calc(100%-130px)] text-left pr-2">
                    <div>
                      <div className="text-[10px] text-stone-400 font-mono tracking-widest">{num}</div>
                      <h3 className="text-[13px] font-bold text-stone-900 tracking-wider mt-1 line-clamp-1">{data.title}</h3>
                      <div className="text-[9px] text-stone-500 tracking-widest mt-0.5">{data.category} — {data.year}</div>
                    </div>
                    
                    <div className="mt-2">
                      <p className="text-[10px] text-stone-600 tracking-wide font-normal normal-case leading-relaxed line-clamp-3">{data.description}</p>
                      <Link 
                        to={`/products/${data.slug}`} 
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-3 bg-stone-950 hover:bg-gold-500 text-white hover:text-black font-bold uppercase tracking-[0.2em] text-[8px] rounded transition-all duration-300 shadow-sm border border-stone-900 pointer-events-auto"
                      >
                        <span>View Details</span>
                        <ArrowRight size={10} className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Desktop Layout (Visible >= lg) */}
                  <div className="hidden lg:flex flex-col justify-between h-full w-[35%] text-left">
                    <div>
                      <div className="text-xs text-stone-400 tracking-widest">{num}</div>
                      <div className="text-xs text-stone-500 tracking-widest mt-2">{data.category}</div>
                    </div>
                    <div>
                      <p className="text-xs text-stone-600 tracking-wide font-normal normal-case leading-relaxed line-clamp-3">{data.description}</p>
                      <Link 
                        to={`/products/${data.slug}`} 
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 mt-4 bg-stone-950 hover:bg-gold-500 text-white hover:text-black font-bold uppercase tracking-[0.2em] text-[9px] rounded transition-all duration-300 shadow-md border border-stone-900 pointer-events-auto"
                      >
                        <span>View Details</span>
                        <ArrowRight size={12} className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex flex-col justify-between items-end h-full w-[35%] text-right">
                    <div className="text-sm font-black text-stone-950 tracking-wider leading-none mt-1">{data.title}</div>
                    <div className="text-xs text-stone-400 font-mono tracking-widest">{data.year}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
