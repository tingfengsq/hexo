const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "游",
        artist: '隔壁老樊',
        url: 'http://music.163.com/song/media/outer/url?id=1361195373.mp3',
        cover: 'http://123.56.231.189/file/you.png',
      },
      {
        name: '我要找到你',
        artist: 'zic子晨',
        url: 'http://music.163.com/song/media/outer/url?id=1406642934.mp3',
        cover: 'http://123.56.231.189/file/fingyou.png',
      },
      {
        name: '我的姑娘 他在远方',
        artist: '隔壁老樊',
        url: 'http://music.163.com/song/media/outer/url?id=1405319676.mp3',
        cover: 'http://123.56.231.189/file/girl.png',
      },
      {
        name: 'Why',
        artist: 'Klass/Mazza',
        url: 'http://music.163.com/song/media/outer/url?id=565202998.mp3',
        cover: 'http://123.56.231.189/file/why.png',
      }
    ]
});