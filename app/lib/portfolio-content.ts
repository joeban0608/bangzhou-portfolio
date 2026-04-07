import resume from "@/joe/joe-resume.json";

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
  experience: ExperienceItem[];
  contact: LinkItem[];
};

function formatPeriod(start?: string, end?: string) {
  if (!start) {
    return end ?? "未提供";
  }

  const formattedStart = start.replace("-", ".");
  const formattedEnd =
    end && end !== "至今" ? end.replace("-", ".") : end ?? "至今";

  return `${formattedStart} - ${formattedEnd}`;
}

function createSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const { basics, experience, projects } = resume;

const featuredExperience = experience.slice(0, 3).map((item) => ({
  period: formatPeriod(item.start, item.end),
  title: item.role,
  organization: item.company,
  highlights: item.highlights.slice(0, 2),
}));

const featuredProjects = [
  projects.find((item) => item.name.includes("SEO Flow")),
  projects.find((item) => item.name.includes("家庭預約洗衣系統")),
  projects.find((item) => item.name.includes("smart-brain-api")),
]
  .filter((item): item is (typeof projects)[number] => Boolean(item))
  .map((item) => ({
    slug: createSlug(item.name),
    name: item.name,
    summary: item.description,
    role:
      item.type === "公司內部 SaaS 平台"
        ? "AI SaaS 平台開發、內容生成流程、部署與雲端整合"
        : item.type === "side project"
          ? "Side project 規劃、功能設計、整合實作"
          : "前後端整合、功能實作、專案部署",
    techStack: item.techStack.slice(0, 4),
    href: "#contact",
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
  projects: featuredProjects,
  experience: featuredExperience,
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
        `${basics.location.city}${basics.location.district}`
      )}`,
    },
  ],
};
