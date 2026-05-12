import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "积成的社会学wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "zh-CN",
    baseUrl: "nervonly.cn",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "Source Han Sans SC",
        body: "LXGW WenKai",
        code: "Sarasa Mono SC",
      },
      colors: {
        lightMode: {
          light: "#f5f0e8",
          lightgray: "#e0d8cc",
          gray: "#9a8e7e",
          darkgray: "#4a3f35",
          dark: "#1a120b",
          secondary: "#c45e00",
          tertiary: "#5a7a4a",
          highlight: "rgba(196, 94, 0, 0.12)",
          textHighlight: "#c45e0044",
        },
        darkMode: {
          light: "#0d0d12",
          lightgray: "#1a1a24",
          gray: "#56566a",
          darkgray: "#c8c8d8",
          dark: "#e8e8f0",
          secondary: "#ff8c42",
          tertiary: "#6a9e5a",
          highlight: "rgba(255, 140, 66, 0.12)",
          textHighlight: "#ff8c4244",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Plugin.CustomOgImages(), // disabled: custom fonts not fetchable by OG renderer
    ],
  },
}

export default config
