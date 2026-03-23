import type { Skill, Project, StatCard, NavLink } from '@/types'

// NAVIGATION 
export const NAV_LINKS: NavLink[] = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

// HERO 
export const HERO = {
  greeting: '// Hello, World!',
  firstName: 'Wesllei',
  lastName: 'Kopceski',
  roles: ['Developer', 'TypeSript', 'Back-end', 'Front-end', 'Designer'],
  bio: "Crafting interactive digital experiences at the intersection of art and code. Passionate about building fast, beautiful, and memorable interfaces.",
  location: 'Brazil',
}

// ABOUT 
export const ABOUT = {
  paragraphs: [
    "I'm a Developer & Designer with a passion for building beautiful, performant digital experiences. With a background spanning front-end, back-end, and UI/UX, I bring a holistic perspective to every project.",
    "I live at the boundary between design and engineering, making both sides talk to each other. Whether it's a pixel-perfect interface or a scalable API — I care about quality in every layer.",
  ],
  tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'CSS / Tailwind'],
}

export const STATS: StatCard[] = [
  { icon: '🚀', value: '5+',    label: 'Projects Shipped', sub: 'Web & Mobile'    },
  { icon: '🎨', value: '3+',    label: 'Years Experience', sub: 'Development'     },
  { icon: '🧠', value: 'Full',  label: 'Stack',            sub: 'Front & Back-end'},
  { icon: '🌍', value: 'Remote',label: 'Available',        sub: 'Brazil / World'  },
]

// SKILLS
export const SKILLS: Skill[] = [
  { name: 'JavaScript',  level: 88, category: 'language' },
  { name: 'TypeScript',  level: 80, category: 'language' },
  { name: 'Python',      level: 50, category: 'language' },
  { name: 'HTML / CSS',  level: 90, category: 'language' },
  { name: 'React',       level: 88, category: 'frontend' },
  { name: 'Next.js',     level: 75, category: 'frontend' },
  { name: 'Tailwind',    level: 85, category: 'frontend' },
  { name: 'Photoshop',   level: 99, category: 'tool'     },
  { name: 'Node.js',     level: 78, category: 'backend'  },
  { name: 'REST APIs',   level: 82, category: 'backend'  },
  { name: 'Firebase',    level: 75, category: 'backend'  },
  { name: 'PostgreSQL',  level: 68, category: 'backend'  },
  { name: 'Git',         level: 88, category: 'tool'     },
  { name: 'Docker',      level: 65, category: 'tool'     },
  { name: 'VS Code',     level: 95, category: 'tool'     },
  { name: 'CI/CD',       level: 60, category: 'tool'     },
]

// PROJECTS 
export const PROJECTS: Project[] = [
  {
    title: 'Diamante Diesel',
    subtitle: 'Full-Stack Web',
    description:
      'Futuristic website project focused on innovation, featuring modern design, dynamic interfaces, and an intuitive user experience.',
    tags: ['Next.js', 'TypeScript', 'React', 'Photoshop'],
    href: 'https://diamantediesel.com.br/',
    featured: true,
  },
  
]

// CONTACT
export const CONTACT = {
  email: 'weslleikopceski@gmail.com',
  links: [
    { label: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/wesllei-kopceski/' },
    { label: 'GitHub',   icon: '🐙', href: 'https://github.com/weslleik' },
    { label: 'Email',    icon: '✉️', href: 'weslleikopceski@gmail.com' },
  ],
}
