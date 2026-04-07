import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/app/components/project-card";
import { SectionHeading } from "@/app/components/section-heading";
import { portfolioContent } from "@/app/lib/portfolio-content";

export const metadata: Metadata = {
  title: `作品集 | ${portfolioContent.siteMeta.name}`,
  description: "洪邦洲的完整作品列表，收錄代表專案、技術堆疊與實作重點。",
};

export default function ProjectsPage() {
  const { allProjects, siteMeta } = portfolioContent;

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(123,92,255,0.2),_transparent_40%),radial-gradient(circle_at_20%_20%,_rgba(96,165,250,0.2),_transparent_28%),linear-gradient(180deg,_rgba(5,10,28,0.92)_0%,_rgba(2,6,23,0.22)_48%,_transparent_100%)]" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-sm uppercase tracking-[0.3em] text-white"
          >
            {siteMeta.name}
          </Link>
          <Link href="/#projects" className="button-secondary">
            回首頁
          </Link>
        </div>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="完整作品集"
            description="首頁保留最重要的三個代表作，這裡補上完整專案列表，方便快速瀏覽題目、技術與實作重點。"
          />
          <div className="grid gap-5">
            {allProjects.map((project, index) => (
              <div key={project.slug} id={project.slug} className="scroll-mt-24">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
