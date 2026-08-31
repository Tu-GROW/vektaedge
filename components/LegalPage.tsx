import type { ReactNode } from 'react';

export function LegalHeader() {
  return (
    <header className="border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Vektaedge Technologies home">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[#1e7a5f] text-sm font-black text-white">
            VE
          </span>
          <span className="font-display text-lg font-extrabold text-[#15171f]">Vektaedge</span>
        </a>
        <a
          href="/"
          className="text-sm font-bold text-[#1e7a5f] transition hover:text-[#15171f]"
        >
          &larr; Back to home
        </a>
      </nav>
    </header>
  );
}

export function LegalFooter() {
  return (
    <footer className="bg-[#15171f] px-5 py-8 text-white lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-white">Vektaedge Technologies</p>
        <div className="flex gap-5">
          <a className="transition hover:text-white" href="/terms">
            Terms of Service
          </a>
          <a className="transition hover:text-white" href="/privacy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-[#22242d]">
      <LegalHeader />
      <article className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-[#15171f]">{title}</h1>
        <p className="mt-2 text-sm font-bold uppercase tracking-wide text-[#1e7a5f]">
          Last updated: {lastUpdated}
        </p>
        <div className="legal-content mt-10 space-y-8 leading-7 text-[#15171f]/80">{children}</div>
      </article>
      <LegalFooter />
    </main>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-extrabold text-[#15171f]">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
