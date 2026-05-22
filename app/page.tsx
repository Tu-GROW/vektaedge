import Image from 'next/image';

const capabilities = [
  {
    id: '01',
    title: 'Software Engineering',
    body: 'Custom platforms, internal tools, and product experiences built around clear business workflows.',
    accent: 'bg-[#d9f271] text-[#15171f]',
  },
  {
    id: '02',
    title: 'DevOps & Infrastructure',
    body: 'Deployment pipelines, operational foundations, and environments prepared for reliability and scale.',
    accent: 'bg-[#c86b45] text-white',
  },
  {
    id: '03',
    title: 'Mobile Applications',
    body: 'Mobile-first systems for customers, field teams, merchants, and communities that need simple access.',
    accent: 'bg-[#dbeafe] text-[#15171f]',
  },
];

const metrics = [
  ['Build', 'Product systems'],
  ['Deploy', 'Cloud-ready operations'],
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

function CodeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-white text-[#22242d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Vektaedge Technologies home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#15171f] text-sm font-black text-[#d9f271]">
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
            className="inline-flex items-center gap-2 rounded-md bg-[#15171f] px-4 py-2 text-sm font-bold text-white shadow-[0_1px_0_rgba(21,23,31,0.08)] transition hover:bg-[#1e7a5f]"
          >
            Start a conversation
          </a>
        </nav>
      </header>

      <section className="hero-surface relative min-h-screen overflow-hidden pt-28">
        <div className="tech-grid absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#15171f]/10 bg-white/70 px-4 py-2 text-sm font-bold text-[#1e7a5f] shadow-[0_1px_0_rgba(21,23,31,0.08)]">
              <span className="h-2 w-2 rounded-full bg-[#d9f271] ring-4 ring-[#d9f271]/30" />
              Kenyan-built technology for real business operations
            </p>

            <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-[#15171f] sm:text-6xl lg:text-7xl">
              Vektaedge Technologies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#15171f]/72 sm:text-xl">
              We build practical, reliable, and scalable digital solutions that help businesses work faster,
              serve customers better, and grow with confidence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#company"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1e7a5f] px-6 py-3 text-sm font-extrabold text-white shadow-[0_24px_80px_rgba(21,23,31,0.14)] transition hover:bg-[#15171f]"
              >
                Explore the company
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
                  <span className="text-sm font-bold text-white/62">System brief</span>
                  <span className="rounded-md bg-[#d9f271] px-2 py-1 text-xs font-black text-[#15171f]">
                    LIVE
                  </span>
                </div>
                <p className="mt-8 max-w-sm font-display text-3xl font-bold leading-tight">
                  Quality software and scalable technology built for business impact.
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {metrics.slice(0, 2).map(([label, value], index) => (
                  <div
                    key={label}
                    className={index === 0 ? 'rounded-md bg-[#eef2f0] p-4' : 'rounded-md bg-[#dbeafe] p-4'}
                  >
                    <p className={index === 0 ? 'text-3xl font-black text-[#1e7a5f]' : 'text-3xl font-black text-[#c86b45]'}>
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#15171f]/70">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-md border border-[#15171f]/10 bg-white p-4">
                <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-[#15171f]/45">
                  <span>delivery model</span>
                  <span>scale-ready</span>
                </div>
                <div className="h-2 rounded-full bg-[#eef2f0]">
                  <div className="h-2 w-4/5 rounded-full bg-[#1e7a5f]" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-[#15171f]/65">
                  {metrics.map(([label]) => (
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1e7a5f]">Company</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#15171f] sm:text-5xl">
              Built by engineers, shaped around real-world business problems.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-[#15171f]/72">
            <p>
              Vektaedge Technologies brings together experienced software, DevOps, and mobile application
              engineers with a shared focus on digital products that are useful, durable, and ready for growth.
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d9f271]">Capabilities</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              End-to-end technical depth for products that need to work in the field.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <article key={capability.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div className={`mb-8 grid h-11 w-11 place-items-center rounded-md ${capability.accent}`}>
                  <CodeIcon />
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1e7a5f]">Featured Product</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#15171f] sm:text-5xl">
              Shop+ helps small merchants turn receipts into repeat customer relationships.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#15171f]/72">
              Shop+ is a loyalty and receipt management platform for SMEs and small merchants. Customers earn
              points on purchases, redeem rewards, track receipts, and unlock enhanced benefits through flexible
              subscription packages.
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
            <div className="absolute inset-x-8 top-10 h-2 rounded-full bg-[#d9f271]" />
            <div className="relative rounded-lg border border-[#15171f]/10 bg-white p-5 shadow-[0_24px_80px_rgba(21,23,31,0.14)]">
              <div className="rounded-md border border-[#15171f]/10 bg-white p-4">
                <Image
                  src="/shopplus-logo.png"
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
                  <span className="rounded-md bg-[#d9f271] px-2.5 py-1 text-xs font-black text-[#15171f]">
                    Shop+
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ['Pts', 'Earn', 'bg-[#eef2f0] text-[#1e7a5f]'],
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
                  A product expression of Vektaedge’s broader mission: accessible technology that improves
                  everyday business operations.
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
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1e7a5f]">Why Vektaedge</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#15171f] sm:text-5xl">
                Innovation with operational discipline.
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d9f271]">Contact</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Let&apos;s build technology that earns its place in the business.
            </h2>
          </div>
          <a
            href="#top"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-extrabold text-[#1e7a5f] transition hover:bg-[#d9f271] hover:text-[#15171f]"
          >
            Start a conversation
            <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="bg-[#15171f] px-5 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-white">Vektaedge Technologies</p>
          <p>Software, DevOps, and mobile application engineering from Kenya.</p>
        </div>
      </footer>
    </main>
  );
}
