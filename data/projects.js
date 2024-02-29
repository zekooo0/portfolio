import Ecomerce from '../src/assets/e-commerce-screenshot.png';
import Pizza from '../src/assets/react-pizza-screenshot.png';
import Watch from '../src/assets/watch-movie-screenshot.png';

const projects = [
  {
    id: 1,
    title: 'e-commerce',
    description:
      'This is an E-commerce API that I developed. It includes user authentication and authorization features. It also provides admin control and all the standard features of an e-commerce website.',
    skills: ['Node JS', 'Express JS', 'MongoDB'],
    github: 'https://github.com/zekooo0/e-commerce-backend',
    liveDemo: '',
    screenShot: Ecomerce,
  },
  {
    id: 2,
    title: 'React Pizza',
    description:
      'React Pizza is a web application that allows users to browse through a pizza menu, add their chosen pizzas to a cart, and confirm their order. It provides a seamless user experience for ordering pizzas online.',
    skills: ['React JS', 'Redux Toolkit', 'Tailwind CSS'],
    github: 'https://github.com/zekooo0/React-Pizza',
    liveDemo: 'https://react-pizza-lyart-nine.vercel.app/',
    screenShot: Pizza,
  },
  {
    id: 3,
    title: 'Watched List',
    description:
      'Watched List is a web application that allows users to search for any film, add it to their watched list, and rate the film. It provides a user-friendly interface for tracking and rating films.',
    skills: ['React JS'],
    github: 'https://github.com/zekooo0/Watched-List',
    liveDemo: 'https://watched-list.vercel.app/',
    screenShot: Watch,
  },
];

export { projects };
