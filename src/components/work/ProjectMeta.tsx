import Link from "next/link";

type ProjectMetaItem = {
  label: string;
  value: string | string[];
  href?: string;
  external?: boolean;
};

type ProjectMetaProps = {
  items: ProjectMetaItem[];
};

export function ProjectMeta({ items }: ProjectMetaProps) {
  return (
    <dl className="grid grid-cols-1 gap-y-8 border-t border-[var(--color-border)] pt-6 md:pt-7">
      {items.map((item) => (
        <div key={item.label} className="grid grid-cols-1 gap-y-2">
          <dt className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            {item.label}
          </dt>
          <dd className="text-[15px] leading-[1.5] text-[var(--color-text-secondary)] md:text-[16px]">
            {item.href ? (
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2 border-b border-[var(--color-text)] pb-[2px] text-[var(--color-text)] transition-colors duration-300 ease-out hover:border-[color:rgba(17,17,17,0.7)] focus-visible:outline-none"
              >
                <span>{Array.isArray(item.value) ? item.value[0] : item.value}</span>
                <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-focus-visible:translate-x-[3px] group-focus-visible:-translate-y-[2px]">
                  ↗
                </span>
              </Link>
            ) : Array.isArray(item.value) ? (
              <div className="space-y-1">
                {item.value.map((value) => (
                  <div key={value}>{value}</div>
                ))}
              </div>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
