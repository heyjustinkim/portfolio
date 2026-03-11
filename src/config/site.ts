const site = {
  // --- Site Metadata ---
  meta: {
    title: "heyjustinkim.com",
    description: "Welcome to my portfolio site!",
    author: "Justin Kim",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "The home page", href: "/" },
    { name: "Resume", subtitle: "Grab my resume here", href: "/resume" },
    { name: "Writing", subtitle: "My works so far", href: "/categories" },
    // { name: "Writing", subtitle: "Blog", href: "/posts" },
    // { name: "Projects", subtitle: "Works", href: "/projects" },
    // { name: "Friends", subtitle: "Links", href: "/friends" },
    { name: "About", subtitle: "Yours truly", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/heyjustinkim/", icon: "mdi:linkedin" },
    { name: "Email", href: "mailto:heyjustinkim@gmail.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 Hey there! My name's Justin",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description1:
      'I\'m a <span class="font-semibold text-foreground decoration-primary/30">reliable and self-starting</span> Paralegal Student with a technology background seeking to contribute my proven <span class="font-semibold text-foreground decoration-primary/30">client interaction and organizational skills</span> to Paralegal and Legal Assistant roles in Criminal and Intellectual Property Law.',
      // 'A minimal personal website theme built with <span class="font-medium text-foreground underline decoration-primary/30">Astro</span> and <span class="font-medium text-foreground underline decoration-primary/30">Tailwind CSS</span>.',
    description2:
      'Key skills:<br><ul class="list-disc list-outside ml-5"><li>Experience interning in a <span class="font-semibold text-foreground decoration-primary/30">law office</span> and developing excellent organizational skills.</li><li>Speak, read and write fluent English, elementary <span class="font-semibold text-foreground decoration-primary/30">Korean</span>, and elementary <span class="font-semibold text-foreground decoration-primary/30">Chinese (Mandarin)</span>.</li><li>Trained in filling out <span class="font-semibold text-foreground decoration-primary/30">legal forms and drafting</span> case briefs, memorandums, declarations, motions, complaints, answers, demands, responses, and contracts.</li><li>Exposure to Legal Analysis and Writing, Law Office Procedures, Civil Procedure, Tort Law, Contract Law, Family Law, Law Office Technology, Paralegal Ethics.</li><li>National Society for Legal Technology Certificate of Completion: <span class="font-semibold text-foreground decoration-primary/30">Word, Outlook, Excel, PowerPoint, Acrobat, and Clio Manage</span>.</li><li><span class="font-semibold text-foreground decoration-primary/30">Commended</span> for strong communication skills and attention to detail.</li><li>Type <span class="font-semibold text-foreground decoration-primary/30">83 WPM</span>.</li></ul>',
    cards: [
      { icon: "mdi:explore", label: "Status", value: "Searching for my next paralegal opportunity" },
      { icon: "mdi:location", label: "Location", value: "Rowland Heights, CA" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "Copyright © 2025 Justin Kim  |  All rights reserved.",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: false,
    rss: false,
  },

  // --- Tools Page Data ---
  tools: [
    { name: "development", items: ["VS Code", "Terminal", "Chrome", "Git"] },
    { name: "design", items: ["Figma"] },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "My works so far",
    projectsTitle: "Projects",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "Learn about Justin here",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
