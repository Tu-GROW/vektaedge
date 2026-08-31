import Image from 'next/image';

const capabilities = [
  {
    id: '01',
    title: 'Software Engineering',
    body: 'Custom platforms, internal tools, and product experiences built around clear business workflows.',
    accent: 'bg-[#d9f271] text-[#15171f]',
    icon: 'code',
  },
  {
    id: '02',
    title: 'Scalable Solutions',
    body: 'Technology foundations designed to grow with demand, support expansion, and keep business operations moving reliably.',
    accent: 'bg-[#c86b45] text-white',
    icon: 'scale',
  },
  {
    id: '03',
    title: 'Mobile/Web Applications',
    body: 'Responsive web and mobile applications that give customers, teams, and communities simple access to digital services.',
    accent: 'bg-[#dbeafe] text-[#15171f]',
    icon: 'devices',
  },
];

const metrics = [
  ['Build', 'Business workflow tools'],
  ['Deploy', 'Customer engagement solutions'],
  ['Scale', 'Business growth'],
];

const differentiators = [
  ['Impact', 'Systems that produce visible value for businesses, customers, and communities.'],
  ['Excellence', 'Engineering choices grounded in maintainable, dependable technical decisions.'],
  ['Accessibility', 'Advanced technology that stays approachable, useful, and practical for everyday use.'],
];

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Icon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  const commonProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
  };

  if (name === 'code') {
    return (
      <svg {...commonProps}>
        <path
          d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'scale') {
    return (
      <svg {...commonProps}>
        <path
          d="M4 19h16M7 16V9M12 16V5M17 16v-4M7 9l5-4 5 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'devices') {
    return (
      <svg {...commonProps}>
        <path
          d="M4 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7H4V6ZM8 20h5M10.5 17v3M18 11h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'company') {
    return (
      <svg {...commonProps}>
        <path
          d="M4 20V6l8-3 8 3v14M8 20v-6h8v6M8 9h.01M12 8h.01M16 9h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'product') {
    return (
      <svg {...commonProps}>
        <path
          d="M7 3h10a2 2 0 0 1 2 2v16l-3-2-3 2-3-2-3 2-2-1.33V5a2 2 0 0 1 2-2ZM9 8h6M9 12h6M9 16h3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'spark') {
    return (
      <svg {...commonProps}>
        <path
          d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16ZM18 15l.7 1.6L20 17l-1.3.4L18 19l-.7-1.6L16 17l1.3-.4L18 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'message') {
    return (
      <svg {...commonProps}>
        <path
          d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'phone') {
    return (
      <svg {...commonProps}>
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.09 9.86a16 16 0 0 0 6.05 6.05l1.23-1.23a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'mail') {
    return (
      <svg {...commonProps}>
        <path
          d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2ZM22 8l-10 6L2 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M12 3v18M5 7h14M7 12h10M9 17h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionLabel({
  icon,
  children,
  tone = 'light',
}: {
  icon: string;
  children: React.ReactNode;
  tone?: 'light' | 'dark';
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] ${tone === 'dark' ? 'text-[#d9f271]' : 'text-[#1e7a5f]'
        }`}
    >
      <span
        className={`grid h-8 w-8 place-items-center rounded-md ${tone === 'dark' ? 'bg-white/10 text-[#d9f271]' : 'bg-[#eef2f0] text-[#1e7a5f]'
          }`}
      >
        <Icon name={icon} className="h-4 w-4" />
      </span>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-white text-[#22242d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Vektaedge Technologies home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#1e7a5f] text-sm font-black text-white">
              VE
            </span>
            <span className="font-display text-lg font-extrabold text-[#15171f]">Vektaedge</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-[#15171f]/70 md:flex">
            <a className="transition hover:text-[#1e7a5f]" href="#company">
              Company
            </a>
            <a className="transition hover:text-[#1e7a5f]" href="#capabilities">
              Capabilities
            </a>
            <a className="transition hover:text-[#1e7a5f]" href="#shop-plus">
              Shop+
            </a>
            <a className="transition hover:text-[#1e7a5f]" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-[#15171f] px-4 py-2 text-sm font-bold !text-white shadow-[0_1px_0_rgba(21,23,31,0.08)] transition hover:bg-[#1e7a5f] hover:!text-white"
          >
            Start a conversation
          </a>
        </nav>
      </header>

      <section className="hero-surface relative min-h-screen overflow-hidden pt-28">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#15171f]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#1e7a5f] shadow-[0_1px_0_rgba(21,23,31,0.08)]">
              <span className="h-2 w-2 rounded-full bg-[#d9f271] ring-4 ring-[#d9f271]/30" />
              Kenyan-built digital solutions for modern business operations
            </p>

            <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-[#15171f] sm:text-6xl lg:text-7xl">
              Vektaedge Technologies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#15171f]/72 sm:text-xl">
              We build digital solutions that help businesses work faster, serve customers better, and grow with confidence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#company"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1e7a5f] px-6 py-3 text-sm font-extrabold !text-white shadow-[0_24px_80px_rgba(21,23,31,0.14)] transition hover:bg-[#15171f] hover:!text-white"
              >
                Explore the Company
                <ArrowIcon />
              </a>
              <a
                href="#shop-plus"
                className="inline-flex items-center justify-center rounded-md border border-[#15171f]/15 bg-white/72 px-6 py-3 text-sm font-extrabold text-[#15171f] transition hover:border-[#1e7a5f] hover:text-[#1e7a5f]"
              >
                View Shop+
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-12 h-24 w-24 rounded-md bg-[#c86b45]/15" />
            <div className="absolute -right-4 bottom-16 h-28 w-28 rounded-md bg-[#d9f271]/50" />
            <div className="relative rounded-lg border border-[#15171f]/10 bg-white/88 p-4 shadow-[0_24px_80px_rgba(21,23,31,0.14)] backdrop-blur">
              <div className="rounded-md bg-[#15171f] p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white/62">Technology Focus</span>
                  <span className="rounded-md bg-[#d9f271] px-2 py-1 text-xs font-black text-[#15171f]">
                    BUILT IN KENYA
                  </span>
                </div>
                <p className="mt-8 max-w-sm font-display text-3xl font-bold leading-tight">
                  We design digital systems that help businesses operate, scale, and serve better.
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {metrics.slice(0, 2).map(([label, value], index) => (
                  <div
                    key={label}
                    className={index === 0 ? 'rounded-md bg-[#eef2f0] p-4' : 'rounded-md bg-[#dbeafe] p-4'}
                  >
                    <p className={index === 0 ? 'font-display text-2xl font-black text-[#1e7a5f]' : 'font-display text-2xl font-black text-[#c86b45]'}>
                      {index === 0 ? 'Workflow Systems' : 'Customer Platforms'}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#15171f]/70">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-md border border-[#15171f]/10 bg-white p-4">
                <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-[#15171f]/45">
                  <span>how we work</span>
                  <span>built for growth</span>
                </div>
                <div className="h-2 rounded-full bg-[#eef2f0]">
                  <div className="h-2 w-4/5 rounded-full bg-[#1e7a5f]" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-[#15171f]/65">
                  {['Design', 'Build', 'Grow'].map((label) => (
                    <span key={label} className="rounded-md bg-[#eef2f0] py-2">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionLabel icon="company">Company</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#15171f] sm:text-5xl">
              Built by engineers, shaped around real-world business problems.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-[#15171f]/72">
            <p>
              Vektaedge Technologies brings together experienced engineers focused on building useful digital
              products for growing businesses.
            </p>
            <p>
              Our mission is to empower businesses and communities through technology that improves efficiency,
              strengthens customer engagement, and transforms everyday operations.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ['Practical', 'Solutions grounded in how teams and customers actually work.', 'border-[#1e7a5f] bg-[#eef2f0]'],
                ['Reliable', 'Engineering choices that support consistent service delivery.', 'border-[#c86b45] bg-[#fff4ed]'],
                ['Scalable', 'Systems designed to adapt as demand and ambition grow.', 'border-[#d9f271] bg-[#fbfee8]'],
              ].map(([title, body, style]) => (
                <div key={title} className={`border-l-4 p-5 ${style}`}>
                  <p className="font-display text-2xl font-black text-[#15171f]">{title}</p>
                  <p className="mt-2 text-sm leading-6">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="noise bg-[#15171f] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel icon="spark" tone="dark">
              Capabilities
            </SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Digital solutions that help businesses grow and work better.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article key={capability.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className={`mb-8 grid h-11 w-11 place-items-center rounded-md ${capability.accent}`}>
                  <Icon name={capability.icon} />
                </div>
                <p className="text-sm font-black text-white/38">{capability.id}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{capability.title}</h3>
                <p className="mt-4 leading-7 text-white/68">{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="shop-plus" className="overflow-hidden bg-[#eef2f0] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <SectionLabel icon="product">Featured Product</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#15171f] sm:text-5xl">
              <span className="text-[#5ABD79]">Shop+</span> helps small merchants turn receipts into repeat customer
              relationships.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#15171f]/72">
              <span className="font-semibold text-[#5ABD79]">Shop+</span> is a loyalty and receipt management platform
              for small and medium-sized businesses (SMEs) and small merchants. Customers earn points on purchases,
              redeem rewards, track receipts, and choose a package that fits their needs.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ['Reward every purchase', 'Points-based loyalty gives merchants a simple way to encourage return visits.'],
                ['Receipts customers can track', 'Digital history makes purchases easier to manage after checkout.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-md bg-white p-5 shadow-[0_1px_0_rgba(21,23,31,0.08)]">
                  <p className="font-bold text-[#15171f]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#15171f]/65">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-10 h-2 rounded-full bg-[#5ABD79]" />
            <div className="relative rounded-lg border border-[#15171f]/10 bg-white p-5 shadow-[0_24px_80px_rgba(21,23,31,0.14)]">
              <div className="rounded-md border border-[#15171f]/10 bg-white p-4">
                <Image
                  src="/shopplus-logo-green.png"
                  width={870}
                  height={390}
                  alt="ShopPlus logo"
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="mt-5 grid gap-3">
                <div className="flex items-center justify-between rounded-md bg-[#15171f] p-4 text-white">
                  <span className="text-sm font-bold text-white/70">Merchant loyalty engine</span>
                  <span className="rounded-md bg-[#5ABD79] px-2.5 py-1 text-xs font-black text-white">
                    Shop+
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ['Pts', 'Earn', 'bg-[#eef2f0] text-[#5ABD79]'],
                    ['Rwd', 'Redeem', 'bg-[#fff4ed] text-[#c86b45]'],
                    ['Rec', 'Track', 'bg-[#dbeafe] text-[#15171f]'],
                  ].map(([abbr, label, style]) => (
                    <div key={label} className={`rounded-md p-4 text-center ${style}`}>
                      <p className="font-display text-2xl font-black">{abbr}</p>
                      <p className="mt-1 text-xs font-bold text-[#15171f]/55">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="scanline h-px" />
                <p className="text-sm leading-6 text-[#15171f]/65">
                  Shop+ shows how Vektaedge builds practical tools for everyday business use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
            <SectionLabel icon="spark">Why Vektaedge</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#15171f] sm:text-5xl">
                Technology built to solve everyday business challenges.
            </h2>
            </div>
            <div className="grid gap-5">
              {differentiators.map(([title, body]) => (
                <div key={title} className="grid gap-4 border-t border-[#15171f]/10 pt-5 sm:grid-cols-[160px_1fr]">
                  <p className="font-display text-xl font-black text-[#15171f]">{title}</p>
                  <p className="leading-7 text-[#15171f]/70">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1e7a5f] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <SectionLabel icon="message" tone="dark">
              Contact
            </SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Let&apos;s build digital solutions that help your business grow.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="tel:+254729880880"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:border-[#15171f] hover:bg-[#15171f] hover:text-white"
            >
              <Icon name="phone" className="h-4 w-4" />
              +254 729 880 880
            </a>
            <a
              href="mailto:admin@vektaegde.tech"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:border-[#15171f] hover:bg-[#15171f] hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4" />
              admin@vektaegde.tech
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#15171f] px-5 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-white">Vektaedge Technologies</p>
          <p className="italic">&quot;Digital solutions that help businesses launch, grow, and perform better.&quot;</p>
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
    </main>
  );
}
