"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, image, author, role, company }, i) => (
                <div className="p-8 rounded-3xl border border-[#0B1522]/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] bg-white max-w-xs w-full" key={i}>
                  <div className="text-slate-600 font-body text-sm leading-relaxed">"{quote}"</div>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#0B1522]/5">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={author}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-[#0B1522] text-gold-400 flex items-center justify-center font-bold text-sm">
                        {author.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="font-display font-bold text-xs text-[#0B1522] tracking-tight leading-tight">{author}</div>
                      <div className="text-[10px] leading-tight text-slate-500 mt-0.5">{role}, {company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
