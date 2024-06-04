"use client";
import Image from "next/image";
import Markdown from "react-markdown";
import cn from "classnames";

export const ProjectItem = ({
  img,
  title,
  desc,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse justify-between w-full pb-32",
        className
      )}
    >
      <div className="flex flex-col w-full lg:w-7/12">
        <h3 className="mt-10 mb-8 text-3xl font-semibold lg:text-4xl lg:mt-0">
          {title}
        </h3>
        <Markdown className="text-lg font-normal">{desc}</Markdown>
      </div>
      <div className="flex justify-center w-full lg:w-5/12">
        <Image
          className="w-64 mt-16 border-8 rounded-3xl border-zinc-900 lg:w-80"
          src={img}
          width={350}
          height={350}
          alt={`${title} image`}
        />
      </div>
    </div>
  );
};
