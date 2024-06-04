"use client";
import { ProjectItem } from "@/components/ProjectItem";
import { SphereComponent } from "@/components/Sphere";
import { projects } from "@/content/projects";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

const title = "Helgi Helgason";
const titleChars = title.split("");

export default function Home() {
  return (
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
          <Canvas shadows>
            <SphereComponent />
          </Canvas>
        </div>
      </section>
      <section id="projects" className="px-4 pt-20 lg:px-10">
        <h2 className="mb-32 text-3xl font-semibold lg:text-5xl">Projects</h2>
        {projects?.map((project, index) => {
          return (
            <ProjectItem
              key={project.title}
              title={project.title}
              img={`/${project.image}`}
              desc={project.description}
              className={index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
            />
          );
        })}
      </section>
    </main>
  );
}
