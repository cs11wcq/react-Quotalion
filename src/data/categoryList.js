import {
  FaBasketballBall,
  FaHeartBroken,
  FaLevelUpAlt,
  FaPaintBrush,
  FaSadCry,
  FaUserFriends,
} from 'react-icons/fa'

const categoryList = [
  // {
  //   category_id: 0,
  //   category: 'general',
  //   icon: <FaBasketballBall />,
  //   info: 'Miscellaneous',
  // },
  {
    category_id: '1A',
    category: 'sports',
    icon: <FaBasketballBall />,
    info: 'Sports quotes from your favorite athletes',
  },
  {
    category_id: '2HB',
    category: 'heartbreak',
    icon: <FaHeartBroken />,
    info: 'Feeling sad, down, and heartbroken? These quotes will cheer you up.',
  },
  {
    category_id: '3C',
    category: 'Failure',
    icon: <FaSadCry />,
    info: 'We have all failed at one point. Failure is necessary for success',
  },
  {
    category_id: '4D',
    category: 'Art',
    icon: <FaPaintBrush />,
    info: 'Art is too important not to share',
  },
  {
    category_id: '5FR',
    category: 'Friendship',
    icon: <FaUserFriends />,
    info: 'These quotes about friendship will get your reminiscing about your childhood bff',
  },
  {
    category_id: '6Motivation',
    category: 'Motivation',
    icon: <FaLevelUpAlt />,
    info: 'Get pumped!',
  },
]
export default categoryList
