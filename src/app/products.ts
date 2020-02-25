export interface Product {
  id: number;
  name: string;
  category: number;
  price: number;
  description: string;
  rating: number;
  link: string;
  img: string[];
}

export const PRODUCTS = [
  // Phones
  {
    id: 0,
    name: 'Phone 11',
    category: 0,
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: 2,
    link: 'https://aliexpress.ru/item/4000200667700.html?spm=a2g0o.productlist.0.0.9d37143avXDZbg',
    img: ['assets/images/iphone3.jpg', 'assets/images/iphone4.jpg', 'assets/images/iphone1.jpg']
  },
  {
    id: 1,
    name: 'Phone Mini',
    category: 0,
    price: 699,
    description: 'A great phone with one of the best cameras',
    rating: 3,
    link: 'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
    img: ['assets/images/iphone1.jpg', 'assets/images/iphone2.jpg', 'assets/images/iphone5.jpg']
  },
  {
    id: 2,
    name: 'Phone Standard',
    category: 0,
    price: 299,
    description: '',
    rating: 4,
    link: 'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
    img: ['assets/images/iphone3.jpg', 'assets/images/iphone4.jpg', 'assets/images/iphone6.jpg']
  },
  {
    id: 3,
    name: 'Iphone Standard',
    category: 0,
    price: 100,
    description: 'bla bla bla',
    rating: 5,
    link: 'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
    img: ['assets/images/iphone5.jpg', 'assets/images/iphone6.jpg', 'assets/images/iphone1.jpg']
  },
  {
    id: 4,
    name: 'Оригинальный Apple iPhone X ',
    category: 0,
    price: 573.34,
    description: ' 3 ГБ ОЗУ 64 Гб 256 Гб ПЗУ 5,8 "iOS Hexa core 12,0 МП Двойная Задняя камера разблокированный 4G LTE мобильный телефон',
    rating: 5,
    link: 'https://aliexpress.ru/item/32952258136.html?spm=a2g0o.productlist.0.0.9d37143avXDZbg',
    img: ['https://ae01.alicdn.com/kf/HTB1O6xdXUvrK1RjSspcq6zzSXXax/Apple-iPhone-X-3-64-256-5-8-iOS-Hexa.jpg',
      'https://ae01.alicdn.com/kf/HTB1rD8hXODxK1RjSsD4q6z1DFXab/Apple-iPhone-X-3-64-256-5-8-iOS-Hexa.jpg',
      'https://ae01.alicdn.com/kf/HTB1QfpgXLfsK1RjSszgq6yXzpXay/Apple-iPhone-X-3-64-256-5-8-iOS-Hexa.jpg']
  },

  //Men clothes
  {
    id: 5,
    name: 'George Giraffe',
    category: 1,
    price: 32,
    description: '2020 новое летнее хлопковое поло для мужчин с вышивкой жирафа, высокое качество, фирменный дизайн, рубашка поло для мужчин с коротким рукавом, Мужская одежда, топы, футболки',
    rating: 4.23,
    link: 'https://aliexpress.ru/item/4000696095555.html',
    img: ['https://ae01.alicdn.com/kf/H8cb08237c00e48f4af7424d20b918f56s/2020.jpg',
      'https://ae01.alicdn.com/kf/He42308c6e1ac49cfb1cb9aa30ad68cd6D/2020.jpg',
      'https://ae01.alicdn.com/kf/He68e6bbdea784796a78dda22c82f0292j/2020.jpg']
  },
  {
    id: 6,
    name: 'George Giraffe Hoodie',
    category: 1,
    price: 52,
    description: 'Новинка 2019 года, хлопок осенне-зимние толстовки с капюшоном для мужчин, однотонная толстовка из флиса, плотные мужские спортивные толстовки, толстовки на молнии для мужчин',
    rating: 4.78,
    link: 'https://aliexpress.ru/item/33019176077.html',
    img: ['https://ae01.alicdn.com/kf/He6a08d6d38a7426d87b920d5ef1d3682p/2019.jpg',
      'https://ae01.alicdn.com/kf/H54e3b0dac3b14c21aaaa115e1acbc267m/2019.jpg',
      'https://ae01.alicdn.com/kf/Hef26f26694a9402fbf3ae75610d20e98m/2019.jpg']
  },
  {
    id: 7,
    name: 'STIHL Texas Chainsaw',
    category: 1,
    price: 6.99,
    description: 'Любой парень оценит! =)',
    rating: 2.78,
    link: 'https://aliexpress.ru/item/4000363190135.html',
    img: ['https://ae01.alicdn.com/kf/H3dacdfe16e6f493bbea85f6fc8396bb4J/STIHL-Texas-Chainsaw.jpg']
  },

  // Women clothes
  {
    id: 8,
    name: 'Misswim',
    category: 2,
    price: 9.99,
    description: 'по иде норм вещь',
    rating: 4.78,
    link: 'https://aliexpress.ru/item/4000265191892.html',
    img: ['https://ae01.alicdn.com/kf/H89f527e546324212870a958679e63c8aS/Misswim.jpg',
    'https://ae01.alicdn.com/kf/H1253bb793eb1481db5cf53300875c390t/Misswim.jpg',
      'https://ae01.alicdn.com/kf/He5430fb5b04b4ffb9e7c56a0640d2afcc/Misswim.jpg']
  },

  {
    id: 9,
    name: 'TWOTWINSTYLE',
    category: 2,
    price: 8.26,
    description: 'В нем вообще ауф!!!!!',
    rating: 3.52,
    link: 'https://aliexpress.ru/item/4000305323868.html',
    img: ['https://ae01.alicdn.com/kf/H6d66c12bb5f8478c81ef02f5758b4f47t/TWOTWINSTYLE.jpg',
    'https://ae01.alicdn.com/kf/Hfe5408c75f6446d49f653ed73d2d80201/TWOTWINSTYLE.jpg',
    'https://ae01.alicdn.com/kf/Hcd03eb0d03594a0bbe81c4d66619808bT/TWOTWINSTYLE.jpg']
  },
  {
    id: 10,
    name: 'tooci peach',
    category: 2,
    price: 12.32,
    description: 'Красиво. Элегантно',
    rating: 3.52,
    link: 'https://aliexpress.ru/item/32967082453.html',
    img: ['https://ae01.alicdn.com/kf/HTB1Qz_ZaxrvK1RjSszeq6yObFXag/-.jpg',
    'https://ae01.alicdn.com/kf/HTB1cmbRayfrK1RjSspbq6A4pFXaq/-.jpg',
    'https://ae01.alicdn.com/kf/HTB1t3TZas_vK1RkSmRyq6xwupXak/-.jpg']
  },

  //Jewelery

  {
    id: 11,
    name: 'tosdh azde',
    category: 3,
    price: 102.32,
    description: 'Горячая Мода 925 стерлингового серебра роскошные длинные кисточки ожерелье серьги набор элегантные женские свадебные ювелирные наборы Популярные',
    rating: 2.52,
    link: 'https://aliexpress.ru/item/32793732844.html',
    img: ['https://ae01.alicdn.com/kf/HTB1TOYqhlsmBKNjSZFsq6yXSVXaQ/925.jpg',
    'https://ae01.alicdn.com/kf/HTB1qoByu7CWBuNjy0Faq6xUlXXaq/925.jpg',
    'https://ae01.alicdn.com/kf/HTB1ZfdIu4SYBuNjSspjq6x73VXaR/925.jpg']
  },

];
