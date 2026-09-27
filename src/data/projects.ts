export type ProjectSection = {
  label: string;
  text: string;
};

export type ProjectMediaItem = {
  src: string;
  alt: string;
  aspect?: "landscape" | "portrait" | "square";
  position?: string;
};

export type ProjectGalleryBlock = {
  type: "full" | "two-up";
  items: ProjectMediaItem[];
  surface?: "default" | "elevated";
};

export type ProjectData = {
  slug: "harpa" | "epli" | "skagi";
  number: string;
  title: string;
  category: string;
  description: string;
  externalLink?: string;
  role?: string[];
  technologies?: string[];
  heroImage: ProjectMediaItem;
  intro?: string;
  sections: ProjectSection[];
  galleries: ProjectGalleryBlock[];
};

export const projects: ProjectData[] = [
  {
    slug: "harpa",
    number: "01",
    title: "Harpa",
    category: "Cultural platform · Web",
    description:
      "Frontend development for Harpa, one of Reykjavík’s most iconic cultural landmarks. Built a fast, highly interactive digital experience alongside a custom Gatsby integration with the Tix API, automating event data and simplifying content management.",
    externalLink: "https://www.harpa.is",
    role: ["Frontend development"],
    technologies: ["GatsbyJS", "TypeScript", "Tailwind CSS", "Contentful"],
    heroImage: {
      src: "/harpa_new.png",
      alt: "Harpa cultural platform shown on a laptop in a wide editorial composition.",
      aspect: "landscape",
      position: "object-center",
    },
    intro:
      "Frontend development for one of Reykjavík’s most iconic cultural landmarks.",
    sections: [
      {
        label: "Overview",
        text: "Frontend development for Harpa, one of Reykjavík’s most iconic cultural landmarks.",
      },
      {
        label: "Integration",
        text: "A custom Gatsby source integration connects the website with the Tix API, automating event data and reducing manual content work.",
      },
      {
        label: "Content experience",
        text: "Contentful supports editorial content while the site provides access to event information and Harpa’s annual report.",
      },
    ],
    galleries: [
      {
        type: "full",
        items: [
          {
            src: "/harpa.jpeg",
            alt: "Harpa website interface displayed in a wide architectural crop.",
            aspect: "landscape",
            position: "object-center",
          },
        ],
      },
    ],
  },
  {
    slug: "epli",
    number: "02",
    title: "Epli",
    category: "E-commerce · Web",
    description:
      "Frontend development for Epli’s e-commerce experience, creating a polished and responsive storefront across Apple’s product ecosystem. The platform brings together product discovery, promotions, services and commerce in a clear, highly visual shopping experience.",
    heroImage: {
      src: "/epli.png",
      alt: "Epli storefront experience featuring Apple products in a clean retail composition.",
      aspect: "landscape",
      position: "object-center",
    },
    intro:
      "Frontend development for a polished e-commerce storefront across Apple’s product ecosystem.",
    sections: [
      {
        label: "Overview",
        text: "Frontend development for Epli’s e-commerce experience, creating a polished and responsive storefront across Apple’s product ecosystem.",
      },
      {
        label: "Commerce experience",
        text: "The platform brings together product discovery, promotions, services and commerce in a clear, highly visual shopping experience.",
      },
    ],
    galleries: [],
  },
  {
    slug: "skagi",
    number: "03",
    title: "Skagi",
    category: "Financial platform · Web",
    description:
      "Frontend development for Skagi’s digital platform, combining a modern content experience with live financial data. Integrated with Keldan to transform up-to-date market information into clear, interactive data visualizations.",
    externalLink: "https://www.skagi.is",
    role: ["Frontend development"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prismic",
      "Recharts",
    ],
    heroImage: {
      src: "/skagi_new.png",
      alt: "Skagi financial platform interface with charts and live market information.",
      aspect: "landscape",
      position: "object-center",
    },
    intro: "Modern digital platform for Skagi.",
    sections: [
      {
        label: "Overview",
        text: "Modern digital platform for Skagi, combining a content experience with live financial information.",
      },
      {
        label: "Financial data",
        text: "Integration with Keldan retrieves and displays current financial information.",
      },
      {
        label: "Data visualization",
        text: "Interactive charts and interfaces present financial information clearly.",
      },
    ],
    galleries: [
      {
        type: "full",
        items: [
          {
            src: "/skagi_1.jpeg",
            alt: "Skagi website shown with market data and financial interface details.",
            aspect: "landscape",
            position: "object-center",
          },
        ],
      },
      {
        type: "full",
        items: [
          {
            src: "/skagi.jpeg",
            alt: "Skagi digital platform with chart-focused financial user interface.",
            aspect: "landscape",
            position: "object-center",
          },
        ],
        surface: "elevated",
      },
    ],
  },
];

export const projectBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<ProjectData["slug"], ProjectData>;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: ProjectData["slug"]) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
