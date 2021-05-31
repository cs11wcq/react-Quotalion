//join table
////category and the quotes (quote ids) that belong to it
const categoryQuoteJoin = [
  {
    //list of category ids
    category_id: '1A',
    quote_children: ['1a', '2b', '3c'],
    author_children: ['henry', 'seth'],
  },
  {
    category_id: '2HB',
    quote_children: ['4d', '5e', '6f', 'r2', 'r3', 'm1', 'm2', 'm3'],
    author_children: ['Rick', 'Marilyn', 'Nicholas'],
  },
  {
    category_id: '3C',
    quote_children: [],
    author_children: [],
  },

  {
    category_id: '4D',
    quote_children: [],
    author_children: [],
  },
  {
    category_id: '5FR',
    quote_children: ['m4', 'r4', 'r5', 'm3'],
    author_children: ['Rick', 'Marilyn'],
  },
]

export default categoryQuoteJoin
