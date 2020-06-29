let publish = null;

if(process.env.npm_config_publish) {
  publish = {
    router: {
      base: '/S/'
    },
    generate: {
      routes: [
        '/result/0',
        '/result/1',
        '/result/2',
        '/result/3',
        '/result/4',
        '/result/5',
        '/result/6',
        '/result/7',
        '/result/8',
        '/result/9',
        '/result/10',
        '/result/11',
        '/result/12',
      ]
    }
  }
}


export default {
  mode: 'spa',
  loading: false,
  head: {
    title: 'BADGIRLS LIFE STYLE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '당신의 남자친구의 성적 만족도는?' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  css: [ '@/assets/reset.css' ],
  ...publish
}
