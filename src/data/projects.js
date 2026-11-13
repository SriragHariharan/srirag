export const projectEntries = [
  {
    id: 'leaf',
    title: 'Leaf — Distributed Social Media Platform for Travelers',
    links: [
      {
        label: 'Docs',
        href: 'https://soapy-giver-46a.notion.site/Leaf-Travel-Connect-Share-1e5ccc4e43e38051af0fcd00a01f7d33',
      },
      {
        label: 'Live',
        href: 'https://leaf-social.vercel.app',
      },
      {
        label: 'GitHub',
        href: 'https://app.notion.com/p/Leaf-GitHub-Links-389ccc4e43e3801495ffe6c1fe7ccf35?source=copy_link',
      },
      {
        label: 'Interaction-weighted friend ranking',
        href: 'https://www.notion.so/Engineering-Design-Interaction-Weighted-Friend-Ranking-375ccc4e43e381259672e302abdf07a7',
      },
      {
        label: 'Design system npm package',
        href: 'https://www.npmjs.com/package/@srirag/leaf-design-system',
      },
    ],
    highlights: [
      'Architected a microservices backend with Apache Kafka for event-driven service decoupling.',
      'Migrated the feed service from Node.js to Go to improve fanout performance and scalability.',
      'Implemented CQRS-style feed with a Go fanout worker and circuit breaker, writing to CockroachDB for read/write scaling.',
      'Built interaction-weighted friend ranking with time-decay for top-friends fanout, reducing feed write amplification.',
      'Designed micro frontends via Rspack Module Federation, sharing Zustand state and JWT refresh.',
      'Integrated Elasticsearch search and built a shared design system npm package for consistent UI.',
    ],
    tech: [
      'Node.js',
      'Go',
      'React.js',
      'Apache Kafka',
      'MongoDB',
      'MySQL',
      'CockroachDB',
      'Elasticsearch',
      'Socket.io',
      'Rspack Module Federation',
      'Prisma ORM',
      'npm',
    ],
  },
  {
    id: 'sillypoint',
    title: 'Sillypoint — Live Cricket Tournament & Scoring Platform',
    links: [
      {
        label: 'Live',
        href: 'https://sillypoint-pi.vercel.app',
      },
      {
        label: 'Frontend',
        href: 'https://github.com/SriragHariharan/sillypoint-frontend',
      },
      {
        label: 'Backend',
        href: 'https://github.com/SriragHariharan/sillypoint-backend',
      },
    ],
    highlights: [
      'Built a live cricket tournament platform covering the full lifecycle: tournament creation, team registration with deadlines, match scheduling, ball-by-ball scoring and results.',
      'Designed a TypeScript scoring engine that handles wides, no-balls, byes, leg byes, overthrows, wickets, free hits, retirements and undo, saving every ball as a permanent record and deciding the result automatically.',
      'Added Super Overs for tied matches, with a boundary-count tie-break when the Super Over is also tied.',
      'Built broadcast-style live scorecards for spectators (batting, bowling, fall of wickets, over-by-over chart) that refresh every 3 seconds, with server-side caching so unchanged scores are not rebuilt or resent.',
      'Auto-calculated points table with points, net run rate and recent form for every team.',
      'Mobile-first scoring pad that fits on one screen, with private link + PIN access per match so scorers need no account.',
      'Passwordless OTP login with secure refresh-token sessions, plus one-click demo accounts for organizers and team managers.',
    ],
    tech: [
      'React.js',
      'Zustand',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Drizzle ORM',
      'Zod',
      'JWT',
      'Cloudinary',
    ],
  },
  {
    id: 'twenty-two-yards',
    title: '22 Yards — Multi-Vendor E-Commerce Platform',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/SriragHariharan/22-yards',
      },
      {
        label: 'Live',
        href: 'https://22-yards-tau.vercel.app/',
      },
    ],
    highlights: [
      'Architected a multi-vendor e-commerce platform with role-based JWT authentication separating buyer and seller flows across 5 Mongoose models.',
      'Built an image upload pipeline with Sharp preprocessing and Cloudinary CDN storage, with transactional rollback on failure.',
      'Designed a 5-stage order fulfillment workflow with seller dashboard controls and buyer-facing order timeline component.',
    ],
    tech: [
      'React.js',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Razorpay',
      'Cloudinary',
      'Sharp',
      'JWT',
    ],
  },
  {
    id: 'pixelflicks',
    title: 'PixelFlicks — AI Movie Recommendation Platform',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/SriragHariharan/PixelFlicks',
      },
    ],
    highlights: [
      'Built an AI-powered movie recommendation platform using OpenAI GPT-3.5 Turbo and TMDB API.',
      'Implemented natural language movie search, personalized recommendations, and Firebase Authentication.',
    ],
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Firebase', 'TMDB API', 'OpenAI GPT-3.5 Turbo'],
  },
  {
    id: 'fotos',
    title: 'Fotos — Personal Image Management Platform',
    links: [
      {
        label: 'Frontend',
        href: 'https://github.com/SriragHariharan/fotos-client',
      },
      {
        label: 'Backend',
        href: 'https://github.com/SriragHariharan/fotos-server',
      },
    ],
    highlights: [
      'Developed a full-stack image management application with JWT authentication and password reset.',
      'Implemented bulk uploads to Cloudinary, drag-and-drop image reordering using @dnd-kit, and image editing/deletion.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT', '@dnd-kit'],
  },
]

export const moreProjects = {
  label: 'More projects on GitHub',
  href: 'https://github.com/SriragHariharan?tab=repositories',
}
