import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Balance",
  description: "Enjoy life, Enjoy work",
  // @ts-ignore
  head: [["link", { rel: "icon", href: process.env.NODE_ENV === "production" ? "/blog/taiji.svg" : "/taiji.svg" }]],
  // @ts-ignore
  base: process.env.NODE_ENV === "production" ? "/blog/" : "/",
  lastUpdated: true,
  cleanUrls: true,
  outDir: "dist",

  themeConfig: {
    logo: "/taiji.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "前端技术", link: "/docs/font-end/", activeMatch: "font-end/" },
      { text: "后端技术", link: "/docs/back-end/", activeMatch: "/back-end/" },
      { text: "测试技术", link: "/docs/test/", activeMatch: "/test/" },
      { text: "随想随记", link: "/docs/life/", activeMatch: "/life/" },
      { text: "关于我", link: "/docs/about-me/", activeMatch: "/about-me/" },
    ],

    sidebar: {
      "/docs/font-end/": {
        base: "/docs/font-end/",
        items: sidebarFontEnd(),
      },
      "/docs/back-end/": {
        base: "/docs/back-end/",
        items: sidebarBackEnd(),
      },
      "/docs/life/": {
        base: "/docs/life/",
        items: sidebarLife(),
      },
      "/docs/test/": {
        base: "/docs/test/",
        items: sidebarTest(),
      },
      "/docs/about-me/": [
        {
          text: "resume",
          link: "/docs/about-me/",
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/yyi0708/blog" }],

    footer: {
      message: "知道你想要做什么，知道你的能力边界，快乐成长",
      copyright: '<span style="color:red;">知行合一</span>',
    },
  },
});

// 前端
function sidebarFontEnd(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础-进阶",
      items: [
        {
          text: "Js基础知识-进阶",
          link: "basic/js",
        },
        {
          text: "前端模块化",
          link: "basic/moudle",
        },
        {
          text: "Ts-类型从浅入深",
          link: "basic/ts",
        },
        {
          text: "JS多线程的了解",
          link: "basic/multithreading",
        },
        {
          text: "编程风格AOP/OOP/POP",
          link: "basic/program",
        },
      ],
    },
    {
      text: "工程化",
      items: [
        {
          text: "包管理器",
          link: "project/pkgManage",
        },
        {
          text: "单元-组件-e2e测试",
          link: "project/test",
        },
        {
          text: "开发工作流选择",
          link: "project/workflow",
        },
        {
          text: "脚手架",
          link: "project/cli",
        },
        {
          text: "构建工具",
          link: "project/build",
        },
        {
          text: "组件化",
          link: "project/compents",
        },
        {
          text: "微前端",
          link: "project/mico-font-end",
        },
        {
          text: "部署方式",
          link: "project/deploy",
        },
      ],
    },
    {
      text: "小片段技巧",
      items: [
        {
          text: "获取文件路径",
          link: "skill/getCurrentPath",
        },
        {
          text: "自动切换node环境",
          link: "skill/autoSwitchEnv",
        },
      ],
    },
    {
      text: "实战项目",
      items: [
        {
          text: "sample-cli",
          link: "flight/sample-cli",
        },
      ],
    },
  ];
}

// 后端
function sidebarBackEnd(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "NodeJs技术",
      items: [
        {
          text: "NestJs",
          link: "node/nest",
        },
        {
          text: "Express",
          link: "node/express",
        },
        {
          text: "ORM框架",
          link: "node/orm",
        },
        {
          text: "通过PostgreSQL了解数据库",
          link: "node/sql",
        },
      ],
    },
    {
      text: "Python技术",
      items: [
        {
          text: "python基础-进阶",
          link: "python/basic",
        },
        {
          text: "Django基础-进阶",
          link: "python/django",
        },
        {
          text: "FastAPI基础-进阶",
          link: "python/fastapi",
        },
        {
          text: "爬虫",
          link: "python/crawel",
        },
        {
          text: "Redis",
          link: "python/redis",
        },
        {
          text: "SQLAlchemy的使用",
          link: "python/sqlalchemy",
        },
      ],
    },
    {
      text: "设计模式",
      items: [
        {
          text: "工厂模式",
          link: "mode/factory",
        },
      ],
    },
    {
      text: "Docker技术",
      items: [
        {
          text: "Docker基础使用",
          link: "docker/basic",
        },
      ],
    },
    {
      text: "实战项目",
      items: [
        {
          text: "lottery",
          link: "fight/lottery",
        },
      ],
    },
  ];
}

// 生活
function sidebarLife(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "古代哲学",
      items: [
        {
          text: "易经",
          link: "old-philosophy/yijin",
        },
      ],
    },
    {
      text: "命理学",
      items: [
        {
          text: "八字",
          link: "acticle/demo.md",
        },
      ],
    },
  ];
}

// 测试
function sidebarTest(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "功能测试",
      collapsed: false,
      items: [
        {
          text: "01-需求分析",
          collapsed: true,
          items: [{ text: "需求分析和思考", link: "function/demand_analysis/demand.md" }],
        },
        {
          text: "02-测试分析",
          collapsed: true,
          items: [
            { text: "测试分析之原理分析个人浅谈", link: "function/test_analysis/test_analysis.md" },
            {
              text: "UI约束表格",link: "function/test_analysis/UI约束表格.md",
            },
          ],
        },
        {
          text: "03-测试设计",
          collapsed: true,
          items: [
            { text: "测试设计框架流程图", link: "function/test_design/测试设计框架.md" },
          ],
        },
      ],
    },
    {
      text: "接口自动化测试",
      items: [
        {
          text: "接口自动化测试",
          link: "autotest/interface.md",
        },
      ],
    },
    {
      text: "UI自动化测试",
      items: [
        {
          text: "UI自动化测试",
          link: "UItest/UItest.md",
        },
      ],
    },
    {
      text: "测试工具",
      items: [
        {
          text: "测试工具",
          link: "testtoll/testtoll.md",
        },
      ],
    },
  ];
}
