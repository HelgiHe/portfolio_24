import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "../../../components/layout/Footer";
import { Header } from "../../../components/layout/Header";
import { Container } from "../../../components/layout/Container";
import { CaseStudyHero } from "../../../components/work/CaseStudyHero";
import { CaseStudyMedia } from "../../../components/work/CaseStudyMedia";
import { CaseStudyText } from "../../../components/work/CaseStudyText";
import { ProjectMeta } from "../../../components/work/ProjectMeta";
import { ProjectNavigation } from "../../../components/work/ProjectNavigation";
import {
  getNextProject,
  getProject,
  projects,
  type ProjectData,
  type ProjectSection,
  type ProjectGalleryBlock,
} from "../../../data/projects";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} — Helgi Helgason`,
    description: project.description,
  };
}

type MetaItem = {
  label: string;
  value: string | string[];
  href?: string;
  external?: boolean;
};

function buildMeta(project: ProjectData): MetaItem[] {
  const items: MetaItem[] = [
    { label: "Project", value: project.title },
    { label: "Category", value: project.category },
  ];

  if (project.role?.length) {
    items.push({ label: "Role", value: project.role });
  }

  if (project.technologies?.length) {
    items.push({ label: "Technology", value: project.technologies });
  }

  if (project.cms?.length) {
    items.push({ label: "CMS", value: project.cms });
  }

  if (project.externalLink) {
    items.push({
      label: "Website",
      value: "Visit website",
      href: project.externalLink,
      external: true,
    });
  }

  return items;
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);
  const meta = buildMeta(project);

  return (
    <>
      <Header />
      <main>
        <article>
          <Container>
            <CaseStudyHero
              project={project}
              meta={<ProjectMeta items={meta} />}
            />

            <div className="py-8 md:py-10 lg:py-12">
              {project.sections.map((section: ProjectSection) => (
                <CaseStudyText
                  key={section.label}
                  label={section.label}
                  text={section.text}
                />
              ))}
            </div>

            {project.galleries.length ? (
              <div className="pb-10 md:pb-14 lg:pb-18">
                {project.galleries.map((block: ProjectGalleryBlock, index: number) => (
                  <CaseStudyMedia
                    key={`${project.slug}-${block.type}-${index}`}
                    block={block}
                  />
                ))}
              </div>
            ) : null}

            <ProjectNavigation nextProject={nextProject} />
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
