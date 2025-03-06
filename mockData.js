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
]
