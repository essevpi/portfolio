import WeatherioPreview from '../../../public/images/weatherio_preview.png';
import ForumBoardPreview from '../../../public/images/forumboard_preview.png';

const projectsData = [
  {
    title: 'Weatherio',
    desc: 'A simple weather app built with NextJS and Redux Toolkit for state management',
    href: 'https://my-weatherio.vercel.app/',
    img: WeatherioPreview,
    tags: ['React', 'NextJS', 'Redux'],
  },
  {
    title: 'Forum-Board',
    desc: 'A forum-like app built with NextJS, TailwindCSS and Context API/Local Storage for state management',
    href: 'https://forum-board.vercel.app/',
    img: ForumBoardPreview,
    tags: ['React', 'Context API', 'NextJS', 'TailwindCSS'],
  },
];

export default projectsData;
