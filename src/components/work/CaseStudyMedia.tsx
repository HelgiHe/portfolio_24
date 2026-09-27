"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import cn from "classnames";
import type { ProjectGalleryBlock } from "@/data/projects";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type CaseStudyMediaProps = {
  block: ProjectGalleryBlock;
};

function aspectClass(aspect?: "landscape" | "portrait" | "square") {
  if (aspect === "portrait") return "aspect-[4/5]";
  if (aspect === "square") return "aspect-square";
  return "aspect-[16/10] md:aspect-[16/9]";
}

function imageSizes(blockType: ProjectGalleryBlock["type"]) {
  if (blockType === "two-up") {
    return "(min-width: 768px) 44vw, 100vw";
  }

  if (blockType === "tool-composition") {
    return "(min-width: 1024px) 40vw, (min-width: 768px) 46vw, 100vw";
  }

  return "(min-width: 1280px) 88vw, (min-width: 768px) 92vw, 100vw";
}

export function CaseStudyMedia({ block }: CaseStudyMediaProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const surfaceClass =
    block.surface === "elevated" ? "bg-[var(--color-bg-elevated)]" : "bg-transparent";

  return (
    <motion.section
      className={cn("py-6 md:py-8", surfaceClass)}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0.88, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease }}
    >
      {block.type === "tool-composition" ? (
        <div className="bg-[var(--color-bg-elevated)] px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {block.items[0] ? (
              <figure>
                <div className="relative overflow-hidden rounded-[2px] bg-[var(--color-bg)] aspect-[16/10] md:aspect-[16/9]">
                  <Image
                    src={block.items[0].src}
                    alt={block.items[0].alt}
                    fill
                    sizes={imageSizes(block.type)}
                    className={`object-cover ${block.items[0].position ?? "object-center"}`}
                  />
                </div>
                {block.items[0].caption ? (
                  <figcaption className="mt-3 text-[11px] leading-[1.45] text-[var(--color-text-muted)] md:text-[12px]">
                    {block.items[0].caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {block.items.slice(1).map((item) => (
                <figure key={item.src}>
                  <div className="relative overflow-hidden rounded-[2px] bg-[var(--color-bg)] aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes={imageSizes(block.type)}
                      className={`object-cover ${item.position ?? "object-center"}`}
                    />
                  </div>
                  {item.caption ? (
                    <figcaption className="mt-3 text-[11px] leading-[1.45] text-[var(--color-text-muted)] md:text-[12px]">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "grid gap-4 md:gap-6",
            block.type === "two-up" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1",
          )}
        >
          {block.items.map((item) => (
            <figure key={item.src}>
              <div
                className={cn(
                  "relative overflow-hidden rounded-[2px] bg-[var(--color-bg-elevated)]",
                  aspectClass(item.aspect),
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={imageSizes(block.type)}
                  className={`object-cover ${item.position ?? "object-center"}`}
                />
              </div>
              {item.caption ? (
                <figcaption className="mt-3 text-[11px] leading-[1.45] text-[var(--color-text-muted)] md:text-[12px]">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      )}
    </motion.section>
  );
}
