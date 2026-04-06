"use client";
import Image from "next/image";
import Markdown from "react-markdown";
import cn from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProjectItem = ({ img, title, link, desc, className = "" }) => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 90%", "end 35%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [160, -160]);

  return (
    <div
      className={cn(
        "flex flex-col-reverse justify-between w-full pb-32",
        className,
      )}
    >
      <div className="flex flex-col w-full lg:w-7/12">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h3 className="mt-10 mb-8 text-3xl font-semibold lg:text-4xl lg:mt-0">
              {title}
            </h3>
          </a>
        ) : (
          <h3 className="mt-10 mb-8 text-3xl font-semibold lg:text-4xl lg:mt-0">
            {title}
          </h3>
        )}
        <Markdown className="text-lg font-normal">{desc}</Markdown>
      </div>

      <div className="flex justify-center w-full lg:w-5/12">
        <motion.div
          ref={imageRef}
          style={{ y }}
          className="will-change-transform"
        >
          <Image
            className="w-64 mt-16 border-8 rounded-3xl border-zinc-900 lg:w-80"
            src={img}
            width={350}
            height={350}
            alt={`${title} image`}
          />
        </motion.div>
      </div>
    </div>
  );
};
