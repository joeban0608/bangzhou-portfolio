import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/app/lib/portfolio-content";

export function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const isExternalLink = project.href.startsWith("http");

  return (
    <article className="panel-card grid gap-6 overflow-hidden p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:p-8">
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
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          {project.period ? (
            <span className="text-xs uppercase tracking-[0.22em] text-white/45">
              {project.period}
            </span>
          ) : null}
        </div>
        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
        <p className="text-base leading-8 text-[var(--color-text-muted)]">
          {project.summary}
        </p>
        <p className="text-sm text-white/80">{project.role}</p>
      </div>
      <div className="flex h-full flex-col justify-between gap-6 rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <div className="grid gap-3">
            {project.highlights.map((highlight) => (
              <p
                key={highlight}
                className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm leading-7 text-[var(--color-text-muted)]"
              >
                {highlight}
              </p>
            ))}
          </div>
        </div>
        <Link
          href={project.href}
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noopener noreferrer" : undefined}
          className="inline-flex w-fit items-center text-sm text-[var(--color-accent-soft)] transition hover:text-white"
        >
          {project.linkLabel}
        </Link>
      </div>
    </article>
  );
}
