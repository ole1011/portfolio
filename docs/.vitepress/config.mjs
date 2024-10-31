import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Personal Portfolio",
  description: "My personal portfolio",
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/penguin.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Work', link: '/work' },
      { text: 'Projects', link: '/projects'},
      { text: 'Contact', link: '/contact' }
    ],
    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Work', link: '/work' },
          { text: 'Projects', link: '/projects' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ole1011/' },
      { icon: 'x', link: 'https://x.com/ole101_/' },
      { icon: 'youtube', link: 'https://youtube.com/@ole1018' }
    ],
    footer: {
      message: 'Published under the MIT License',
      copyright: 'Copyright © 2024 Ole H.'
    },
    search: {
      provider: 'local',
    },
    logo: '/penguin.svg',
    cleanUrls: true,
  }
})
