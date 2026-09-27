"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/Container";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0, reduceMotion = false) {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.68,
      delay,
      ease,
    },
  };
}

export function Hero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="top"
      className="border-b border-[var(--color-border)]"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid min-h-[calc(100svh-70px)] grid-cols-1 gap-y-12 pb-24 pt-10 md:min-h-[calc(88svh-86px)] md:grid-cols-12 md:gap-x-8 md:gap-y-0 md:pb-36 md:pt-14 lg:pb-44 lg:pt-20">
          <div className="md:col-span-8 lg:col-span-9">
            <motion.h1
              id="hero-heading"
              className="text-[clamp(3.4rem,15vw,5rem)] font-medium uppercase leading-[0.88] tracking-[-0.055em] text-[var(--color-text)] md:text-[clamp(4.5rem,10vw,10rem)] md:leading-[0.86] md:tracking-[-0.06em]"
              {...fadeUp(0, reduceMotion)}
            >
              <span className="block">Helgi</span>
              <span className="block">Helgason</span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-[16ch] text-[clamp(1.4rem,2.2vw,2.2rem)] leading-[1.08] tracking-[-0.03em] text-[var(--color-text)] md:mt-10"
              {...fadeUp(0.08, reduceMotion)}
            >
              Creative frontend developer building thoughtful digital experiences.
            </motion.p>
          </div>

          <motion.div
            className="md:col-span-4 md:self-end md:justify-self-end lg:col-span-3 lg:translate-y-[-1.5rem]"
            {...fadeUp(0.16, reduceMotion)}
          >
            <div className="space-y-1 text-[13px] leading-[1.55] text-[var(--color-text-muted)] md:text-[14px]">
              <p>Reykjavík, Iceland</p>
              <p>Frontend / Creative development</p>
              <p>2026</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
