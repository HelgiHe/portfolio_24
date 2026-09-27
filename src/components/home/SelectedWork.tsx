import { Container } from "@/components/layout/Container";
import { ProjectFeature } from "./ProjectFeature";

const featuredProjects = [
  {
    number: "01",
    slug: "harpa",
    title: "Harpa",
    category: "Cultural platform · Web",
    description:
      "Frontend development for Harpa, one of Reykjavík’s most iconic cultural landmarks. Built a fast, highly interactive digital experience alongside a custom Gatsby integration with the Tix API, automating event data and simplifying content management.",
    image: "/harpa_new.png",
    imageAlt:
      "Harpa cultural platform homepage shown on a laptop in a wide editorial crop.",
    priority: true,
  },
  {
    number: "02",
    slug: "epli",
    title: "Epli",
    category: "E-commerce · Web",
    description:
      "Frontend development for Epli’s e-commerce experience, creating a polished and responsive storefront across Apple’s product ecosystem. The platform brings together product discovery, promotions, services and commerce in a clear, highly visual shopping experience.",
    image: "/epli.png",
    imageAlt:
      "Epli e-commerce storefront with Apple products presented in a wide editorial layout.",
    reverse: true,
    imagePosition: "object-center",
  },
  {
    number: "03",
    slug: "skagi",
    title: "Skagi",
    category: "Financial platform · Web",
    description:
      "Frontend development for Skagi’s digital platform, combining a modern content experience with live financial data. Integrated with Keldan to transform up-to-date market information into clear, interactive data visualizations.",
    image: "/skagi_new.png",
    imageAlt:
      "Skagi financial platform interface showing market data and charts in a restrained editorial crop.",
    imagePosition: "object-center",
  },
] as const;

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

        <div className="mt-2 md:mt-4">
          {featuredProjects.map((project) => (
            <ProjectFeature key={project.slug} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
