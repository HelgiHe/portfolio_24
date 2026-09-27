"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0, reduceMotion = false, y = 14) {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.68,
      delay,
      ease,
    },
  };
}

const experienceItems = [
  {
    slug: "harpa",
    title: "Harpa",
    context: "Cultural platform / Events / Content integration",
  },
  {
    slug: "epli",
    title: "Epli",
    context: "E-commerce / Product experience",
  },
  {
    slug: "skagi",
    title: "Skagi",
    context: "Financial platform / Data visualization",
  },
  {
    slug: "heilsuvera",
    title: "Heilsuvera",
    context: "Interactive health tools / Configurable assessments",
  },
  {
    slug: "distica",
    title: "Distica",
    context: "Healthcare / E-commerce",
  },
  {
    slug: "velvera",
    title: "Velvera",
    context: "E-commerce / Digital retail",
  },
] as const;

const technologyList = Array.from(
  new Set(
    projects.flatMap((project) => [
      ...(project.technologies ?? []),
      ...(project.cms ?? []),
    ]),
  ),
);

export default function AboutPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <>
      <Header />
      <main>
        <section aria-labelledby="about-heading" className="pt-10 md:pt-14 lg:pt-18">
          <Container>
            <div className="grid grid-cols-1 gap-y-8 pb-20 md:pb-24 lg:grid-cols-12 lg:gap-x-12 lg:pb-28 xl:gap-x-16 xl:pb-32">
              <div className="lg:col-span-8 xl:col-span-8">
                <motion.p
                  className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]"
                  initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.64, ease }}
                >
                  About
                </motion.p>

                <motion.h1
                  id="about-heading"
                  className="mt-4 max-w-[10ch] text-[clamp(3.75rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[var(--color-text)]"
                  initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.72, delay: 0.04, ease }}
                >
                  Where design and engineering meet.
                </motion.h1>
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <motion.section
            className="border-t border-[var(--color-border)] py-14 md:py-18 lg:py-22"
            {...fadeUp(0.08, reduceMotion, 14)}
          >
            <p className="max-w-[60rem] text-[clamp(1.6rem,3vw,3rem)] leading-[1.18] tracking-[-0.03em] text-[var(--color-text)]">
              I&apos;m a frontend developer based in Reykjavík, Iceland, building digital products and websites where design and engineering meet.
            </p>
            <p className="mt-6 max-w-[60rem] text-[clamp(1.6rem,3vw,3rem)] leading-[1.18] tracking-[-0.03em] text-[var(--color-text)]">
              My work ranges from cultural platforms and e-commerce to financial interfaces and interactive public services. I enjoy working on projects where the frontend is more than presentation — where thoughtful interaction, real data and external systems all need to come together in a clear experience.
            </p>
          </motion.section>

          <motion.section
            className="grid grid-cols-1 gap-y-4 border-t border-[var(--color-border)] py-14 md:py-16 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16"
            {...fadeUp(0, reduceMotion, 14)}
          >
            <div className="lg:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                Approach
              </p>
            </div>
            <div className="lg:col-span-7 xl:col-span-6">
              <p className="max-w-[42rem] text-[17px] leading-[1.6] tracking-[-0.015em] text-[var(--color-text-secondary)] md:text-[19px]">
                I care about the details that make an interface feel right: clear information, responsive interaction, subtle motion and strong performance.
              </p>
              <p className="mt-6 max-w-[42rem] text-[17px] leading-[1.6] tracking-[-0.015em] text-[var(--color-text-secondary)] md:text-[19px]">
                I like working close to both design and implementation, translating visual ideas into interfaces that hold up in real use. That often means thinking beyond individual components, how content is managed, how data moves through a product, and how an experience behaves across different devices.
              </p>
            </div>
          </motion.section>

          <motion.section
            className="border-t border-[var(--color-border)] py-14 md:py-16"
            {...fadeUp(0, reduceMotion, 14)}
          >
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
              <div className="lg:col-span-3">
                <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Selected Experience
                </p>
              </div>
              <div className="lg:col-span-9">
                <div className="border-t border-[var(--color-border)]">
                  {experienceItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/work/${item.slug}`}
                      className="group grid grid-cols-1 gap-y-2 border-b border-[var(--color-border)] py-6 transition-colors duration-300 ease-out hover:bg-[rgba(17,17,17,0.02)] focus-visible:bg-[rgba(17,17,17,0.02)] focus-visible:outline-none md:grid-cols-[minmax(0,1fr)_minmax(260px,0.8fr)] md:gap-x-8 md:items-start md:py-7"
                    >
                      <h2 className="text-[clamp(2rem,3vw,3rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[var(--color-text)] transition-transform duration-300 ease-out group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px]">
                        {item.title}
                      </h2>
                      <p className="text-[13px] leading-[1.5] text-[var(--color-text-secondary)] md:text-[14px]">
                        {item.context}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="grid grid-cols-1 gap-y-4 border-t border-[var(--color-border)] py-14 md:py-16 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16"
            {...fadeUp(0, reduceMotion, 14)}
          >
            <div className="lg:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                Tools & Technology
              </p>
            </div>
            <div className="lg:col-span-7 xl:col-span-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[15px] leading-[1.45] text-[var(--color-text-secondary)] md:grid-cols-3 md:text-[16px]">
                {technologyList.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="grid grid-cols-1 gap-y-4 border-t border-[var(--color-border)] py-14 md:py-16 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16"
            {...fadeUp(0, reduceMotion, 14)}
          >
            <div className="lg:col-span-7 xl:col-span-6 lg:col-start-4">
              <p className="max-w-[40rem] text-[17px] leading-[1.6] tracking-[-0.015em] text-[var(--color-text-secondary)] md:text-[19px]">
                Based in Reykjavík, Iceland.
              </p>
              <p className="mt-4 max-w-[40rem] text-[17px] leading-[1.6] tracking-[-0.015em] text-[var(--color-text-secondary)] md:text-[19px]">
                I enjoy building things that sit somewhere between product development, creative frontend and practical engineering.
              </p>
            </div>
          </motion.section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
