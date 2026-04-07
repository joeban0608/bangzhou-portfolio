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

export const portfolioContent: PortfolioContent = {
  siteMeta: {
    name: "Hong Bangzhou",
    title: "洪邦洲 | 軟體工程師作品集",
    description:
      "洪邦洲的軟體工程師個人作品集，聚焦前端工程、產品實作、技術選型與可維護的使用者體驗設計。",
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
    badge: "Software Engineer Portfolio",
    headline: "打造能落地、可維護、而且有辨識度的數位產品。",
    subheadline: "洪邦洲",
    description:
      "專注於 Next.js、前端體驗與產品工程，重視介面敘事、系統化實作與長期可維護性。這裡整理了我的代表作品、技術能力與實作思路。",
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
      "我是一名以產品實作為核心的軟體工程師，習慣從需求、資訊架構、互動細節到交付品質一路推進，而不只停留在單點功能完成。",
      "我偏好使用現代前端技術建立清晰、可擴充的介面系統，並在效能、可讀性與維護成本之間做出務實取捨。",
      "對我來說，好的工程不是堆砌技術名詞，而是把複雜度整理成團隊與使用者都能持續受益的成果。",
    ],
  },
  skills: [
    {
      category: "Frontend",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "App Router",
        "Responsive UI",
      ],
    },
    {
      category: "Product Engineering",
      items: [
        "Design Systems",
        "SEO Basics",
        "Accessibility",
        "Performance Tuning",
        "Component Architecture",
      ],
    },
    {
      category: "Tooling",
      items: [
        "ESLint",
        "Git",
        "Vercel",
        "CI/CD",
        "Content Modeling",
      ],
    },
  ],
  projects: [
    {
      slug: "portfolio-platform",
      name: "個人品牌與作品集網站",
      summary:
        "以單頁敘事為核心，建立可快速理解個人定位、作品與經歷的展示站，兼顧視覺辨識度與維護便利性。",
      role: "產品設計、前端架構、UI 實作",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Metadata"],
      href: "#contact",
    },
    {
      slug: "ui-system",
      name: "可擴充的介面元件與內容模型",
      summary:
        "將首頁內容拆成結構化資料與區塊元件，為後續新增雙語、作品詳情頁或 CMS 串接保留空間。",
      role: "資料建模、元件拆分、前端規劃",
      techStack: ["TypeScript", "Content Modeling", "Component Design"],
      href: "#skills",
    },
    {
      slug: "cosmic-experience",
      name: "宇宙主題的品牌視覺實驗",
      summary:
        "以深色星際氛圍為主軸，結合層次背景、柔光與資訊卡片排版，讓內容傳遞與視覺敘事同時成立。",
      role: "視覺方向、前端動畫、樣式系統",
      techStack: ["CSS", "Tailwind CSS", "Motion", "Visual Direction"],
      href: "#about",
    },
  ],
  experience: [
    {
      period: "近期",
      title: "軟體工程師",
      organization: "個人與產品型專案",
      highlights: [
        "以需求導向規劃前端架構與實作策略，縮短從想法到可展示成果的距離。",
        "重視內容結構、頁面敘事與技術選型，讓產品具備可持續擴充的基礎。",
      ],
    },
    {
      period: "持續累積中",
      title: "前端與產品工程實作者",
      organization: "Web 專案開發",
      highlights: [
        "處理過 UI 組件化、RWD、站點內容整理與部署流程等實務需求。",
        "偏好建立乾淨的檔案結構與可讀性高的程式碼，降低後續改版成本。",
      ],
    },
  ],
  contact: [
    {
      label: "Email",
      value: "hello@bangzhou.dev",
      href: "mailto:hello@bangzhou.dev",
    },
    {
      label: "GitHub",
      value: "github.com/bangzhou",
      href: "https://github.com/bangzhou",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/bangzhou",
      href: "https://www.linkedin.com/in/bangzhou",
    },
  ],
};
