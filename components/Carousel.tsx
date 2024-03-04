"use client";

import TestimonialCard from "./TestimonialCard";
import useMeasure from "react-use-measure";

import { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { testimonialData } from "@/lib/data";

export default function Carousel() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const [hoverDuration, setHoverDuration] = useState(25);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: hoverDuration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: hoverDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, hoverDuration, rerender, mustFinish]);

  return (
    <motion.div
      ref={ref}
      drag={isHovered ? "x" : false}
      onHoverStart={() => {
        setIsHovered(true);
        setMustFinish(true);
        setHoverDuration(75);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        setMustFinish(true);
        setHoverDuration(25);
      }}
      style={{ x: xTranslation }}
      className="absolute left-0 flex cursor-pointer gap-4"
    >
      {[...testimonialData, ...testimonialData].map((testi, index) => (
        <div
          key={index}
          className="min-w-[25rem] md:min-w-[30rem] xl:min-w-[35rem]"
        >
          <TestimonialCard
            testimoniDate={testi.testimoniDate}
            userRating={testi.userRating}
            userComment={testi.userComment}
            username={testi.username}
          />
        </div>
      ))}
    </motion.div>
  );
}
