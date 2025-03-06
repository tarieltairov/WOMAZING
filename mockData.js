import productPhoto2 from 'assets/images/ProductPhoto(1).png'
import productPhoto3 from 'assets/images/ProductPhoto(2)..png'
import productPhoto from 'assets/images/ProductPhoto.png'

export const categories = [
  {
    title: 'Футболки',
    id: 1,
  },
  {
    title: 'Купальники',
    id: 2,
  },
  {
    title: 'Кардиганы',
    id: 3,
  },
  {
    title: 'Свитшоты',
    id: 4,
  },
]

export const products = [
  {
    id: 1,
    image: productPhoto,
    name: 'Футболка USA',
    discountPrice: 129,
    price: 229,
    sizes: ['S', 'L', 'XL'],
    colors: [1, 3],
    categoryId: 1,
  },
  {
    id: 2,
    image: productPhoto2,
    name: 'Купальник Glow',
    discountPrice: 129,
    price: 229,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [2, 4],
    categoryId: 2,
  },
  {
    id: 3,
    image: productPhoto3,
    name: 'Свитшот Sweet Shot',
    discountPrice: 129,
    price: 229,
    sizes: ['XL', 'XXL'],
    colors: [1, 4],
    categoryId: 4,
  },
  {
    id: 101,
    image:
      'https://basket-20.wbbasket.ru/vol3353/part335398/335398507/images/c516x688/1.webp',
    name: 'Свитшот спортивный оверсайз',
    discountPrice: 100,
    price: 200,
    sizes: ['S', 'M'],
    colors: [1, 4],
    categoryId: 4,
  },
  {
    id: 102,
    image:
      'https://basket-11.wbbasket.ru/vol1633/part163335/163335064/images/c516x688/1.webp',
    name: 'Свитшот Round Neck',
    discountPrice: 110,
    price: 210,
    sizes: ['S', 'L'],
    colors: [1, 2],
    categoryId: 4,
  },
  {
    id: 103,
    image:
      'https://basket-12.wbbasket.ru/vol1828/part182849/182849920/images/c516x688/1.webp',
    name: 'Спортивный свитшот',
    discountPrice: 115,
    price: 215,
    sizes: ['L', 'XL'],
    colors: [2, 3, 4],
    categoryId: 4,
  },
  {
    id: 105,
    image:
      'https://basket-12.wbbasket.ru/vol1828/part182849/182849919/images/c516x688/1.webp',
    name: 'Спортивный свитшот',
    discountPrice: 95,
    price: 195,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [1, 2, 4],
    categoryId: 4,
  },
  {
    id: 106,
    image:
      'https://basket-04.wbbasket.ru/vol645/part64583/64583530/images/c516x688/1.webp',
    name: 'Свитшот спортивный без начеса',
    discountPrice: 95,
    price: 195,
    sizes: ['XXL'],
    colors: [1, 2, 3, 4],
    categoryId: 4,
  },
  {
    id: 107,
    image:
      'https://basket-20.wbbasket.ru/vol3407/part340735/340735953/images/c516x688/1.webp',
    name: 'Свитшот',
    discountPrice: 100,
    price: 200,
    sizes: ['S'],
    colors: [1, 2, 3, 4],
    categoryId: 4,
  },
  {
    id: 108,
    image:
      'https://basket-16.wbbasket.ru/vol2617/part261795/261795310/images/c516x688/1.webp',
    name: 'Свитшот спортивный на молнии',
    discountPrice: 110,
    price: 210,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [1, 2, 3, 4],
    categoryId: 4,
  },
  {
    id: 109,
    image:
      'https://basket-20.wbbasket.ru/vol3345/part334599/334599207/images/c516x688/1.webp',
    name: 'Свитшот для фитнеса Domyos 300',
    price: 250,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [1, 2, 3, 4],
    categoryId: 4,
  },
  {
    id: 110,
    image:
      'https://basket-18.wbbasket.ru/vol3048/part304823/304823808/images/c516x688/2.webp',
    name: 'Tommy Hilfiger свитшот женский',
    price: 230,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [1, 2, 3, 4],
    categoryId: 4,
  },
  {
    id: 111,
    image:
      'https://basket-02.wbbasket.ru/vol155/part15577/15577174/images/c516x688/2.webp',
    name: 'Свитшот оверсайз укороченный дизайнерский',
    price: 230,
    sizes: ['L'],
    colors: [1, 3, 4],
    categoryId: 4,
  },
  {
    id: 112,
    image:
      'https://basket-17.wbbasket.ru/vol2691/part269172/269172743/images/c516x688/1.webp',
    name: 'Свитшот женский',
    discountPrice: 110,
    price: 210,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [1, 2, 4],
    categoryId: 4,
  },
  {
    id: 113,
    image:
      'https://basket-11.wbbasket.ru/vol1615/part161563/161563210/images/c516x688/1.webp',
    name: 'Свитшот хлопковый бархатный',
    discountPrice: 135,
    price: 235,
    sizes: ['XS', 'S', 'XL'],
    colors: [1, 3, 4],
    categoryId: 4,
  },

  {
    id: 114,
    image:
      'https://basket-10.wbbasket.ru/vol1479/part147977/147977776/images/c516x688/4.webp',
    name: 'Купальники',
    discountPrice: 125,
    price: 225,
    sizes: ['XS', 'M', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 115,
    image:
      'https://basket-12.wbbasket.ru/vol1730/part173040/173040887/images/c516x688/7.webp',
    name: 'Купальники',
    discountPrice: 155,
    price: 255,
    sizes: ['XS', 'S', 'XL', 'M'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 160,
    image:
      'https://basket-10.wbbasket.ru/vol1478/part147870/147870140/images/c516x688/8.webp',
    name: 'Купальники',
    discountPrice: 100,
    price: 200,
    sizes: ['XXL', 'S', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 161,
    image:
      'https://basket-19.wbbasket.ru/vol3156/part315683/315683514/images/c516x688/1.webp',
    name: 'Купальники',
    discountPrice: 90,
    price: 190,
    sizes: ['XS', 'M', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 116,
    image:
      'https://basket-05.wbbasket.ru/vol958/part95874/95874708/images/c516x688/1.webp',
    name: 'Купальники',
    price: 215,
    sizes: ['XS', 'S', 'XL', 'XXL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 117,
    image:
      'https://basket-10.wbbasket.ru/vol1459/part145973/145973472/images/c516x688/1.webp',
    name: 'Купальники',
    discountPrice: 130,
    price: 230,
    sizes: ['XS', 'S', 'XL', 'M'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 118,
    image:
      'https://basket-15.wbbasket.ru/vol2271/part227180/227180004/images/c516x688/1.webp',
    name: 'Купальники',
    discountPrice: 140,
    price: 240,
    sizes: ['XS', 'S', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 119,
    image:
      'https://basket-15.wbbasket.ru/vol2377/part237772/237772154/images/c516x688/2.webp',
    name: 'Купальники',
    discountPrice: 170,
    price: 270,
    sizes: ['S', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 120,
    image:
      'https://basket-12.wbbasket.ru/vol1730/part173039/173039731/images/c516x688/1.webp',
    name: 'Купальники',
    price: 260,
    sizes: ['XS', 'S', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 121,
    image:
      'https://basket-19.wbbasket.ru/vol3072/part307200/307200214/images/c516x688/2.webp',
    name: 'Купальники',
    discountPrice: 135,
    price: 235,
    sizes: ['XS', 'S'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 122,
    image:
      'https://basket-12.wbbasket.ru/vol1700/part170070/170070222/images/c516x688/1.webp',
    name: 'Купальники',
    price: 250,
    sizes: ['XS', 'S', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 123,
    image:
      'https://basket-02.wbbasket.ru/vol271/part27168/27168555/images/c516x688/2.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 124,
    image:
      'https://basket-15.wbbasket.ru/vol2236/part223615/223615658/images/c516x688/1.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 2,
  },
  {
    id: 125,
    image:
      'https://basket-10.wbbasket.ru/vol1472/part147278/147278695/images/c516x688/2.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 126,
    image:
      'https://basket-14.wbbasket.ru/vol2107/part210767/210767751/images/c516x688/1.webp',
    name: 'Купальники',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 127,
    image:
      'https://basket-10.wbbasket.ru/vol1518/part151866/151866819/images/c516x688/1.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 128,
    image:
      'https://basket-14.wbbasket.ru/vol2072/part207269/207269070/images/c516x688/2.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 129,
    image:
      'https://basket-11.wbbasket.ru/vol1634/part163400/163400590/images/c516x688/1.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 130,
    image:
      'https://basket-09.wbbasket.ru/vol1202/part120238/120238278/images/c516x688/2.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL', 'S'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 131,
    image:
      'https://basket-19.wbbasket.ru/vol3268/part326875/326875834/images/c516x688/3.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 132,
    image:
      'https://basket-19.wbbasket.ru/vol3204/part320448/320448982/images/c516x688/1.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 133,
    image:
      'https://basket-19.wbbasket.ru/vol3204/part320430/320430157/images/c516x688/6.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL', 'M'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 134,
    image:
      'https://basket-14.wbbasket.ru/vol2165/part216533/216533017/images/c516x688/1.webp',
    name: 'Купальники',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 135,
    image:
      'https://basket-15.wbbasket.ru/vol2291/part229172/229172469/images/c516x688/6.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 136,
    image:
      'https://basket-14.wbbasket.ru/vol2112/part211239/211239058/images/c516x688/1.webp',
    name: 'Купальники',
    discountPrice: 120,
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 137,
    image:
      'https://basket-20.wbbasket.ru/vol3316/part331688/331688924/images/c516x688/1.webp',
    name: 'Купальники',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 138,
    image:
      'https://basket-17.wbbasket.ru/vol2795/part279543/279543247/images/c516x688/1.webp',
    name: 'Купальники',
    price: 220,
    sizes: ['XS', 'XL', 'S'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 139,
    image:
      'https://basket-11.wbbasket.ru/vol1622/part162229/162229737/images/c516x688/1.webp',
    name: 'Купальники',
    price: 220,
    sizes: ['XS', 'XXl'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 140,
    image:
      'https://basket-19.wbbasket.ru/vol3129/part312928/312928348/images/c516x688/1.webp',
    name: 'Купальники',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 140,
    image:
      'https://basket-19.wbbasket.ru/vol3129/part312928/312928348/images/c516x688/1.webp',
    name: 'Купальники',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 3,
  },
  {
    id: 141,
    image:
      'https://basket-19.wbbasket.ru/vol3129/part312928/312928348/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 142,
    image:
      'https://basket-19.wbbasket.ru/vol3068/part306890/306890105/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 143,
    image:
      'https://basket-19.wbbasket.ru/vol3078/part307888/307888932/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 144,
    image:
      'https://basket-15.wbbasket.ru/vol2297/part229730/229730713/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 145,
    image:
      'https://basket-19.wbbasket.ru/vol3081/part308195/308195584/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 146,
    image:
      'https://basket-19.wbbasket.ru/vol3173/part317343/317343766/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 147,
    image:
      'https://basket-14.wbbasket.ru/vol2129/part212947/212947219/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 148,
    image:
      'https://basket-10.wbbasket.ru/vol1525/part152506/152506933/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 149,
    image:
      'https://basket-12.wbbasket.ru/vol1835/part183531/183531068/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL', 'S'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 150,
    image:
      'https://basket-13.wbbasket.ru/vol2042/part204241/204241573/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 151,
    image:
      'https://basket-05.wbbasket.ru/vol774/part77499/77499784/images/c516x688/2.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 152,
    image:
      'https://basket-17.wbbasket.ru/vol2716/part271632/271632652/images/c516x688/2.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 153,
    image:
      'https://basket-04.wbbasket.ru/vol629/part62949/62949164/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 154,
    image:
      'https://basket-12.wbbasket.ru/vol1732/part173226/173226050/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 155,
    image:
      'https://basket-08.wbbasket.ru/vol1129/part112961/112961573/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 156,
    image:
      'https://basket-17.wbbasket.ru/vol2810/part281002/281002631/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
  {
    id: 157,
    image:
      'https://basket-16.wbbasket.ru/vol2450/part245058/245058161/images/c516x688/1.webp',
    name: 'Футболки',
    price: 220,
    sizes: ['XS', 'XL'],
    colors: [1, 3, 4],
    categoryId: 1,
  },
]
