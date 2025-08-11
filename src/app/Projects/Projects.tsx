'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    title: 'kader_qui_gere',
    description: 'kader_qui_gere_desc',
    image: '/Images/k-gere.png',
    technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'PWA', 'TailwindCSS'],
    link: 'https://kader-qui-gere.vercel.app/auth/signin',
    caseStudy: '/case-studies/kader-qui-gere',
    githubUrl: 'https://github.com/abdallah96/kader-qui-gere',
    role: 'Full‑stack (Lead)',
    team: 'Solo (consulted 1 stakeholder)',
    period: '2023–2024',
    impacts: ['+55% order speed', 'Offline-first PWA', 'Multi-restaurant ready'],
    problem: 'Manual ordering and fragmented workflows slowed restaurant service.',
    actions: ['Designed PWA architecture with offline sync', 'Implemented real-time order flows', 'Added multi-tenant data model with CFA support'],
  },
  {
    title: 'devtrackr',
    description: 'devtrackr_desc',
    image: '/Images/devtrackr-dashboard.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'Headless UI', 'Vercel', 'PWA'],
    link: 'https://devtrackr-ag.vercel.app',
    caseStudy: '/case-studies/devtrackr',
    githubUrl: 'https://github.com/abdallah96/devtrackr',
    role: 'Full‑stack (Owner)',
    team: 'Solo',
    period: '2024',
    impacts: ['+30% weekly completion', 'Focus mode UX', 'Mobile PWA'],
    problem: 'Developers lacked a simple way to track tasks and time together.',
    actions: ['Shipped unified tasks+time model', 'Built analytics and weekly reports', 'Optimized mobile-first interactions'],
  },
  {
    title: 'keurgui',
    description: 'keurgui_desc',
    image: '/Images/keurguirestaurant.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React', 'AWS'],
    link: 'https://keurguirestaurant.com',
    caseStudy: '/case-studies/keur-gui',
    role: 'Frontend',
    team: '2 devs',
    period: '2022',
    impacts: ['+40% menu views', 'SEO‑friendly', 'Fast LCP'],
    problem: 'Site needed to showcase menu and weekly specials with speed.',
    actions: ['Implemented SSG for core pages', 'Built specials schedule UX', 'Added image optimization and caching'],
  },
  {
    title: 'realestate',
    description: 'realestate_desc',
    image: '/Images/atlanticimmo.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Next JS'],
    link: 'https://seradi.vercel.app',
    role: 'Frontend',
    team: 'Solo',
    period: '2021',
    impacts: ['Faster browsing', 'Clean property filters'],
    problem: 'Users struggled to navigate listings with slow filtering.',
    actions: ['Built performant filter UI', 'Added skeleton loading states', 'Optimized list virtualization'],
  },
  {
    title: 'agro',
    description: 'agro_desc',
    image: '/Images/am-agrotradeservices.png',
    technologies: ['React', 'Sanity.io', 'Tailwind CSS', 'Next JS'],
    link: 'https://am-agrotradeservices.de',
    role: 'Full‑stack',
    team: 'Solo',
    period: '2021',
    impacts: ['Clear product catalog', 'Editable CMS'],
    problem: 'Company needed a maintainable site to present services/products.',
    actions: ['Integrated Sanity CMS', 'Created product schemas', 'Built simple, fast pages'],
  },
];

function ClientProjects() {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState<Set<string>>(new Set());
  // WOW layout: sticky list + spotlight
  const [sortBy, setSortBy] = React.useState<'project' | 'role' | 'team' | 'period' | 'highlight'>('project');
  const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('asc');
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const [leftFade, setLeftFade] = React.useState(false);
  const [rightFade, setRightFade] = React.useState(false);
  const [headerShadow, setHeaderShadow] = React.useState(false);
  const [selected, setSelected] = React.useState<Set<string>>(new Set());
  const [compareSelectedOnly, setCompareSelectedOnly] = React.useState(false);
  const sortedProjects = React.useMemo(() => {
    const copy = [...projects];
    const compare = (a: string | undefined, b: string | undefined) => {
      const av = (a || '').toLowerCase();
      const bv = (b || '').toLowerCase();
      if (av < bv) return -1;
      if (av > bv) return 1;
      return 0;
    };
    copy.sort((a, b) => {
      let res = 0;
      if (sortBy === 'project') res = compare(a.title, b.title);
      if (sortBy === 'role') res = compare(a.role, b.role);
      if (sortBy === 'team') res = compare(a.team, b.team);
      if (sortBy === 'period') res = compare(a.period, b.period);
      if (sortBy === 'highlight') res = compare(a.impacts?.[0], b.impacts?.[0]);
      return sortDir === 'asc' ? res : -res;
    });
    return copy;
  }, [sortBy, sortDir]);
  React.useEffect(() => {
    if (selectedIndex >= sortedProjects.length) setSelectedIndex(0);
  }, [sortedProjects.length, selectedIndex]);
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setSelectedIndex((i) => (i + 1) % sortedProjects.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((i) => (i - 1 + sortedProjects.length) % sortedProjects.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [sortedProjects.length]);

  // comparison scroll fades
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const sync = () => {
      setLeftFade(el.scrollLeft > 0);
      setRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    sync();
    el.addEventListener('scroll', sync, { passive: true });
    return () => el.removeEventListener('scroll', sync);
  }, []);

  React.useEffect(() => {
    const onWinScroll = () => {
      const host = scrollRef.current;
      if (!host) return;
      const top = host.getBoundingClientRect().top;
      setHeaderShadow(top <= 80);
    };
    onWinScroll();
    window.addEventListener('scroll', onWinScroll, { passive: true });
    return () => window.removeEventListener('scroll', onWinScroll);
  }, []);

  const displayedForCompare = React.useMemo(() => {
    if (compareSelectedOnly && selected.size > 0) {
      return sortedProjects.filter((p) => selected.has(p.title));
    }
    return sortedProjects;
  }, [sortedProjects, compareSelectedOnly, selected]);

  const toggleSelect = (title: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title); else next.add(title);
      return next;
    });
  };
  const toggle = (key: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  return (
    <section id="projects" className="py-10 md:py-14">
      <div className="container mx-auto">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">{t('projects.title')}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-2 text-sm text-muted-foreground">{projects.length} projects • {t('projects.description')}</p>
        </div>
        

        {/* WOW Split: Sticky list + Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Left: sticky list */}
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-2">
              {sortedProjects.map((p, i) => (
                <button
                  key={`sel-${p.title}`}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className={`w-full text-left rounded-xl border p-3 bg-background/60 hover:bg-primary/5 transition-colors ${i === selectedIndex ? 'border-primary bg-primary/5' : ''}`}
                  aria-current={i === selectedIndex}
                >
                  <div className="flex items-center gap-3 justify-between">
                    <div className="relative w-14 h-10 rounded-md overflow-hidden bg-muted/20">
                      <Image src={p.image} alt={t(`projects.${p.title}_title`)} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-foreground truncate">{t(`projects.${p.title}_title`)}</div>
                      <div className="text-[11px] text-muted-foreground truncate">{p.role} • {p.period}</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={selected.has(p.title)}
                      onChange={(e) => { e.stopPropagation(); toggleSelect(p.title); }}
                      className="ml-2 accent-[var(--primary)]"
                      aria-label="Select for comparison"
                    />
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Right: spotlight */}
          <div className="md:col-span-8">
            {sortedProjects.map((p, i) => (
              <div key={`spot-${p.title}`} className={`${i === selectedIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none h-0 overflow-hidden'} transition-opacity duration-300`}>
                <article className="rounded-3xl border overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
                  <div className="relative w-full h-56 sm:h-72 md:h-80">
                    <Image src={p.image} alt={t(`projects.${p.title}_title`)} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold drop-shadow">{t(`projects.${p.title}_title`)}</h3>
                        <p className="text-sm md:text-base text-muted-foreground mt-1 max-w-2xl">{t(`projects.${p.description}`)}</p>
                      </div>
                      <div className="hidden sm:flex flex-wrap gap-1.5">
                        {p.impacts?.slice(0, 3).map((impact) => (
                          <span key={impact} className="px-2 py-0.5 rounded-full text-[11px] bg-background/70 border">{impact}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded-full text-[11px] bg-white/5 border">Role: {p.role}</span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] bg-white/5 border">Team: {p.team}</span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] bg-white/5 border">Timeline: {p.period}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 6).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-full text-[11px] bg-primary/10 text-primary border border-primary/20">{tech}</span>
                      ))}
                      {p.technologies.length > 6 && (
                        <span className="px-2 py-0.5 rounded-full text-[11px] bg-white/5 border">+{p.technologies.length - 6}</span>
                      )}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.link && (
                        <Link href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm hover:bg-primary/90">{t('common.view_live')}</Link>
                      )}
                      {p.caseStudy && (
                        <Link href={p.caseStudy} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 text-foreground text-sm border border-white/20 hover:border-primary/30">{t('projects.case_study')}</Link>
                      )}
                      {p.githubUrl && (
                        <Link href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 text-foreground text-sm border border-white/20 hover:border-primary/30">{t('common.view_code')}</Link>
                      )}
                      <button type="button" onClick={() => toggle(p.title)} className="ml-auto inline-flex items-center gap-1 px-3 py-1.5 rounded-md border text-sm hover:bg-primary/10" aria-expanded={open.has(p.title)} aria-controls={`summary-${p.title}`}>{open.has(p.title) ? 'Hide 60s summary' : 'Read 60s summary'}</button>
                    </div>
                    {open.has(p.title) && (
                      <div id={`summary-${p.title}`} className="mt-3 rounded-md border bg-background/70 p-3">
                        <div className="text-sm">
                          <p className="font-semibold text-foreground">Problem</p>
                          <p className="text-muted-foreground">{p.problem}</p>
                          <p className="mt-2 font-semibold text-foreground">Actions</p>
                          <ul className="list-disc pl-5 text-muted-foreground">{p.actions?.map((a) => (<li key={a}>{a}</li>))}</ul>
                          <p className="mt-2 font-semibold text-foreground">Impact</p>
                          <ul className="list-disc pl-5 text-muted-foreground">{p.impacts?.map((i) => (<li key={i}>{i}</li>))}</ul>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison matrix */}
        <div className="mt-8 md:mt-10">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-3">Quick comparison</h3>
          <div className="mb-3 flex items-center justify-center gap-3 text-xs md:text-sm">
            <label className="inline-flex items-center gap-2 select-none">
              <input type="checkbox" className="accent-[var(--primary)]" checked={compareSelectedOnly} onChange={(e) => setCompareSelectedOnly(e.target.checked)} />
              Compare only selected{selected.size > 0 ? ` (${selected.size})` : ''}
            </label>
          </div>
          {/* Premium compare table */}
          <div className="relative hidden md:block">
            {/* Edge fades */}
            {leftFade && <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-background to-transparent rounded-l-xl" />}
            {rightFade && <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-background to-transparent rounded-r-xl" />}

            <div ref={scrollRef} className="overflow-x-auto rounded-2xl border">
              <div className="min-w-[980px]">
                {/* Header */}
                <div ref={headerRef} className={`grid grid-cols-[minmax(260px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(220px,1fr)] sticky top-0 z-10 ${headerShadow ? 'shadow-md' : ''}`}>
                  <button onClick={() => { setSortDir(sortBy === 'project' ? (sortDir === 'asc' ? 'desc' : 'asc') : sortDir); setSortBy('project'); }} className="sticky left-0 z-20 bg-background/90 backdrop-blur border-b border-r px-4 py-3 text-left font-semibold">🧩 Project {sortBy === 'project' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</button>
                  <button onClick={() => { setSortDir(sortBy === 'role' ? (sortDir === 'asc' ? 'desc' : 'asc') : sortDir); setSortBy('role'); }} className="bg-background/90 backdrop-blur border-b px-4 py-3 text-left font-semibold">👤 Role {sortBy === 'role' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</button>
                  <button onClick={() => { setSortDir(sortBy === 'team' ? (sortDir === 'asc' ? 'desc' : 'asc') : sortDir); setSortBy('team'); }} className="bg-background/90 backdrop-blur border-b px-4 py-3 text-left font-semibold">👥 Team {sortBy === 'team' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</button>
                  <button onClick={() => { setSortDir(sortBy === 'period' ? (sortDir === 'asc' ? 'desc' : 'asc') : sortDir); setSortBy('period'); }} className="bg-background/90 backdrop-blur border-b px-4 py-3 text-left font-semibold">🗓 Period {sortBy === 'period' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</button>
                  <button onClick={() => { setSortDir(sortBy === 'highlight' ? (sortDir === 'asc' ? 'desc' : 'asc') : sortDir); setSortBy('highlight'); }} className="bg-background/90 backdrop-blur border-b px-4 py-3 text-left font-semibold">⭐ Highlight {sortBy === 'highlight' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</button>
                </div>

                {/* Rows */}
                <div className="">
                  {displayedForCompare.map((p, idx) => (
                    <div key={`row-${p.title}`} className={`relative grid grid-cols-[minmax(260px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(220px,1fr)] ${idx % 2 === 0 ? 'bg-white/3' : ''}`}>
                      <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      {/* Sticky first col */}
                      <div className="sticky left-0 z-10 bg-background/90 backdrop-blur border-r px-4 py-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative w-12 h-9 rounded-md overflow-hidden bg-muted/20 flex-shrink-0">
                            <Image src={p.image} alt={t(`projects.${p.title}_title`)} fill className="object-cover" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium truncate">{t(`projects.${p.title}_title`)}</div>
                            <div className="text-xs text-muted-foreground truncate">{p.period}</div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded-full text-[11px] bg-white/5 border">{p.role}</span>
                      </div>
                      <div className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded-full text-[11px] bg-white/5 border">{p.team}</span>
                      </div>
                      <div className="px-4 py-3">{p.period}</div>
                      <div className="px-4 py-3">
                        <div className="flex flex-wrap gap-1.5">
                          {p.impacts?.slice(0, 2).map((impact) => (
                            <span key={impact} className="px-2 py-0.5 rounded-full text-[11px] bg-primary/10 text-primary border border-primary/20">{impact}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden space-y-2">
            {sortedProjects.map((p) => (
              <div key={`m-${p.title}`} className="rounded-xl border p-3 text-sm">
                <div className="font-medium">{t(`projects.${p.title}_title`)}</div>
                <div className="mt-1 text-muted-foreground">{t(`projects.${p.description}`)}</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 border">{p.role}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 border">{p.team}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 border">{p.period}</span>
                </div>
                <div className="mt-2 text-foreground">{p.impacts?.[0]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return <ClientProjects />;
}