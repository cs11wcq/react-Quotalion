import { FaBasketballBall, FaHeartBroken, FaPaintBrush, FaSadCry, FaUserFriends } from 'react-icons/fa'

const questions = [
  {
    id: 1,
    category: 'sports',
    icon: <FaBasketballBall />,
    info: 'Here is our alphabetical list of over 800 sports played around the world. In addition to individual sports, the list includes some names of sport groups, styles and codes. There is undoubtedly more sports than are listed here, there are many regional sports, modified rules and new sports being developed every day .',
  },
  {
    id: 2,
    category: 'heartbreak',
    icon: <FaHeartBroken />,
    info: 'Feeling sad, down, and heartbroken? These quotes will cheer you up.',
  },
  {
    id: 3,
    category: 'Failure',
    icon: <FaSadCry />,
    info: 'We have all failed at one point. Failure is necessary for success',
  },
  {
    id: 4,
    category: 'Art',
    icon: <FaPaintBrush />,
    info: 'Art is too important not to share',
  },
  {
    id: 5,
    category: 'Friendship',
    icon: <FaUserFriends />,
    info: 'These quotes about friendship will get your reminiscing about your childhood bff',
  },
]
export default questions
