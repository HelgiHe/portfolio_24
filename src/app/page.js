"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { ProjectItem } from "@/components/ProjectItem";
import { Scene } from "@/components/Scene";
import { projects } from "@/content/projects";
import { Canvas } from "@react-three/fiber";

const title = "Helgi Helgason";
const titleChars = title.split("");

export default function Home() {
  return (
    <>
      <Head>
        <title>Helgi H</title>
        <meta
          name="portfolio"
          content="a collection of some of my work"
        />
      </Head>

      <main>
        <section id="hero" className="w-screen h-screen">
          <div className="ml-4 md:ml-32">
            <h1 className="pt-32 mb-4 text-4xl font-semibold lg:text-7xl">
              {titleChars.map((char, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </h1>
            <h2 className="text-xl font-medium opacity-0 lg:text-3xl reveal">
              Front end dev
            </h2>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-20">
            <Canvas className="three-canvas" shadows>
              <Scene />
            </Canvas>
          </div>
        </section>
        <section id="projects" className="px-4 pt-20 lg:px-10">
          <h2 className="mb-32 text-3xl font-semibold lg:text-5xl">Projects</h2>
          {projects?.map((project, index) => {
            return (
              <ProjectItem
                key={project.title}
                link={project.link}
                title={project.title}
                img={`/${project.image}`}
                desc={project.description}
                className={
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
