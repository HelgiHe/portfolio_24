"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";

const CONTACT_EMAIL = "helgihel@gmail.com";
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0, reduceMotion = false, y = 14) {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      duration: 0.68,
      delay,
      ease,
    },
  };
}

export function Footer() {
  const reduceMotion = useReducedMotion() ?? false;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pb-8 pt-6 md:pb-10 md:pt-8 lg:pb-12 lg:pt-10">
      <Container>
        <div className="border-t border-[var(--color-border)]">
          <div className="grid grid-cols-1 gap-y-10 pb-20 pt-18 md:gap-y-14 md:pb-24 md:pt-24 lg:grid-cols-12 lg:gap-x-10 lg:pb-28 lg:pt-28 xl:gap-x-16 xl:pb-32 xl:pt-32">
            <motion.div
              className="lg:col-span-8 xl:col-span-8"
              {...fadeUp(0, reduceMotion, 16)}
            >
              <h2 className="max-w-[11ch] text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[var(--color-text)]">
                Have something interesting in mind?
              </h2>
            </motion.div>

            <motion.div
              className="lg:col-span-4 lg:self-end xl:col-span-4 xl:pb-4"
              {...fadeUp(0.08, reduceMotion, 12)}
            >
              <p className="text-[15px] leading-[1.5] text-[var(--color-text-secondary)]">
                Let&apos;s build it together.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group mt-8 inline-flex max-w-full items-end justify-between gap-4 border-b border-[var(--color-text)] pb-2 text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.1] tracking-[-0.03em] text-[var(--color-text)] transition-colors duration-300 ease-out hover:border-[color:rgba(17,17,17,0.7)] focus-visible:border-[color:rgba(17,17,17,0.7)] focus-visible:outline-none"
              >
                <span>Contact</span>
                <motion.span
                  aria-hidden="true"
                  className="inline-block shrink-0 text-[0.95em]"
                  whileHover={reduceMotion ? undefined : { x: 3, y: -2 }}
                  whileFocus={reduceMotion ? undefined : { x: 3, y: -2 }}
                  transition={{ duration: 0.28, ease }}
                >
                  ↗
                </motion.span>
              </a>
            </motion.div>
          </div>

          <div className="border-t border-[var(--color-border)] py-6 md:py-7">
            <div className="flex flex-col gap-4 text-[11px] leading-[1.5] text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between md:text-[12px]">
              <p>© {currentYear} Helgi Helgason</p>

              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                <p>Reykjavík, Iceland</p>
                <a
                  href="#top"
                  className="group inline-flex items-center gap-1 self-start text-[var(--color-text-secondary)] transition-colors duration-300 ease-out hover:text-[var(--color-text)] focus-visible:text-[var(--color-text)] focus-visible:outline-none"
                >
                  <span>Back to top</span>
                  <motion.span
                    aria-hidden="true"
                    className="inline-block"
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileFocus={reduceMotion ? undefined : { y: -2 }}
                    transition={{ duration: 0.26, ease }}
                  >
                    ↑
                  </motion.span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
