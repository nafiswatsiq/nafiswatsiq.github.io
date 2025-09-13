'use client';

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "motion/react";

interface ParallaxTextProps {
  children: string
  baseVelocity: number
  direction: number
}

function ParallaxText({
  children,
  baseVelocity = 100,
  direction,
}: ParallaxTextProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 40,
  })
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  })

  const skewVelocityFactor = useTransform(
    skewVelocity,
    [-1000, 1000],
    [-30, 30]
  )
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 300)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <motion.div
      initial={{ x: direction, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 2,
          duration: 1,
          // ease: [0.6, 0.05, -0.01, 0.9],
        },
      }}
      className="m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]"
    >
      <motion.div
        style={{ x }}
        className="flex flex-nowrap whitespace-nowrap text-2xl uppercase md:text-[12rem]"
      >
        <motion.span
          style={{ skew: skewVelocityFactor }}
          className="mr-10 block"
        >
          {children}{" "}
        </motion.span>
        <motion.span
          style={{ skew: skewVelocityFactor }}
          className="mr-10 block"
        >
          {children}{" "}
        </motion.span>
        <motion.span
          style={{ skew: skewVelocityFactor }}
          className="mr-10 block"
        >
          {children}{" "}
        </motion.span>
        <motion.span
          style={{ skew: skewVelocityFactor }}
          className="mr-10 block"
        >
          {children}{" "}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default function TextScrollParalax() {
  return (
    <div className="mt-10 w-full overflow-hidden">
        <ParallaxText direction={500} baseVelocity={-1}>
          NAFIS WATSIQ
        </ParallaxText>
    </div>
  )
}
