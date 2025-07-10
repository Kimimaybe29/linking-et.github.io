// config/nav.ts

import {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    { text: '了解我们',
        items: [
            { text: '我们是谁？', link: '/docs/about' },
            { text: '核心成员列表', link: '/docs/about/team'},
            { text: '安全发言准则', link: '/docs/about/rule'},
        ]
    },
    {
        text: '服务器列表',
        items: [
            { text: 'Kimi的万事屋', link: '/docs/kimi/' },
            { text: '淡水之域', link: '/docs/water/' },
            { text: '叶服',link: '/docs/ye/' },
            { text: '呦呦的后花园',link: '/docs/yoyo/' }
        ]
    }
];