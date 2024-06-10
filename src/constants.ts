export type Project = {
  name: string
  href: string
  description: string
  status: string
  skills: string[]
  badges?: string[]
  preview?: string
}

export type Skill = {
  name: string
  count: number
}

export const projects: Project[] = [
  {
    name: '@import-meta-env/cli',
    href: 'https://www.npmjs.com/package/@import-meta-env/cli',
    description: 'Startup/Runtime environment variables solution for JavaScript.',
    status: 'stable',
    skills: ['java script', 'rust', 'unplugin', 'babel', 'swc', 'type script'],
    badges: ['https://img.shields.io/npm/dw/@import-meta-env/cli?labelColor=13171F&color=27292F'],
    preview: 'import-meta-env.png'
  },
  {
    name: 'Inspect Element',
    href: 'https://chrome.google.com/webstore/detail/flgcpmeleoikcibkiaiindbcjeldcogp',
    description: 'Chrome extension for inspecting element for content, and margin.',
    status: 'stable',
    skills: ['java script'],
    badges: [
      'https://img.shields.io/chrome-web-store/users/flgcpmeleoikcibkiaiindbcjeldcogp?labelColor=13171F&color=27292F'
    ]
  },
  {
    name: 'pinia-plugin-persistedstate-2',
    href: 'https://www.npmjs.com/package/pinia-plugin-persistedstate-2',
    description: 'Persist and rehydrate your Pinia state between page reloads.',
    status: 'stable',
    skills: ['java script', 'vue', 'pinia'],
    badges: [
      'https://img.shields.io/npm/dw/pinia-plugin-persistedstate-2?labelColor=13171F&color=27292F'
    ],
    preview: 'pinia-plugin-persisted-state-2.png'
  },
  {
    name: 'yup-schema-faker',
    href: 'https://www.npmjs.com/package/yup-schema-faker',
    description: 'Fake data generator for yup.',
    status: 'stable',
    skills: ['java script'],
    badges: ['https://img.shields.io/npm/dw/yup-schema-faker?labelColor=13171F&color=27292F']
  },
  {
    name: 'gRPC devtools',
    href: 'https://chrome.google.com/webstore/detail/fohdnlaeecihjiendkfhifhlgldpeopm',
    description: 'Browser DevTools extension for debugging gRPC network requests.',
    badges: [
      'https://img.shields.io/chrome-web-store/users/fohdnlaeecihjiendkfhifhlgldpeopm?labelColor=13171F&color=27292F'
    ],
    skills: ['java script', 'react', 'tailwindcss'],
    status: 'stable',
    preview: 'grpc-devtools.png'
  }
].map((project) => ({
  ...project,
  skills: project.skills.map((skill) => skill.toLowerCase())
}))
