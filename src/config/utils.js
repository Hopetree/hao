const img_path = '/static/img/'

const searchList = {
    baidu: {
        title: '百度',
        url: 'https://www.baidu.com/s',
        key: 'wd',
        icon: img_path + 'icon_baidu.png'
    },
    zhihu: {
        title: '知乎',
        url: 'https://www.zhihu.com/search',
        key: 'q',
        icon: img_path + 'zhihu.ico'
    },
    juejin: {
        title: '掘金',
        url: 'https://juejin.cn/search',
        key: 'query',
        icon: img_path + 'juejin.svg'
    },
    github: {
        title: 'Github',
        url: 'https://github.com/search',
        key: 'q',
        icon: img_path + 'github.png'
    },
    gitee: {
        title: 'Gitee',
        url: 'https://search.gitee.com/',
        key: 'q',
        icon: img_path + 'gitee.png'
    },
    bing: {
        title: '必应',
        url: 'https://cn.bing.com/search',
        key: 'q',
        icon: img_path + 'icon_bing.png'
    },
    google: {
        title: 'Google',
        url: 'https://www.google.com/search',
        key: 'q',
        icon: img_path + 'icon_google.png'
    }
}

const linkList = {
    code: [
        {
            title: 'GitHub',
            url: 'https://github.com/',
            icon: img_path + 'github.png'
        },
        {
            title: 'V2EX',
            url: 'https://www.v2ex.com/',
            icon: img_path + 'V2EX.png'
        },
        {
            title: '阿里云',
            url: 'https://www.aliyun.com/acts/hi-group-buying?userCode=dgozgt4b',
            icon: img_path + 'aliyun.png'
        },
        {
            title: '腾讯云',
            url: 'https://cloud.tencent.com/act/cps/redirect?redirect=1047&cps_key=1bea2ee5dee7264320c77d83eb5adc8e',
            icon: img_path + 'cloudqq.png'
        },
        {
            title: '百度云',
            url: 'https://cloud.baidu.com/',
            icon: img_path + 'baiduyun.png'
        },
        {
            title: '七牛云',
            url: 'https://sso.qiniu.com/',
            icon: img_path + 'qiniu.png'
        }
    ],
    video: [
        {
            title: '腾讯视频',
            url: 'https://v.qq.com/',
            icon: img_path + 'vqq.png'
        },
        {
            title: '爱奇艺',
            url: 'https://www.iqiyi.com/',
            icon: img_path + 'iqiyi.png'
        },
        {
            title: '优酷',
            url: 'https://www.youku.com/',
            icon: img_path + 'youku.png'
        },
        {
            title: '斗鱼直播',
            url: 'https://www.douyu.com/directory/all',
            icon: img_path + 'douyu.png'
        },
        {
            title: '虎牙直播',
            url: 'https://www.huya.com/l',
            icon: img_path + 'huya.png'
        },
        {
            title: 'Bilibili',
            url: 'https://www.bilibili.com/',
            icon: img_path + 'bilibili.png'
        }
    ],
    news: [
        {
            title: '微博',
            url: 'https://weibo.com/',
            icon: img_path + 'weibo.png'
        },
        {
            title: '豆瓣',
            url: 'https://www.douban.com/',
            icon: img_path + 'douban.png'
        },
        {
            title: '知乎',
            url: 'https://www.zhihu.com/',
            icon: img_path + 'zhihu.png'
        },
        {
            title: '简书',
            url: 'https://www.jianshu.com/',
            icon: img_path + 'jianshu.png'
        },
        {
            title: '开源中国',
            url: 'https://www.oschina.net/',
            icon: img_path + 'oschina.png'
        },
        {
            title: 'ZAKER',
            url: 'http://www.myzaker.com/',
            icon: img_path + 'zaker.png'
        }
    ],
    shops: [
        {
            title: '淘宝',
            url: 'https://www.taobao.com/',
            icon: img_path + 'taobao.png'
        },
        {
            title: '天猫',
            url: 'https://www.tmall.com/',
            icon: img_path + 'tmall.png'
        },
        {
            title: '京东',
            url: 'https://www.jd.com/',
            icon: img_path + 'jd.png'
        },
        {
            title: '苏宁',
            url: 'https://www.suning.com/',
            icon: img_path + 'suning.png'
        },
        {
            title: '当当网',
            url: 'http://www.dangdang.com',
            icon: img_path + 'dangdang.png'
        },
        {
            title: '小米有品',
            url: 'https://www.xiaomiyoupin.com/',
            icon: img_path + 'xiaomiyoupin.png'
        }
    ],
    resource: [
        {
            title: '电影天堂',
            url: 'https://www.dytt8.net/',
            icon: img_path + 'dytt8.png'
        },
        {
            title: '时光网',
            url: 'http://www.mtime.com/',
            icon: img_path + 'mtime.png'
        },
        {
            title: '韩剧TV',
            url: 'https://www.hanjutv.com/',
            icon: img_path + 'hanjutv.ico'
        },
        {
            title: '图床',
            url: 'https://imgurl.org/',
            icon: img_path + 'imgurl.png'
        },
        {
            title: '流程图',
            url: 'https://www.processon.com/',
            icon: img_path + 'processon.png'
        },
        {
            title: '下厨房',
            url: 'http://www.xiachufang.com/',
            icon: img_path + 'xiachufang.png'
        },
    ]
}

export default {
    searchList,
    linkList
}