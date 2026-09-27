export type ProjectSection = {
  label: string;
  text: string;
};

export type ProjectMediaItem = {
  src: string;
  alt: string;
  aspect?: "landscape" | "portrait" | "square";
  position?: string;
  caption?: string;
};

export type ProjectGalleryBlock = {
  type: "full" | "two-up" | "tool-composition";
  items: ProjectMediaItem[];
  surface?: "default" | "elevated";
};

export type ProjectData = {
  slug: "harpa" | "epli" | "skagi" | "heilsuvera" | "distica" | "velvera";
  number: string;
  title: string;
  category: string;
  description: string;
  externalLink?: string;
  role?: string[];
  technologies?: string[];
  cms?: string[];
  heroImage: ProjectMediaItem;
  intro?: string;
  compact?: boolean;
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
  {
    slug: "heilsuvera",
    number: "04",
    title: "Heilsuvera",
    category: "Interactive health tools · Web",
    description:
      "Development of interactive health tools for Iceland’s public health platform, including configurable health assessments and calculators for blood pressure, BMI and other health metrics.",
    role: ["Frontend development"],
    cms: ["Umbraco"],
    compact: true,
    heroImage: {
      src: "/healthtest.png",
      alt: "Heilsuvera configurable health assessment interface.",
      aspect: "landscape",
      position: "object-top",
    },
    intro:
      "Development of interactive tools for Iceland’s public health platform.",
    sections: [
      {
        label: "Overview",
        text: "A collection of interactive health tools developed for Heilsuvera, designed to turn health information into simple, guided digital experiences.",
      },
      {
        label: "Configurable assessments",
        text: "Interactive assessments can be configured through the Umbraco backend, allowing different questionnaires and content to be managed without creating a separate frontend implementation for each one.",
      },
      {
        label: "Calculators",
        text: "The work also includes focused tools such as blood pressure and BMI calculators, combining user input, calculation logic and clear result states.",
      },
    ],
    galleries: [
      {
        type: "tool-composition",
        items: [
          {
            src: "/healthtest.png",
            alt: "Heilsuvera configurable health assessment with questions and guided form flow.",
            aspect: "landscape",
            position: "object-top",
            caption: "Configurable health assessment",
          },
          {
            src: "/blood_calc.png",
            alt: "Heilsuvera blood pressure calculator interface with user input fields.",
            aspect: "portrait",
            position: "object-top",
            caption: "Blood pressure calculator",
          },
          {
            src: "/bmi.png",
            alt: "Heilsuvera BMI calculator interface showing a focused calculator layout.",
            aspect: "portrait",
            position: "object-top",
            caption: "BMI calculator",
          },
        ],
        surface: "elevated",
      },
    ],
  },
  {
    slug: "distica",
    number: "05",
    title: "Distica",
    category: "Healthcare / E-commerce · Web",
    description:
      "Digital commerce platform for Iceland's healthcare sector.",
    compact: true,
    heroImage: {
      src: "/distica.png",
      alt: "Distica healthcare commerce interface in a focused editorial crop.",
      aspect: "landscape",
      position: "object-top",
    },
    intro: "Short-form frontend work for a healthcare commerce platform.",
    sections: [
      {
        label: "Overview",
        text: "Frontend work for a digital commerce platform in Iceland’s healthcare sector.",
      },
    ],
    galleries: [],
  },
  {
    slug: "velvera",
    number: "06",
    title: "Velvera",
    category: "E-commerce · Web",
    description: "Beauty and wellness retail experience.",
    compact: true,
    heroImage: {
      src: "/velvera.png",
      alt: "Velvera beauty and wellness storefront presented in a clean editorial crop.",
      aspect: "landscape",
      position: "object-top",
    },
    intro: "Short-form frontend work for a beauty and wellness retail experience.",
    sections: [
      {
        label: "Overview",
        text: "Frontend work for a clean e-commerce experience focused on beauty and wellness retail.",
      },
    ],
    galleries: [],
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
