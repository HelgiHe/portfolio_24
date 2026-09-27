import { Container } from "@/components/layout/Container";
import { ProjectFeature } from "./ProjectFeature";

const harpaProject = {
  number: "01",
  title: "Harpa",
  category: "Cultural platform · Web",
  description:
    "Frontend development for Harpa, one of Reykjavík’s most iconic cultural landmarks. Built a fast, highly interactive digital experience alongside a custom Gatsby integration with the Tix API, automating event data and simplifying content management.",
  image: "/harpa_new.png",
  slug: "harpa",
  imageAlt:
    "Harpa cultural platform homepage shown on a laptop in a wide editorial crop.",
};

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="pb-24 pt-8 md:pb-32 md:pt-10 lg:pb-40 lg:pt-14"
    >
      <Container>
        <div className="border-t border-[var(--color-border)] pt-6 md:pt-8 lg:pt-10">
          <p
            id="selected-work-heading"
            className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]"
          >
            Selected Work
          </p>
        </div>

        <ProjectFeature {...harpaProject} />
      </Container>
    </section>
  );
}
