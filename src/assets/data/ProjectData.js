// TODO optimize the image size of all data
export const ProjectData = [
  {
    id: 'project1',
    title: 'My Resume',
    intro:
      'This my first resume project. I will show myself and my projects here.',
    tags: ['React', 'JavaScript', 'SCSS', 'MUI'],
    demo: 'https://jonsnowljs.github.io/portfolio/',
    github: 'https://github.com/jonsnowljs/portfolio',
    img: require('../img/project/portfolio1.png'),
  },
  {
    id: 'project2',
    title: 'Shopping',
    intro:
      'This is my first full-stack project. It is a shopping website build with MERN stack and deployed in Heroku. The features include shopping cart, product ratings and reviews, product pagination, product search, admin product management, admin user management, admin order details page, admin, mark order as delivered, Paypal payment',
    tags: [
      'React',
      'Express',
      'Node',
      'MongoDB',
      'Heroku',
      'Redux',
      'Bootstrap',
    ],
    demo: 'https://shoppingmernappjs.herokuapp.com/',
    github: 'https://github.com/jonsnowljs/Shopping',
    img: require('../img/project/shopping1.png'),
  },
];
