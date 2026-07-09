export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterLink {
  label: string;
  href: string;
  target?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface HeroStat {
  num: string;
  label: string;
}

export interface HeroConfig {
  badge: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  primaryButton: FooterLink;
  secondaryButton: FooterLink;
  stats: HeroStat[];
  image: string;
  imageAlt: string;
}

export interface SectionHeader {
  tag: string;
  title: string;
  subtitle?: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
  href?: string;
}

export interface FeaturesConfig {
  header: SectionHeader;
  items: FeatureItem[];
}

export interface AboutConfig {
  header: SectionHeader;
  description: string;
  highlights: string[];
  milestones: { year: string; title: string; desc: string }[];
  stats: HeroStat[];
  ctaText: string;
  ctaHref: string;
}

export interface CTAConfig {
  tag: string;
  title: string;
  description: string;
  primaryButton: FooterLink;
  secondaryButton: FooterLink;
}

export interface PageHeroConfig {
  tag: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface StoryConfig {
  title: string;
  paragraphs: string[];
  stats: HeroStat[];
}

export interface ValueItem {
  title: string;
  desc: string;
  icon: string;
}

export interface ValuesConfig {
  header: SectionHeader;
  items: ValueItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface TimelineConfig {
  header: SectionHeader;
  items: TimelineItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface TeamConfig {
  header: SectionHeader;
  members: TeamMember[];
}

export interface CaseItem {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  result: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  value: string;
  href: string;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: FormOption[];
  rows?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  header: SectionHeader;
  items: FAQItem[];
}

export interface ContactConfig {
  pageHero: PageHeroConfig;
  infoTitle: string;
  infoDesc: string;
  contactInfo: ContactInfoItem[];
  formRows: FormField[][];
  submitText: string;
  successMessage: string;
  failMessage: string;
  requiredMessage: string;
  sendingText: string;
  networkErrorMessage: string;
  faq: FAQConfig;
}

export interface IconMap {
  [key: string]: string;
}

export interface SiteConfig {
  title: string;
  slogan: string;
  description: string;
  keywords: string;
  url: string;
  lang: string;
  locale: string;
  twitter: string;
  email: string;
  phone: string;
  address: string;
  founded: string;
  favicon: string;
  faviconIco: string;
  appleTouchIcon: string;
  ogImage: string;
  logo: { light: string; dark: string; alt: string };
  logoWidth: number;
  logoHeight: number;
  formEndpoint: string;
  nav: NavLink[];
  headerCta: FooterLink;
  footer: FooterColumn[];
  footerBottomLinks: FooterLink[];
  hero: HeroConfig;
  features: FeaturesConfig;
  highlights: {
    header: SectionHeader;
    linkText: string;
    items: FeatureItem[];
  };
  about: AboutConfig;
  cta: CTAConfig;
  pages: {
    about: {
      hero: PageHeroConfig;
      story: StoryConfig;
      values: ValuesConfig;
      timeline: TimelineConfig;
      team: TeamConfig;
    };
    services: {
      hero: PageHeroConfig;
    };
    cases: {
      hero: PageHeroConfig;
      cases: CaseItem[];
      process: {
        header: SectionHeader;
        steps: ProcessStep[];
      };
    };
    contact: ContactConfig;
  };
  icons: {
    features: IconMap;
    highlights: IconMap;
    values: IconMap;
    contact: IconMap;
    nav: IconMap;
  };
}

export type PageMeta = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string;
};

const iconFeatures: IconMap = {
  agent: '<path d="M12 2a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/><path d="M12 6v6l4 2"/>',
  api: '<path d="M4 9a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2z"/><path d="M8 7V3h8v4"/><path d="M8 21V17h8v4"/>',
  custom: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  platform: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M2 7h20"/>',
  server: '<path d="M2 4h20v6H2zM2 14h20v6H2z"/><circle cx="6" cy="7" r="1"/><circle cx="6" cy="17" r="1"/>',
  support: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
};

const iconHighlights: IconMap = {
  deploy: '<path d="M12 3a9 9 0 100 18 9 9 0 000-18z"/><path d="M12 8v8M8 12l4 4 4-4"/>',
  integration: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  ops: '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
};

const iconValues: IconMap = {
  innovation: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  trust: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  collaboration: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
  excellence: '<polyline points="20 6 9 17 4 12"/>',
};

const iconContact: IconMap = {
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
  location: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
};

const iconNav: IconMap = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  services: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>',
  cases: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  blog: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  about: '<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
  contact: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>',
};

export const site: SiteConfig = {
  title: "Pulse",
  slogan: "AI Agents & ModelHub 部署专家",
  description: "专注 AI 智能体部署与 ModelHub 聚合平台搭建，为个人和企业提供一站式 AI Agents 安装、配置、运维服务。",
  keywords: "AI Agents,AI智能体部署,ModelHub,聚合平台,AI部署,AIAgent安装,API聚合,Pulse",
  url: "https://pulse.seraluce.workers.dev",
  lang: "zh-CN",
  locale: "zh_CN",
  twitter: "@pulse_deploy",
  email: "evanyanet@gmail.com",
  phone: "+86 400-000-0000",
  address: "中国·深圳",
  founded: "2025-01-01",
  favicon: "/favicon.svg",
  faviconIco: "/favicon.ico",
  appleTouchIcon: "/favicon.svg",
  ogImage: "/og-image.svg",
  logo: {
    light: "/logo-light.svg",
    dark: "/logo-dark.svg",
    alt: "Pulse Logo",
  },
  logoWidth: 28,
  logoHeight: 28,
  formEndpoint: "https://formspree.io/f/xqevnyjn",
  nav: [
    { label: "首页", href: "/", icon: "home" },
    { label: "服务", href: "/services", icon: "services" },
    { label: "案例", href: "/cases", icon: "cases" },
    { label: "博客", href: "/blog", icon: "blog" },
    { label: "关于", href: "/about", icon: "about" },
    { label: "联系", href: "/contact", icon: "contact" },
  ],
  headerCta: {
    label: "立即部署",
    href: "/contact",
  },
  footer: [
    {
      title: "服务",
      links: [
        { label: "AI Agent 部署", href: "/services" },
        { label: "ModelHub 接入", href: "/services" },
        { label: "自定义开发", href: "/services" },
        { label: "服务器运维", href: "/services" },
      ],
    },
    {
      title: "平台",
      links: [
        { label: "关于我们", href: "/about" },
        { label: "服务", href: "/services" },
        { label: "案例", href: "/cases" },
        { label: "博客", href: "/blog" },
      ],
    },
    {
      title: "资源",
      links: [
        { label: "博客文章", href: "/blog" },
        { label: "部署案例", href: "/cases" },
        { label: "常见问题", href: "/contact#faq" },
        { label: "联系我们", href: "/contact" },
      ],
    },
    {
      title: "法律",
      links: [
        { label: "隐私政策", href: "/legal/privacy" },
        { label: "服务条款", href: "/legal/terms" },
        { label: "闽ICP备2021011984号", href: "https://beian.miit.gov.cn/", target: "_blank" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "隐私政策", href: "/legal/privacy" },
    { label: "服务条款", href: "/legal/terms" },
    { label: "闽ICP备2021011984号", href: "https://beian.miit.gov.cn/", target: "_blank" },
  ],
  hero: {
    badge: "AI 部署专家",
    titleMain: "部署 AI 智能体",
    titleHighlight: "轻松搞定",
    description: "专业提供 AI Agents 安装、ModelHub 聚合平台搭建、多平台部署与运维服务，让您专注于业务而不是基础设施。",
    primaryButton: { label: "开始部署", href: "/contact" },
    secondaryButton: { label: "了解更多", href: "/services" },
    stats: [
      { num: "200+", label: "成功部署" },
      { num: "50+", label: "平台支持" },
      { num: "99.9%", label: "在线率" },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    imageAlt: "AI 部署",
  },
  features: {
    header: {
      tag: "OUR SERVICES",
      title: "核心服务",
      subtitle: "从部署到运维，一站式 AI Agents 解决方案",
    },
    items: [
      { title: "AI Agent 部署", desc: "快速安装配置各类 AI 智能体，支持主流框架和模型", icon: "agent", href: "/services" },
      { title: "ModelHub 接入", desc: "聚合平台搭建与接入，统一管理多个 LLM API 接口", icon: "api", href: "/services" },
      { title: "自定义 Agent 开发", desc: "根据需求定制开发专属 AI Agent，满足特定业务场景", icon: "custom", href: "/services" },
      { title: "多平台部署", desc: "支持 VPS、云服务器、边缘设备等多平台一键部署", icon: "platform", href: "/services" },
      { title: "服务器运维", desc: "7×24 小时服务器监控与维护，确保服务稳定运行", icon: "server", href: "/services" },
      { title: "技术支持", desc: "专业团队全程指导，从安装到上线的全流程技术支持", icon: "support", href: "/services" },
    ],
  },
  highlights: {
    header: {
      tag: "WHY CHOOSE US",
      title: "我们的优势",
      subtitle: "专业团队、成熟方案、稳定运维，让 AI 部署不再困难",
    },
    linkText: "了解更多 →",
    items: [
      { title: "专业部署团队", desc: "深耕 AI 部署领域，精通各类 Agent 框架和 API 聚合方案", icon: "deploy", href: "/about" },
      { title: "成熟聚合方案", desc: "丰富的 ModelHub 接入经验，快速实现多模型统一管理", icon: "integration", href: "/services" },
      { title: "全天候运维", desc: "完善的监控告警体系，确保部署服务持续稳定运行", icon: "ops", href: "/services" },
    ],
  },
  about: {
    header: {
      tag: "ABOUT US",
      title: "关于我们",
      subtitle: "专注 AI 部署，让技术触手可及",
    },
    description: "Pulse 是一家专注于 AI 智能体部署与 ModelHub 聚合平台搭建的技术服务团队。我们致力于降低 AI 应用门槛，让个人开发者和企业能够快速部署和使用 AI Agents，无需关注底层基础设施的复杂性。",
    highlights: [
      "200+ 成功部署案例",
      "50+ 平台/框架支持",
      "99.9% 服务在线率",
      "专业部署团队",
    ],
    milestones: [
      { year: "2025 Q1", title: "团队成立", desc: "Pulse 团队成立，专注 AI Agents 部署服务" },
      { year: "2025 Q2", title: "ModelHub 方案", desc: "推出 ModelHub 聚合平台部署方案，支持多模型统一接入" },
      { year: "2025 Q3", title: "业务扩展", desc: "服务覆盖海外 VPS 部署，支持全球节点分发" },
      { year: "2026 Q1", title: "生态建设", desc: "建立完善的部署文档和社区支持体系" },
    ],
    stats: [
      { num: "200+", label: "成功部署" },
      { num: "99.9%", label: "在线率" },
      { num: "50+", label: "平台支持" },
      { num: "7×24", label: "技术支持" },
    ],
    ctaText: "了解更多",
    ctaHref: "/about",
  },
  cta: {
    tag: "GET STARTED",
    title: "准备好部署你的 AI Agent 了吗？",
    description: "让我们一起把你的 AI 想法变成现实",
    primaryButton: { label: "立即部署", href: "/contact" },
    secondaryButton: { label: "查看案例", href: "/cases" },
  },
  pages: {
	about: {
      hero: {
        tag: "ABOUT US",
        title: "关于我们",
        subtitle: "了解 Pulse 的故事、愿景和团队",
        description: "了解 Pulse 团队的故事、核心价值观和发展历程。我们专注于 AI 智能体部署与 ModelHub 聚合平台搭建。",
      },
      story: {
        title: "我们的故事",
        paragraphs: [
          "Pulse 诞生于 2025 年初，由一群对 AI 技术充满热情的开发者创立。我们发现，虽然大语言模型和 AI Agents 技术飞速发展，但部署和使用的门槛仍然很高——复杂的环境配置、API 接入、服务器运维等问题让许多人望而却步。",
          "于是我们决定专注于 AI 部署服务，帮助个人和企业快速搭建 AI Agents 和 ModelHub 聚合平台。从最初的几台 VPS，到如今支持 50+ 平台和框架，我们始终秉持「让部署变得简单」的使命。",
          "至今，我们已经成功完成 200+ 个部署项目，服务覆盖中国大陆、香港、新加坡、美国等多个地区。我们的客户包括独立开发者、初创公司和中型企业。",
        ],
        stats: [
          { num: "2025", label: "成立年份" },
          { num: "200+", label: "成功部署" },
          { num: "50+", label: "平台支持" },
          { num: "99.9%", label: "在线率" },
        ],
      },
      values: {
        header: {
          tag: "OUR VALUES",
          title: "核心价值观",
          subtitle: "我们坚信的理念，指导每一个部署项目",
        },
        items: [
          { title: "技术驱动", desc: "持续跟进最新 AI 技术栈，提供最优部署方案", icon: "innovation" },
          { title: "客户至上", desc: "以客户需求为核心，交付稳定可靠的部署服务", icon: "trust" },
          { title: "协作共赢", desc: "与客户紧密协作，确保每个项目顺利落地", icon: "collaboration" },
          { title: "追求卓越", desc: "不满足于「能用」，追求「好用」的部署体验", icon: "excellence" },
        ],
      },
      timeline: {
        header: {
          tag: "OUR JOURNEY",
          title: "发展历程",
          subtitle: "从零到一，每一步都见证着我们的成长",
        },
        items: [
          { year: "2025 Q1", title: "团队成立", desc: "Pulse 团队成立，专注 AI Agents 部署服务，首批 3 位核心成员" },
          { year: "2025 Q2", title: "ModelHub 上线", desc: "推出 ModelHub 聚合平台部署方案，完成首批 10 个部署项目" },
          { year: "2025 Q3", title: "海外扩展", desc: "新增海外 VPS 部署支持，服务覆盖东南亚和北美市场" },
          { year: "2025 Q4", title: "生态完善", desc: "部署项目突破 100+，建立标准化部署流程和自动化运维体系" },
          { year: "2026 Q1", title: "品牌升级", desc: "全面升级服务体系，推出 7×24 运维保障计划" },
          { year: "2026 Q2", title: "持续发展", desc: "完成 200+ 部署项目，支持 50+ 平台和框架" },
        ],
      },
      team: {
        header: {
          tag: "OUR TEAM",
          title: "核心团队",
          subtitle: "由资深 AI 部署工程师组成，平均 5 年以上开发经验",
        },
        members: [
          { name: "Evan", role: "创始人 & 技术负责人", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80", bio: "全栈开发者，5 年 AI 部署经验，精通各类 Agent 框架" },
          { name: "Alex", role: "运维总监", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", bio: "前 DevOps 工程师，精通容器化部署和自动化运维" },
          { name: "Lisa", role: "客户成功经理", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80", bio: "3 年技术客户服务经验，确保每个项目顺利交付" },
          { name: "Tom", role: "AI 工程师", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", bio: "专注 AI Agent 开发与 API 集成，擅长主流 LLM 框架" },
        ],
      },
    },
	services: {
      hero: {
        tag: "OUR SERVICES",
        title: "部署服务",
        subtitle: "从 AI Agent 到聚合平台，全方位部署解决方案",
        description: "提供 AI Agent 部署、ModelHub 聚合平台搭建、自定义开发、多平台部署及服务器运维等一站式服务。",
      },
    },
	cases: {
      hero: {
        tag: "OUR WORK",
        title: "部署案例",
        subtitle: "每一个部署项目都是我们与客户共同创造的成果",
        description: "查看 Pulse 的成功部署案例，涵盖 AI Agent 部署、ModelHub 聚合平台、企业 LLM 网关等多个领域。",
      },
      cases: [
        {
          title: "多模型 ModelHub 聚合平台",
          category: "API 聚合",
          desc: "为客户搭建基于 ModelHub 的多模型聚合平台，统一管理 OpenAI、Claude、Gemini 等接口。",
          tags: ["ModelHub", "API 聚合", "负载均衡"],
          result: "10+ 模型统一接入",
        },
        {
          title: "AI 客服机器人部署",
          category: "Agent 部署",
          desc: "在海外 VPS 上部署定制 AI 客服 Agent，支持多语言对话和知识库检索。",
          tags: ["AI Agent", "VPS 部署", "知识库"],
          result: "部署耗时 < 2 小时",
        },
        {
          title: "企业级 LLM 网关",
          category: "平台搭建",
          desc: "为企业搭建内部 LLM API 网关，支持访问控制、用量统计和成本管理。",
          tags: ["API 网关", "访问控制", "用量监控"],
          result: "成本降低 40%",
        },
        {
          title: "自动化工作流 Agent",
          category: "Agent 部署",
          desc: "部署自动化工作流 Agent，集成 Slack、飞书等办公协作平台，实现任务自动处理。",
          tags: ["工作流", "自动化", "集成"],
          result: "效率提升 300%",
        },
        {
          title: "海外节点 AI 部署",
          category: "服务器运维",
          desc: "在日本、新加坡、美国等节点部署 AI 服务，配置 CDN 和负载均衡。",
          tags: ["海外部署", "CDN", "多节点"],
          result: "全球延迟 < 100ms",
        },
        {
          title: "自定义 Agent 开发与部署",
          category: "定制开发",
          desc: "根据客户业务需求，从零开发专属 AI Agent 并完成全流程部署。",
          tags: ["定制开发", "全流程", "文档输出"],
          result: "7 天内交付上线",
        },
      ],
      process: {
        header: {
          tag: "HOW WE WORK",
          title: "部署流程",
          subtitle: "清晰透明的合作流程，确保每个项目高效交付",
        },
        steps: [
          { num: "01", title: "需求沟通", desc: "了解您的部署目标和具体需求" },
          { num: "02", title: "方案制定", desc: "制定针对性的部署方案和时间计划" },
          { num: "03", title: "部署实施", desc: "专业团队高效执行，全程透明可控" },
          { num: "04", title: "运维保障", desc: "交付后持续运维，确保稳定运行" },
        ],
      },
    },
	contact: {
      pageHero: {
        tag: "CONTACT US",
        title: "联系我们",
        subtitle: "无论您要部署什么，都欢迎与我们交流",
        description: "联系我们获取 AI Agent 部署和 ModelHub 聚合平台搭建服务。专业团队为您提供一站式部署解决方案。",
      },
      infoTitle: "与我们取得联系",
      infoDesc: "我们的团队随时准备为您提供部署支持。您可以通过以下方式联系我们，或直接填写表单留言。",
      contactInfo: [
        { icon: "mail", title: "邮箱", value: "evanyanet@gmail.com", href: "mailto:evanyanet@gmail.com" },
        { icon: "phone", title: "电话", value: "400-000-0000", href: "tel:+864000000000" },
	{ icon: "location", title: "地址", value: "中国·深圳", href: "" },
	{ icon: "clock", title: "工作时间", value: "周一至周日 9:00-23:00", href: "" },
      ],
      formRows: [
        [
          { name: "name", label: "姓名", type: "text", placeholder: "您的姓名", required: true },
          { name: "email", label: "邮箱", type: "email", placeholder: "your@email.com", required: true },
        ],
        [
          { name: "company", label: "公司/项目", type: "text", placeholder: "公司或项目名称（选填）" },
        ],
        [
          {
            name: "subject",
            label: "服务类型",
            type: "select",
            options: [
              { value: "", label: "请选择服务类型" },
              { value: "agent-deploy", label: "AI Agent 部署" },
              { value: "modelhub", label: "ModelHub 接入" },
              { value: "custom-dev", label: "自定义开发" },
              { value: "server-ops", label: "服务器运维" },
              { value: "other", label: "其他" },
            ],
          },
        ],
        [
          { name: "message", label: "需求描述", type: "textarea", placeholder: "请描述您的部署需求...", required: true, rows: 5 },
        ],
      ],
      submitText: "发送需求",
      successMessage: "需求已收到，我们会尽快与您联系！",
      failMessage: "发送失败，请稍后重试",
      requiredMessage: "请填写所有必填项",
      sendingText: "发送中...",
      networkErrorMessage: "网络错误，请检查连接后重试",
      faq: {
        header: {
          tag: "FAQ",
          title: "常见问题",
        },
        items: [
          { question: "部署一个 AI Agent 需要多久？", answer: "根据复杂程度，标准部署通常在 30 分钟到 2 小时内完成。定制开发项目需要额外评估。" },
          { question: "支持哪些平台和框架？", answer: "我们支持 Docker、VPS、云服务器等多种部署方式，支持 OpenAI API、Claude、Gemini、Ollama 等主流框架。" },
          { question: "ModelHub 是什么？", answer: "ModelHub 是一个 LLM API 聚合平台，可以统一管理多个模型的 API 接口，实现负载均衡和成本优化。" },
          { question: "是否提供售后运维？", answer: "是的，所有部署项目均提供 30 天免费运维保障，并可续费长期运维服务。" },
        ],
      },
    },
  },
  icons: {
    features: iconFeatures,
    highlights: iconHighlights,
    values: iconValues,
    contact: iconContact,
    nav: iconNav,
  },
};

export function getPageMeta(meta: PageMeta = {}, baseUrl?: string) {
  const title = meta.title && meta.title !== "首页"
    ? `${meta.title} - ${site.title}`
    : `${site.title} - ${site.slogan}`;
  const description = meta.description || site.description;
  const origin = baseUrl || site.url;
  const url = meta.path ? `${origin}${meta.path}` : origin;
  const image = meta.image ? `${origin}${meta.image}` : `${origin}${site.ogImage}`;
  return { title, description, url, image };
}
