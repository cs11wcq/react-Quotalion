const authorList = [
  {
    author_id: 'Henry',
    name: 'Henry',
    //category_id: [quote_ids for that category]
    quoteChildren: [{ category_id: '1A', children: ['1a', '2b'] }],
  },
  {
    author_id: 'Seth',
    name: 'Seth K',
    //category_id: [quote_ids for that category]
    quoteChildren: [{ category_id: '1A', children: ['3c'] }],
  },
  {
    author_id: 'Rick',
    name: 'Rick Riordan',
    //category_id: [quote_ids for that category]
    quoteChildren: [
      { category_id: '2HB', children: ['4d', 'r2', 'r3'] },
      { category_id: '5FR', children: ['r4', 'r5'] },
    ],
  },
  {
    author_id: 'Marilyn',
    name: 'Marilyn Monroe',
    quoteChildren: [
      { category_id: '2HB', children: ['m1', 'm2', 'm3', '5e'] },
      { category_id: '5FR', children: ['m4', 'm3'] },
    ],
  },
  {
    author_id: 'Nicholas',
    name: 'Nicholas Sparks',
    quoteChildren: [{ category_id: '2HB', children: ['6f'] }],
  },
  {
    author_id: 'Charles',
    name: 'Charles Barkley',
    quoteChildren: [
      { category_id: '1A', children: ['cb'] },
      { category_id: '6Motivation', children: ['cb', 'cb1'] },
    ],
  },
]

export default authorList
