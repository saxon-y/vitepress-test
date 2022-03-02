import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'vitepress',
  description: 'vitepress',
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
    ],
    sidebar: [
      { text: 'Home', link: '/' },
     ]
  },
  outDir: '../dist',
})