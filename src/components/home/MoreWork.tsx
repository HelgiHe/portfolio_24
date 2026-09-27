import { Container } from "@/components/layout/Container";
import { MoreWorkItem } from "./MoreWorkItem";

const moreWorkProjects = [
  {
    title: "Heilsuvera",
    slug: "heilsuvera",
    category: "Interactive health tools · Web",
    description:
      "Assessments, calculators and configurable health experiences.",
  },
  {
    title: "Distica",
    slug: "distica",
    category: "Healthcare / E-commerce · Web",
    description:
      "Digital commerce platform for Iceland's healthcare sector.",
  },
  {
    title: "Velvera",
    slug: "velvera",
    category: "E-commerce · Web",
    description: "Beauty and wellness retail experience.",
  },
] as const;

export function MoreWork() {
  return (
    <section className="pb-24 pt-4 md:pb-32 md:pt-8 lg:pb-40 lg:pt-10">
      <Container>
        <div className="border-t border-[var(--color-border)] pt-6 md:pt-8 lg:pt-10">
          <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
            More Work
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          {moreWorkProjects.map((project) => (
            <MoreWorkItem key={project.slug} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
