const cloundinaryLink: string =
  'https://res.cloudinary.com/diumu5rys/image/upload/v1694443658/weather-widget-icons/';
export function IconTransform(icon: string) {
  for (let index = 0; index < cloudinaryId.length; index++) {
    const element = cloudinaryId[index];
    if (icon === element.name)
      return cloundinaryLink + element.transform + '.svg';
  }
  return 'acy56v7hfwz6sxscdbbu';
}

const cloudinaryId = [
  {
    id: 1,
    name: '01d',
    transform: 'acy56v7hfwz6sxscdbbu',
  },
  {
    id: 2,
    name: '01n',
    transform: 'xj61utiks04dnmqlf7qu',
  },
  {
    id: 3,
    name: '02d',
    transform: 'roz535ar4zysrepzbhk3',
  },
  {
    id: 4,
    name: '02n',
    transform: 'qo7i6h5y6dmcliyhhto3',
  },
  {
    id: 5,
    name: '03d',
    transform: 'zisxhovcoplz36ic5wsm',
  },
  {
    id: 6,
    name: '03n',
    transform: 'zisxhovcoplz36ic5wsm',
  },
  {
    id: 7,
    name: '04d',
    transform: 'zisxhovcoplz36ic5wsm',
  },
  {
    id: 8,
    name: '04n',
    transform: 'zisxhovcoplz36ic5wsm',
  },
  {
    id: 9,
    name: '09d',
    transform: 'vb3n4q7bttuarctmpxbt',
  },
  {
    id: 10,
    name: '09n',
    transform: 'vb3n4q7bttuarctmpxbt',
  },
  {
    id: 11,
    name: '10d',
    transform: 'zxxb5geog1pejfzr2pca',
  },
  {
    id: 12,
    name: '10n',
    transform: 'udqtmrjdl6q7vbffopiw',
  },
  {
    id: 13,
    name: '11d',
    transform: 'izujxvdwheqmpxruuh7b',
  },
  {
    id: 14,
    name: '11n',
    transform: 'izujxvdwheqmpxruuh7b',
  },
  {
    id: 15,
    name: '13d',
    transform: 'bnch4nbhuqjfhkgfsfeb',
  },
  {
    id: 16,
    name: '13n',
    transform: 'txlesxtshimtgmg0kfpu',
  },
  {
    id: 17,
    name: '50d',
    transform: 'a4doamiapv2ohpra14nc',
  },
  {
    id: 18,
    name: '50n',
    transform: 'a4doamiapv2ohpra14nc',
  },
];
