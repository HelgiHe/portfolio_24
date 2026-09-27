import Link from "next/link";
import type { ProjectData } from "@/data/projects";

type ProjectNavigationProps = {
  nextProject: ProjectData;
};

export function ProjectNavigation({ nextProject }: ProjectNavigationProps) {
  return (
    <section className="border-t border-[var(--color-border)] py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
        <div className="lg:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            Next Project
          </p>
        </div>

        <div className="lg:col-span-9">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block focus-visible:outline-none"
          >
            <div className="flex items-end justify-between gap-4 border-b border-[var(--color-border)] pb-4 md:pb-5">
              <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[var(--color-text)] transition-transform duration-300 ease-out group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px]">
                {nextProject.title}
              </h2>
              <span
                aria-hidden="true"
                className="mb-2 inline-block text-[1.5rem] text-[var(--color-text)] transition-transform duration-300 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-focus-visible:translate-x-[3px] group-focus-visible:-translate-y-[2px]"
              >
                ↗
              </span>
            </div>
          </Link>

          <div className="mt-4">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-1 text-[13px] text-[var(--color-text-secondary)] transition-colors duration-300 ease-out hover:text-[var(--color-text)] focus-visible:text-[var(--color-text)] focus-visible:outline-none"
            >
              <span>Back to work</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-[2px] group-focus-visible:-translate-y-[2px]"
              >
                ↑
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
