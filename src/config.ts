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
  strategy: '<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>',
  digital: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  brand: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  data: '<path d="M18 20V10M12 20V4M6 20v-6"/>',
  growth: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  support: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
};

const iconHighlights: IconMap = {
  strategy: '<path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',
  digital: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  data: '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
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
  title: "Grateful Group",
  slogan: "专业企业服务平台",
  description: "专业企业服务平台，提供战略咨询、数字化转型、品牌建设、数据驱动等全方位解决方案，助力企业持续增长。",
  keywords: "Kovel,企业咨询,数字化转型,战略咨询,品牌建设,数据驱动,增长运营,Grateful Group",
  url: ".",
  lang: "zh-CN",
  locale: "zh_CN",
  twitter: "@gratefulgroup",
  email: "evanyanet@gmail.com",
  phone: "010-0000-0000",
  address: "北京市朝阳区建国路88号",
  founded: "2015-01-01",
  favicon: "/favicon.svg",
  faviconIco: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
  ogImage: "/og-image.svg",
  logo: {
    light: "/logo-light.svg",
    dark: "/logo-dark.svg",
    alt: "Grateful Group Logo",
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
    label: "免费咨询",
    href: "/contact",
  },
  footer: [
    {
      title: "服务",
      links: [
        { label: "战略咨询", href: "/services" },
        { label: "数字化转型", href: "/services" },
        { label: "品牌建设", href: "/services" },
        { label: "数据驱动", href: "/services" },
      ],
    },
    {
      title: "公司",
      links: [
        { label: "关于我们", href: "/about" },
        { label: "服务", href: "/services" },
        { label: "案例", href: "/cases" },
        { label: "博客", href: "/blog" },
      ],
    },
    {
      title: "公司",
      links: [
        { label: "关于我们", href: "/about" },
        { label: "服务", href: "/services" },
        { label: "案例", href: "/cases" },
        { label: "博客", href: "/blog" },
      ],
    },
    {
      title: "公司",
      links: [
        { label: "关于我们", href: "/about" },
        { label: "服务", href: "/services" },
        { label: "案例", href: "/cases" },
        { label: "博客", href: "/blog" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "隐私政策", href: "/legal/privacy" },
    { label: "服务条款", href: "/legal/terms" },
    { label: "闽ICP备2021011984号", href: "https://beian.miit.gov.cn/", target: "_blank" },
  ],
  hero: {
    badge: "企业增长伙伴",
    titleMain: "赋能企业",
    titleHighlight: "持续增长",
    description: "专业企业服务平台，提供战略咨询、数字化转型、品牌建设、数据驱动等全方位解决方案，助力企业持续增长。",
    primaryButton: { label: "开始合作", href: "/contact" },
    secondaryButton: { label: "了解更多", href: "/services" },
    stats: [
      { num: "500+", label: "服务企业" },
      { num: "98%", label: "客户满意度" },
      { num: "10年", label: "行业经验" },
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imageAlt: "团队协作",
  },
  features: {
    header: {
      tag: "OUR SERVICES",
      title: "核心服务",
      subtitle: "为企业提供全方位专业服务，助力可持续发展",
    },
    items: [
      { title: "战略咨询", desc: "为企业制定清晰的发展战略，明确市场定位和增长路径", icon: "strategy", href: "/services" },
      { title: "数字化转型", desc: "帮助企业实现全面数字化升级，提升运营效率和竞争力", icon: "digital", href: "/services" },
      { title: "品牌建设", desc: "打造独特的品牌形象，建立强大的市场认知和忠诚度", icon: "brand", href: "/services" },
      { title: "数据驱动", desc: "用数据洞察业务，提供精准决策支持和增长机会", icon: "data", href: "/services" },
      { title: "增长运营", desc: "通过精细化运营策略，实现业务的可持续增长", icon: "growth", href: "/services" },
      { title: "技术支持", desc: "提供专业的技术支持和维护服务，确保系统稳定运行", icon: "support", href: "/services" },
    ],
  },
  highlights: {
    header: {
      tag: "WHY CHOOSE US",
      title: "我们的优势",
      subtitle: "专业团队、丰富经验、创新方法，为您提供最优质的服务",
    },
    linkText: "了解更多 →",
    items: [
      { title: "专业团队", desc: "由行业资深专家组成的顾问团队，平均拥有10年以上从业经验", icon: "strategy", href: "/about" },
      { title: "数字化能力", desc: "领先的技术实力和数字化工具，助力企业快速实现转型", icon: "digital", href: "/services" },
      { title: "数据驱动", desc: "基于数据的决策支持，让每一步增长都有据可依", icon: "data", href: "/services" },
    ],
  },
  about: {
    header: {
      tag: "ABOUT US",
      title: "关于我们",
      subtitle: "专注企业服务，助力持续增长",
    },
    description: "Grateful Group 是一家专注于企业服务的专业机构，致力于为企业提供战略咨询、数字化转型、品牌建设等全方位解决方案。我们相信，每一家企业都有无限的潜力，我们的使命就是帮助企业发现并释放这种潜力。",
    highlights: [
      "10年行业深耕经验",
      "500+成功服务案例",
      "98%客户续约率",
      "专业顾问团队",
    ],
    milestones: [
      { year: "2015", title: "公司成立", desc: "Grateful Group 在北京成立，专注企业战略咨询服务" },
      { year: "2018", title: "业务扩展", desc: "业务范围扩展至数字化转型和品牌建设领域" },
      { year: "2021", title: "技术升级", desc: "成立数据科技部门，推出数据驱动解决方案" },
      { year: "2024", title: "全国布局", desc: "在上海、深圳、成都设立分公司，服务全国客户" },
    ],
    stats: [
      { num: "500+", label: "服务企业" },
      { num: "98%", label: "客户满意度" },
      { num: "50+", label: "专业顾问" },
      { num: "10年", label: "行业经验" },
    ],
    ctaText: "了解更多",
    ctaHref: "/about",
  },
  cta: {
    tag: "GET STARTED",
    title: "准备好开始了吗？",
    description: "让我们一起探讨如何帮助您的企业实现持续增长",
    primaryButton: { label: "立即咨询", href: "/contact" },
    secondaryButton: { label: "查看案例", href: "/cases" },
  },
  pages: {
    about: {
      hero: {
        tag: "ABOUT US",
        title: "关于我们",
        subtitle: "了解 Grateful Group 的故事、愿景和团队",
      },
      story: {
        title: "我们的故事",
        paragraphs: [
          "Grateful Group 成立于 2015 年，由一群对企业服务充满热情的专业人士创立。我们相信，每一家企业都有无限的潜力，而我们的使命就是帮助企业发现并释放这种潜力。",
          "从最初的战略咨询服务，到如今涵盖数字化转型、品牌建设、数据驱动等全方位解决方案，我们始终坚持以客户为中心，用专业和创新为客户创造价值。",
          "十年深耕，我们已服务超过 500 家企业客户，涵盖金融、零售、制造、教育、医疗等多个行业。98% 的客户满意度是对我们最好的肯定。",
        ],
        stats: [
          { num: "2015", label: "成立年份" },
          { num: "500+", label: "服务企业" },
          { num: "50+", label: "专业顾问" },
          { num: "98%", label: "客户满意度" },
        ],
      },
      values: {
        header: {
          tag: "OUR VALUES",
          title: "核心价值观",
          subtitle: "我们坚信的理念，指导我们的每一个决策和行动",
        },
        items: [
          { title: "创新驱动", desc: "持续探索新方法、新技术，为客户带来更多价值", icon: "innovation" },
          { title: "诚信为本", desc: "诚实守信，对客户负责，建立长期信任关系", icon: "trust" },
          { title: "协作共赢", desc: "与客户紧密合作，共同成长，实现互利共赢", icon: "collaboration" },
          { title: "追求卓越", desc: "精益求精，不断提升服务质量和专业水平", icon: "excellence" },
        ],
      },
      timeline: {
        header: {
          tag: "OUR JOURNEY",
          title: "发展历程",
          subtitle: "从初创到行业领先，每一步都见证着我们的成长",
        },
        items: [
          { year: "2015", title: "公司成立", desc: "Grateful Group 在北京成立，专注企业战略咨询服务，首批 5 位核心成员" },
          { year: "2017", title: "首个里程碑", desc: "服务客户突破 100 家，团队扩展至 30 人，建立行业口碑" },
          { year: "2019", title: "业务扩展", desc: "成立数字化转型部门，业务范围扩展至品牌建设和数据服务" },
          { year: "2021", title: "技术升级", desc: "推出自研数据平台，成立数据科技部门，技术驱动发展" },
          { year: "2023", title: "全国布局", desc: "在上海、深圳、成都设立分公司，服务网络覆盖全国" },
          { year: "2025", title: "持续创新", desc: "引入 AI 智能服务体系，打造新一代企业服务平台" },
        ],
      },
      team: {
        header: {
          tag: "OUR TEAM",
          title: "核心团队",
          subtitle: "由行业资深专家组成，平均拥有 10 年以上从业经验",
        },
        members: [
          { name: "张明", role: "创始人 & CEO", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80", bio: "前麦肯锡资深合伙人，20年企业战略咨询经验" },
          { name: "李华", role: "首席技术官", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", bio: "前阿里巴巴技术专家，15年数字化转型经验" },
          { name: "王芳", role: "品牌总监", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80", bio: "前奥美创意总监，12年品牌建设与营销经验" },
          { name: "陈强", role: "数据总监", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", bio: "前字节跳动数据科学家，10年数据分析与挖掘经验" },
        ],
      },
    },
    services: {
      hero: {
        tag: "OUR SERVICES",
        title: "专业服务",
        subtitle: "全方位企业服务，助力您的业务持续增长",
      },
    },
    cases: {
      hero: {
        tag: "OUR WORK",
        title: "精选案例",
        subtitle: "每一个项目都是我们与客户共同创造的成果",
      },
      cases: [
        {
          title: "某金融集团数字化升级",
          category: "数字化转型",
          desc: "为大型金融集团打造端到端数字化平台，实现业务流程全面在线化。",
          tags: ["金融科技", "平台开发", "用户体验"],
          result: "效率提升 200%",
        },
        {
          title: "新零售品牌全案策划",
          category: "品牌建设",
          desc: "从品牌定位到视觉设计，帮助新消费品牌在竞争中脱颖而出。",
          tags: ["品牌策略", "视觉设计", "营销传播"],
          result: "品牌认知度 +180%",
        },
        {
          title: "制造业智能数据平台",
          category: "数据驱动",
          desc: "构建工业级数据采集与分析平台，助力制造企业实现智能制造转型。",
          tags: ["数据分析", "IoT", "智能制造"],
          result: "成本降低 35%",
        },
        {
          title: "电商平台增长方案",
          category: "增长运营",
          desc: "通过精细化运营策略和数据驱动优化，实现用户和营收双增长。",
          tags: ["用户增长", "转化优化", "数据运营"],
          result: "GMV 增长 150%",
        },
        {
          title: "医疗行业战略咨询",
          category: "战略咨询",
          desc: "为医疗科技企业制定市场进入战略，明确产品定位和商业化路径。",
          tags: ["市场研究", "战略规划", "商业模式"],
          result: "6个月内实现盈利",
        },
        {
          title: "教育科技平台重构",
          category: "数字化转型",
          desc: "对传统教育平台进行技术架构重构和体验升级，支撑百万级并发。",
          tags: ["架构升级", "性能优化", "体验设计"],
          result: "系统可用性 99.99%",
        },
      ],
      process: {
        header: {
          tag: "HOW WE WORK",
          title: "工作流程",
          subtitle: "清晰透明的合作流程，确保每个项目高效交付",
        },
        steps: [
          { num: "01", title: "需求沟通", desc: "深入了解您的业务目标、挑战和期望" },
          { num: "02", title: "方案策划", desc: "制定针对性的解决方案和实施计划" },
          { num: "03", title: "执行落地", desc: "专业团队高效执行，全程透明可控" },
          { num: "04", title: "持续优化", desc: "交付后持续跟踪效果，迭代优化" },
        ],
      },
    },
    contact: {
      pageHero: {
        tag: "CONTACT US",
        title: "联系我们",
        subtitle: "无论您有什么需求或想法，都欢迎与我们交流",
      },
      infoTitle: "与我们取得联系",
      infoDesc: "我们的团队随时准备为您提供帮助。您可以通过以下方式联系我们，或直接填写表单留言。",
      contactInfo: [
        { icon: "mail", title: "邮箱", value: "evanyanet@gmail.com", href: "mailto:evanyanet@gmail.com" },
        { icon: "phone", title: "电话", value: "010-0000-0000", href: "tel:+8610-0000-0000" },
        { icon: "location", title: "地址", value: "北京市朝阳区建国路88号", href: "#" },
        { icon: "clock", title: "工作时间", value: "周一至周五 9:00-18:00", href: "#" },
      ],
      formRows: [
        [
          { name: "name", label: "姓名", type: "text", placeholder: "您的姓名", required: true },
          { name: "email", label: "邮箱", type: "email", placeholder: "your@email.com", required: true },
        ],
        [
          { name: "company", label: "公司", type: "text", placeholder: "公司名称（选填）" },
        ],
        [
          {
            name: "subject",
            label: "主题",
            type: "select",
            options: [
              { value: "", label: "请选择咨询类型" },
              { value: "strategy", label: "战略咨询" },
              { value: "digital", label: "数字化转型" },
              { value: "brand", label: "品牌建设" },
              { value: "data", label: "数据分析" },
              { value: "other", label: "其他" },
            ],
          },
        ],
        [
          { name: "message", label: "留言", type: "textarea", placeholder: "请描述您的需求...", required: true, rows: 5 },
        ],
      ],
      submitText: "发送留言",
      successMessage: "留言已收到，我们会尽快回复您！",
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
          { question: "合作流程是怎样的？", answer: "我们通常从初步沟通开始，了解您的需求后进行方案策划，双方确认后签订合同并启动项目。" },
          { question: "项目周期一般多长？", answer: "根据项目复杂度不同，通常咨询项目为2-4周，数字化转型项目为2-6个月。" },
          { question: "如何收费？", answer: "我们根据项目范围和复杂度提供定制报价。初次咨询免费。" },
          { question: "是否提供售后支持？", answer: "是的，所有项目交付后都提供免费维护支持，并可签订长期服务协议。" },
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
