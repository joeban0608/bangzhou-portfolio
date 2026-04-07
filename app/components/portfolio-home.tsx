import Image from "next/image";
import Link from "next/link";
import { portfolioContent } from "@/app/lib/portfolio-content";
import joeAvatar from "@/joe/joe-avatar.jpg";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--color-accent-soft)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function PortfolioHome() {
  const { navigation, hero, about, skills, projects, experience, contact } =
    portfolioContent;

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(123,92,255,0.22),_transparent_42%),radial-gradient(circle_at_20%_20%,_rgba(96,165,250,0.24),_transparent_28%),linear-gradient(180deg,_rgba(5,10,28,0.92)_0%,_rgba(2,6,23,0.22)_48%,_transparent_100%)]" />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[rgba(3,7,18,0.7)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <Link
            href="#top"
            className="font-display text-sm uppercase tracking-[0.3em] text-white"
          >
            {portfolioContent.siteMeta.name}
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-text-muted)] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <details className="group md:hidden">
            <summary className="list-none rounded-full border border-white/15 px-4 py-2 text-sm text-white marker:content-none">
              導覽
            </summary>
            <div className="absolute right-6 top-16 w-52 rounded-2xl border border-white/10 bg-[rgba(7,11,24,0.96)] p-3 shadow-2xl shadow-black/40">
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm text-[var(--color-text-muted)] transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </header>

      <main id="top" className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-10 sm:px-8 sm:py-14">
        <section className="grid gap-10 pb-6 pt-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-start lg:gap-12 lg:pt-12">
          <div className="space-y-7 lg:max-w-[44rem] lg:pt-6">
            <div className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
              {hero.badge}
            </div>
            <div className="space-y-4">
              <p className="font-display text-sm uppercase tracking-[0.4em] text-[var(--color-accent-soft)]">
                {hero.subheadline}
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
                {hero.headline}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
                {hero.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={hero.primaryCta.href} className="button-primary">
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className="button-secondary">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="panel-card mx-auto w-full max-w-[26rem] p-5 sm:p-6 lg:mx-0">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                <div className="relative aspect-[5/6] max-h-[30rem]">
                  <Image
                    src={joeAvatar}
                    alt="洪邦洲個人頭像"
                    placeholder="blur"
                    priority
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Location</p>
                    <p className="mt-1 text-xl font-semibold text-white">Taipei, Taiwan</p>
                  </div>
                  <div className="h-14 w-14 rounded-full border border-white/15 bg-[radial-gradient(circle,_rgba(96,165,250,0.55),_rgba(59,130,246,0.08)_58%,_transparent_60%)]" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                    Core Stack
                  </p>
                  <p className="mt-3 text-base leading-7 text-white">
                    Next.js, React, TypeScript, Node.js
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                    Focus
                  </p>
                  <p className="mt-3 text-base leading-7 text-white">
                    Frontend, full-stack integration, cloud delivery
                  </p>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(15,23,42,0.86),rgba(49,46,129,0.34))] p-5">
                <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                  近年的工作重心涵蓋 AI SaaS 平台、OAuth 登入、SEO 自動化流程，以及 GCP、AWS、Cloudflare 上的部署與維運。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 space-y-8">
          <SectionHeading
            eyebrow="About"
            title="從需求理解到交付品質，我偏好完整地解決問題。"
            description="這個作品集的方向不是堆疊技能標籤，而是把我做產品時在意的判斷標準與工程習慣講清楚。"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {about.paragraphs.map((paragraph) => (
              <article key={paragraph} className="panel-card p-6">
                <p className="text-base leading-8 text-[var(--color-text-muted)]">
                  {paragraph}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 space-y-8">
          <SectionHeading
            eyebrow="Skills"
            title="技術能力集中在前端工程、介面系統與產品實作。"
            description="第一版先展示我主要的技術方向與工作方法，之後可再延伸更細的專案技術說明。"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {skills.map((group) => (
              <article key={group.category} className="panel-card p-6">
                <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 space-y-8">
          <SectionHeading
            eyebrow="Projects"
            title="作品展示聚焦於我如何把抽象概念轉成可交付成果。"
            description="這裡先以代表性主題呈現第一版內容，之後可以直接擴充為更完整的作品列表或獨立詳情頁。"
          />
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="panel-card grid gap-6 overflow-hidden p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:p-8"
              >
                <div className="space-y-4">
                  {project.image ? (
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="text-base leading-8 text-[var(--color-text-muted)]">
                    {project.summary}
                  </p>
                  <p className="text-sm text-white/80">{project.role}</p>
                </div>
                <div className="flex h-full flex-col justify-between gap-6 rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="inline-flex w-fit items-center text-sm text-[var(--color-accent-soft)] transition hover:text-white"
                  >
                    前往相關區塊
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 space-y-8">
          <SectionHeading
            eyebrow="Experience"
            title="經歷的重點不是頭銜，而是能持續產出穩定成果。"
            description="目前先以精簡時間軸呈現工作與實作方向，後續可替換為實際公司、角色與量化成果。"
          />
          <div className="space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="panel-card grid gap-6 p-6 lg:grid-cols-[0.3fr_1fr]"
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                    {item.period}
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {item.organization}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3">
                  {item.highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-base leading-7 text-[var(--color-text-muted)]"
                    >
                      {highlight}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 pb-12">
          <div className="panel-card overflow-hidden p-0">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-soft)]">
                  Contact
                </p>
                <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  如果你正在找能一起把產品做好的人，可以直接聯絡我。
                </h2>
                <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                  第一版先保留最直接的聯絡入口。未來若需要，也可以延伸成表單、作品詳情頁與更多技術文章內容。
                </p>
              </div>
              <div className="grid gap-4">
                {contact.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 transition hover:border-[var(--color-border-strong)] hover:bg-white/8"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base text-white">{item.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
