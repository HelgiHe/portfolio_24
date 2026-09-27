"use client";

import { Container } from "./Container";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <Container>
        <div className="flex h-[70px] items-center justify-between md:h-[86px]">
          <a
            href="#top"
            className="text-[0.95rem] font-medium uppercase tracking-[-0.04em] text-[var(--color-text)]"
          >
            HH.
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-10 text-[14px] text-[var(--color-text-secondary)] lg:gap-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative inline-flex py-2 transition-colors duration-200 hover:text-[var(--color-text)] focus-visible:text-[var(--color-text)] focus-visible:outline-none"
                  >
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-text)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  </a>
                </li>
              ))}
              <li aria-hidden="true">
                <span className="block h-[10px] w-[10px] rounded-full bg-[var(--color-text)]" />
              </li>
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--color-text)] md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <span className="flex w-[18px] flex-col gap-[4px]">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </Container>
    </header>
  );
}
