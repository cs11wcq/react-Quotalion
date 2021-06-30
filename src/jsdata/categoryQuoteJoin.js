//join table
////category and the quotes (quote ids) that belong to it
const categoryQuoteJoin = [
  {
    //list of category ids
    category_id: '1A',
    quoteChildren: ['1a', '2b', '3c', 'cb'],
    author_children: ['Henry', 'Seth', 'Charles'],
  },
  {
    category_id: '2HB',
    quoteChildren: ['4d', '5e', '6f', 'r2', 'r3', 'm1', 'm2', 'm3'],
    author_children: ['Rick', 'Marilyn', 'Nicholas'],
  },
  {
    category_id: '3C',
    quoteChildren: [],
    author_children: [],
  },

  {
    category_id: '4D',
    quoteChildren: [],
    author_children: [],
  },
  {
    category_id: '5FR',
    quoteChildren: ['m4', 'r4', 'r5', 'm3'],
    author_children: ['Rick', 'Marilyn'],
  },
  {
    category_id: '6Motivation',
    quoteChildren: ['cb', 'cb1'],
    author_children: ['Charles'],
  },
]

export default categoryQuoteJoin
