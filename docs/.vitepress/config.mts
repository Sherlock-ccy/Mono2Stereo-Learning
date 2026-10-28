import { defineConfig } from 'vitepress'

// GitHub Pages 项目站点的路径；如果仓库改名，请修改这里的 base。
export default defineConfig({
  lang: 'zh-CN',
  title: 'Mono2Stereo Learning',
  description: '单目视频转立体视频：中文知识笔记、代码图解、安装复现与评测',
  base: '/Mono2Stereo-Learning/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: { math: true },
  head: [
    ['meta', { name: 'theme-color', content: '#edf4f5' }],
    ['link', { rel: 'icon', href: '/Mono2Stereo-Learning/favicon.svg', type: 'image/svg+xml' }]
  ],
  themeConfig: {
    logo: '/Mono2Stereo-Learning/images/logo.svg',
    siteTitle: 'Mono2Stereo',
    outline: { label: '本页目录', level: [2,3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最近更新' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    darkModeSwitchTitle: '切换主题',
    lightModeSwitchTitle: '切换浅色模式',
    search: { provider: 'local', options: { translations: { button: { buttonText: '搜索笔记', buttonAriaLabel: '搜索笔记' }, modal: { noResultsText: '没有找到相关内容', resetButtonTitle: '清除查询', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } } },
    nav: [
      { text: '快速开始', link: '/00-Guide/overview' },
      { text: '核心技术', link: '/02-Core-Technologies/index' },
      { text: '论文笔记', link: '/03-Papers/index' },
      { text: '复现经验', link: '/05-Reproduction/index' },
      { text: '学习路线', link: '/00-Guide/learning-roadmap' }
    ],
    sidebar: [
      {
            "text": "00 入门导航",
            "collapsed": false,
            "items": [
                  {
                        "text": "总览",
                        "link": "/00-Guide/index"
                  },
                  {
                        "text": "领域概览",
                        "link": "/00-Guide/overview"
                  },
                  {
                        "text": "学习路线",
                        "link": "/00-Guide/learning-roadmap"
                  },
                  {
                        "text": "术语速查",
                        "link": "/00-Guide/glossary"
                  },
                  {
                        "text": "维护笔记",
                        "link": "/00-Guide/contributing"
                  }
            ]
      },
      {
            "text": "01 基础理论",
            "collapsed": false,
            "items": [
                  {
                        "text": "总览",
                        "link": "/01-Fundamentals/index"
                  },
                  {
                        "text": "双目几何",
                        "link": "/01-Fundamentals/stereo-geometry"
                  },
                  {
                        "text": "深度与视差",
                        "link": "/01-Fundamentals/depth-disparity"
                  },
                  {
                        "text": "相机模型",
                        "link": "/01-Fundamentals/camera-projection"
                  },
                  {
                        "text": "光流与时序",
                        "link": "/01-Fundamentals/optical-flow"
                  },
                  {
                        "text": "视频扩散入门",
                        "link": "/01-Fundamentals/diffusion-primer"
                  }
            ]
      },
      {
            "text": "02 核心技术",
            "collapsed": false,
            "items": [
                  {
                        "text": "总览",
                        "link": "/02-Core-Technologies/index"
                  },
                  {
                        "text": "视频深度估计",
                        "link": "/02-Core-Technologies/video-depth"
                  },
                  {
                        "text": "前向投影 Splatting",
                        "link": "/02-Core-Technologies/forward-splatting"
                  },
                  {
                        "text": "遮挡 Mask",
                        "link": "/02-Core-Technologies/occlusion-mask"
                  },
                  {
                        "text": "视频修复",
                        "link": "/02-Core-Technologies/video-inpainting"
                  },
                  {
                        "text": "时序一致性",
                        "link": "/02-Core-Technologies/temporal-consistency"
                  },
                  {
                        "text": "几何一致性",
                        "link": "/02-Core-Technologies/geometric-consistency"
                  },
                  {
                        "text": "模型技术路线",
                        "link": "/02-Core-Technologies/generation-routes"
                  }
            ]
      },
      {
            "text": "03 论文精读",
            "collapsed": false,
            "items": [
                  {
                        "text": "论文导航",
                        "link": "/03-Papers/index"
                  },
                  {
                        "text": "StereoCrafter",
                        "link": "/03-Papers/stereocrafter"
                  },
                  {
                        "text": "Softmax Splatting",
                        "link": "/03-Papers/softmax-splatting"
                  },
                  {
                        "text": "DepthCrafter",
                        "link": "/03-Papers/depthcrafter"
                  },
                  {
                        "text": "Video Depth Anything",
                        "link": "/03-Papers/video-depth-anything"
                  },
                  {
                        "text": "M2SVid",
                        "link": "/03-Papers/m2svid"
                  },
                  {
                        "text": "DreamStereo",
                        "link": "/03-Papers/dreamstereo"
                  },
                  {
                        "text": "SpatialDreamer",
                        "link": "/03-Papers/spatialdreamer"
                  },
                  {
                        "text": "ProPainter",
                        "link": "/03-Papers/propainter"
                  },
                  {
                        "text": "SEA-RAFT",
                        "link": "/03-Papers/sea-raft"
                  },
                  {
                        "text": "ZeroStereo",
                        "link": "/03-Papers/zerostereo"
                  }
            ]
      },
      {
            "text": "04 代码图解",
            "collapsed": false,
            "items": [
                  {
                        "text": "总览",
                        "link": "/04-Code-Analysis/index"
                  },
                  {
                        "text": "代码阅读方法",
                        "link": "/04-Code-Analysis/source-reading"
                  },
                  {
                        "text": "张量形状",
                        "link": "/04-Code-Analysis/tensor-flow"
                  },
                  {
                        "text": "投影贡献统计",
                        "link": "/04-Code-Analysis/contribution-analysis"
                  },
                  {
                        "text": "绘图规范",
                        "link": "/04-Code-Analysis/diagram-guide"
                  }
            ]
      },
      {
            "text": "05 安装复现",
            "collapsed": false,
            "items": [
                  {
                        "text": "总览",
                        "link": "/05-Reproduction/index"
                  },
                  {
                        "text": "环境配置",
                        "link": "/05-Reproduction/environment"
                  },
                  {
                        "text": "模型部署",
                        "link": "/05-Reproduction/model-setup"
                  },
                  {
                        "text": "常见报错",
                        "link": "/05-Reproduction/troubleshooting"
                  },
                  {
                        "text": "复现记录",
                        "link": "/05-Reproduction/reproduction-log"
                  }
            ]
      },
      {
            "text": "06 数据集与评价",
            "collapsed": false,
            "items": [
                  {
                        "text": "总览",
                        "link": "/06-Evaluation/index"
                  },
                  {
                        "text": "常用数据集",
                        "link": "/06-Evaluation/datasets"
                  },
                  {
                        "text": "指标解释",
                        "link": "/06-Evaluation/metrics"
                  },
                  {
                        "text": "公平实验协议",
                        "link": "/06-Evaluation/evaluation-protocol"
                  }
            ]
      },
      {
            "text": "07 研究思考",
            "collapsed": false,
            "items": [
                  {
                        "text": "总览",
                        "link": "/07-Research/index"
                  },
                  {
                        "text": "研究问题",
                        "link": "/07-Research/research-questions"
                  },
                  {
                        "text": "方法对照",
                        "link": "/07-Research/comparisons"
                  },
                  {
                        "text": "消融实验",
                        "link": "/07-Research/experiments"
                  },
                  {
                        "text": "失败案例",
                        "link": "/07-Research/failure-cases"
                  }
            ]
      }
],
    socialLinks: [],
    footer: { message: '学习记录仅代表个人理解；论文方法与结果请以原文为准。', copyright: 'Mono2Stereo-Learning · 中文开放学习笔记' }
  }
})
