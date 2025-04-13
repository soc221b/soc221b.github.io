export type Project = {
  name: string
  href: string
  homeBadge: string
  downloadBadge: string
}

export type Skill = {
  name: string
  count: number
}

export const projects: Project[] = [
  {
    name: 'Inspect Element',
    href: 'https://chrome.google.com/webstore/detail/flgcpmeleoikcibkiaiindbcjeldcogp',
    homeBadge:
      'https://img.shields.io/chrome-web-store/v/flgcpmeleoikcibkiaiindbcjeldcogp?labelColor=13171F&color=27292F',
    downloadBadge:
      'https://img.shields.io/chrome-web-store/users/flgcpmeleoikcibkiaiindbcjeldcogp?labelColor=13171F&color=27292F'
  },
  {
    name: 'gRPC devtools',
    href: 'https://chrome.google.com/webstore/detail/fohdnlaeecihjiendkfhifhlgldpeopm',
    homeBadge:
      'https://img.shields.io/chrome-web-store/v/fohdnlaeecihjiendkfhifhlgldpeopm?labelColor=13171F&color=27292F',
    downloadBadge:
      'https://img.shields.io/chrome-web-store/users/fohdnlaeecihjiendkfhifhlgldpeopm?labelColor=13171F&color=27292F'
  },
  {
    name: 'Find',
    href: 'https://chromewebstore.google.com/detail/find/akaeoepndhnhffnginkbdcoigbpnnljh',
    homeBadge:
      'https://img.shields.io/chrome-web-store/v/akaeoepndhnhffnginkbdcoigbpnnljh?labelColor=13171F&color=27292F',
    downloadBadge:
      'https://img.shields.io/chrome-web-store/users/akaeoepndhnhffnginkbdcoigbpnnljh?labelColor=13171F&color=27292F'
  },
  {
    name: '@import-meta-env/cli',
    href: 'https://www.npmjs.com/package/@import-meta-env/cli',
    homeBadge: 'https://img.shields.io/npm/v/@import-meta-env/cli?labelColor=13171F&color=27292F',
    downloadBadge:
      'https://img.shields.io/npm/dw/@import-meta-env/cli?labelColor=13171F&color=27292F'
  },
  {
    name: 'pinia-plugin-persistedstate-2',
    href: 'https://www.npmjs.com/package/pinia-plugin-persistedstate-2',
    homeBadge:
      'https://img.shields.io/npm/v/pinia-plugin-persistedstate-2?labelColor=13171F&color=27292F',
    downloadBadge:
      'https://img.shields.io/npm/dw/pinia-plugin-persistedstate-2?labelColor=13171F&color=27292F'
  },
  {
    name: 'yup-schema-faker',
    href: 'https://www.npmjs.com/package/yup-schema-faker',
    homeBadge: 'https://img.shields.io/npm/v/yup-schema-faker?labelColor=13171F&color=27292F',
    downloadBadge: 'https://img.shields.io/npm/dw/yup-schema-faker?labelColor=13171F&color=27292F'
  },
  {
    name: '@runtime-env/cli',
    href: 'https://www.npmjs.com/package/@runtime-env/cli',
    homeBadge: 'https://img.shields.io/npm/v/@runtime-env/cli?labelColor=13171F&color=27292F',
    downloadBadge: 'https://img.shields.io/npm/dw/@runtime-env/cli?labelColor=13171F&color=27292F'
  },
  {
    name: 'zod-schema-faker',
    href: 'https://www.npmjs.com/package/zod-schema-faker',
    homeBadge: 'https://img.shields.io/npm/v/zod-schema-faker?labelColor=13171F&color=27292F',
    downloadBadge: 'https://img.shields.io/npm/dw/zod-schema-faker?labelColor=13171F&color=27292F'
  },
  {
    name: 'ngx-exhaustive-check',
    href: 'https://www.npmjs.com/package/ngx-exhaustive-check',
    homeBadge: 'https://img.shields.io/npm/v/ngx-exhaustive-check?labelColor=13171F&color=27292F',
    downloadBadge:
      'https://img.shields.io/npm/dw/ngx-exhaustive-check?labelColor=13171F&color=27292F'
  }
]
  .sort((a, b) => a.name.localeCompare(b.name))
  .sort((a, b) => a.homeBadge.localeCompare(b.homeBadge))
