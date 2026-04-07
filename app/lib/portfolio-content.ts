import type { StaticImageData } from "next/image";
import extendProjects from "@/joe/2026-extend-projects.json";
import resume from "@/joe/joe-resume.json";
import aboutMeAvatar from "@/joe/project-avatars/about-me.webp";
import crownShopAvatar from "@/joe/project-avatars/crown-shop.png";
import devSnippetAvatar from "@/joe/project-avatars/dev-snippet.png";
import familyLaundryAvatar from "@/joe/project-avatars/family-laundry.webp";
import robotFriendAvatar from "@/joe/project-avatars/robot-friend.webp";
import seoFlowAvatar from "@/joe/project-avatars/seo-flow.webp";
import smartBrainAvatar from "@/joe/project-avatars/smart-brain.webp";
import superClinicAvatar from "@/joe/project-avatars/super-clinic.png";

export type LinkItem = {
  label: string;
  value: string;
  href: string;
};

export type HeroContent = {
  headline: string;
  subheadline: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  badge: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectItem = {
  slug: string;
  name: string;
  summary: string;
  role: string;
  techStack: string[];
  href: string;
  linkLabel: string;
  period?: string;
  highlights: string[];
  image?: {
    src: StaticImageData;
    alt: string;
  };
};

export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  highlights: string[];
};

export type PortfolioContent = {
  siteMeta: {
    name: string;
    title: string;
    description: string;
    locale: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  hero: HeroContent;
  about: {
    paragraphs: string[];
  };
  skills: SkillGroup[];
  projects: ProjectItem[];
  allProjects: ProjectItem[];
  experience: ExperienceItem[];
  contact: LinkItem[];
};

function formatPeriod(start?: string, end?: string) {
  if (!start) {
    return end ?? "未提供";
  }

  const formattedStart = start.replace("-", ".");
  const formattedEnd =
    end && end !== "至今" ? end.replace("-", ".") : (end ?? "至今");

  return `${formattedStart} - ${formattedEnd}`;
}

function createSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type ResumeProject = (typeof resume.projects)[number];
type ExtendProject = (typeof extendProjects)[number];
type SourceProject = ResumeProject | ExtendProject;
type SortableProject = SourceProject & {
  homeSortOrder?: number;
  portfolioSortOrder?: number;
  sortOrder?: number;
};

const { basics, experience, projects } = resume;

const projectImageByName: Record<string, StaticImageData> = {
  "My portfolio": aboutMeAvatar,
  MyRobotFriends: robotFriendAvatar,
  "smart-brain-api": smartBrainAvatar,
  "crown-clothing": crownShopAvatar,
  "Dev Snippet Manager": devSnippetAvatar,
  家庭預約洗衣系統: familyLaundryAvatar,
  "SaaS 平台 — AI 自動建立網站 (SEO Flow)": seoFlowAvatar,
  "Super Clinic": superClinicAvatar,
};

function createProjectRole(type: string) {
  if (type === "公司內部 SaaS 平台") {
    return "AI SaaS 平台開發、內容生成流程、部署與雲端整合";
  }

  if (type === "side project") {
    return "Side project 規劃、功能設計、整合實作";
  }

  if (type === "個人作品集") {
    return "個人品牌定位、內容編排與前端呈現";
  }

  if (type === "fullstack app / auth system") {
    return "認證流程設計、權限控管與全端架構實作";
  }

  if (type === "product prototype / UX demo") {
    return "產品原型規劃、資訊架構與 AI 輔助互動設計";
  }

  return "前後端整合、功能實作、專案部署";
}

function createProjectHref(project: SourceProject) {
  if ("links" in project && project.links?.github) {
    return project.links.github;
  }

  return "/#contact";
}

function createProjectLinkLabel(project: SourceProject) {
  if ("links" in project && project.links?.github) {
    return "查看專案連結";
  }

  return "聯絡我了解更多";
}

function createProjectPeriod(project: SourceProject) {
  if ("start" in project || "end" in project) {
    return formatPeriod(project.start, project.end);
  }

  return undefined;
}

function getProjectSortOrder(
  project: SortableProject,
  key: "homeSortOrder" | "portfolioSortOrder",
) {
  if (key in project && typeof project[key] === "number") {
    return project[key];
  }

  if ("sortOrder" in project && typeof project.sortOrder === "number") {
    return project.sortOrder;
  }

  return Number.MAX_SAFE_INTEGER;
}

const mappedExperience = experience.map((item) => ({
  period: formatPeriod(item.start, item.end),
  title: item.role,
  organization: item.company,
  highlights: item.highlights.slice(0, 2),
}));

const combinedProjects: SortableProject[] = [...projects, ...extendProjects];

const sortedPortfolioProjects = combinedProjects
  .map((item, index) => ({ item, index }))
  .sort((left, right) => {
    const sortOrderDiff =
      getProjectSortOrder(left.item, "portfolioSortOrder") -
      getProjectSortOrder(right.item, "portfolioSortOrder");

    if (sortOrderDiff !== 0) {
      return sortOrderDiff;
    }

    return left.index - right.index;
  })
  .map(({ item }) => item);

const mappedProjects: ProjectItem[] = sortedPortfolioProjects.map((item) => ({
  slug: createSlug(item.name),
  name: item.name,
  summary: item.description,
  role: createProjectRole(item.type),
  techStack: item.techStack.slice(0, 5),
  href: createProjectHref(item),
  linkLabel: createProjectLinkLabel(item),
  period: createProjectPeriod(item),
  highlights: item.highlights.slice(0, 4),
  image: projectImageByName[item.name]
    ? {
        src: projectImageByName[item.name],
        alt: `${item.name} 專案畫面`,
      }
    : undefined,
}));

const homeSortedProjects = combinedProjects
  .map((item, index) => ({ item, index }))
  .sort((left, right) => {
    const sortOrderDiff =
      getProjectSortOrder(left.item, "homeSortOrder") -
      getProjectSortOrder(right.item, "homeSortOrder");

    if (sortOrderDiff !== 0) {
      return sortOrderDiff;
    }

    return left.index - right.index;
  })
  .map(({ item }) => item);

const mappedProjectBySlug = new Map(
  mappedProjects.map((item) => [item.slug, item]),
);

const featuredProjects = homeSortedProjects.some(
  (item) =>
    getProjectSortOrder(item, "homeSortOrder") !== Number.MAX_SAFE_INTEGER,
)
  ? homeSortedProjects
      .filter(
        (item) =>
          getProjectSortOrder(item, "homeSortOrder") !==
          Number.MAX_SAFE_INTEGER,
      )
      .slice(0, 3)
      .map((item) => mappedProjectBySlug.get(createSlug(item.name)))
      .filter((item): item is ProjectItem => item !== undefined)
  : [
      mappedProjectBySlug.get(
        createSlug("SaaS 平台 — AI 自動建立網站 (SEO Flow)"),
      ),
      mappedProjectBySlug.get(createSlug("crown-clothing")),
      mappedProjectBySlug.get(createSlug("smart-brain-api")),
    ].filter((item): item is ProjectItem => item !== undefined);

const allProjects = mappedProjects.map((item) => ({
  ...item,
  href:
    item.href.startsWith("http") || item.href.startsWith("/")
      ? item.href
      : `/projects#${item.slug}`,
}));

export const portfolioContent: PortfolioContent = {
  siteMeta: {
    name: basics.name,
    title: `${basics.name} | 前端 / 全端工程師作品集`,
    description:
      "洪邦洲的個人作品集，整理前端與全端開發經驗，涵蓋 Next.js、React、TypeScript、Node.js、雲端部署與 AI SaaS 平台實作。",
    locale: "zh-Hant",
  },
  navigation: [
    { label: "關於我", href: "#about" },
    { label: "技能", href: "#skills" },
    { label: "作品", href: "#projects" },
    { label: "經歷", href: "#experience" },
    { label: "聯絡", href: "#contact" },
  ],
  hero: {
    badge: "Frontend / Full-stack Engineer",
    headline: "把前端體驗、系統整合與交付效率整成同一件事。",
    subheadline: basics.name,
    description:
      "我有前端與全端開發經驗，熟悉 React、Next.js、TypeScript、Node.js 與雲端部署流程，做過產品需求分析、前後端整合、AI SaaS 平台開發與實際上線維運。",
    primaryCta: {
      label: "查看作品",
      value: "Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "聯絡我",
      value: "Contact",
      href: "#contact",
    },
  },
  about: {
    paragraphs: [
      "我目前定位在前端與全端交界，能從介面實作一路處理 API 串接、資料流、部署與正式環境配置，不把問題只留在單一層。",
      "過去的工作內容涵蓋 Next.js、React、Svelte、Node.js 與 GCP / AWS / Cloudflare 等雲端服務，也包含 OAuth 登入、SEO 架構、廣告與分析工具整合。",
      "除了寫功能，我也習慣參與需求分析、跨部門溝通與新人協作，目標是把系統做成可以持續交付、持續擴充，而不是只完成當下版本。",
    ],
  },
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Svelte",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend & Data",
      items: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MySQL",
        "GraphQL",
        "Web Scraping",
      ],
    },
    {
      category: "Cloud & Delivery",
      items: [
        "GCP",
        "AWS",
        "Docker",
        "Kubernetes",
        "Cloudflare",
        "SEO / Analytics",
      ],
    },
  ],
  projects: featuredProjects.map((item) => ({
    ...item,
    href: `/projects#${item.slug}`,
    linkLabel: "查看這個作品",
  })),
  allProjects,
  experience: mappedExperience,
  contact: [
    {
      label: "Email",
      value: basics.email,
      href: `mailto:${basics.email}`,
    },
    {
      label: "Phone",
      value: basics.phone,
      href: `tel:${basics.phone.replace(/-/g, "")}`,
    },
    {
      label: "Location",
      value: `${basics.location.city}${basics.location.district}`,
      href: `https://www.google.com/maps/search/${encodeURIComponent(
        `${basics.location.city}${basics.location.district}`,
      )}`,
    },
  ],
};
