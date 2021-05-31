const authorList = [
  {
    author_id: 'Rick',
    name: 'Rick Riordan',
    //category_id: [quote_ids for that category]
    quote_children: [
      { category_id: '2HB', children: ['4d', 'r2', 'r3'] },
      { category_id: '5FR', children: ['r4', 'r5'] },
    ],
  },
  {
    author_id: 'Marilyn',
    name: 'Marilyn Monroe',
    quote_children: [
      { category_id: '2HB', children: ['m1', 'm2', 'm3','5e'] },
      { category_id: '5FR', children: ['m4', 'm3'] },
    ],
  },
  {
    author_id: 'Nicholas',
    name: 'Nicholas Sparks',
    quote_children: [{ category_id: '2HB', children: ['6f'] }],
  },
]

export default authorList
