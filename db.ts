interface Author {
  id: number;
  name: string;
}

interface Book {
    id: number;
    title: string
}


const authors: Author[] = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books: Book[] = [
    {id: 1, title: 'bible'},
    {id: 2, title: 'itsy bitsy spider'},
    {id: 3, title: ' super book'}
]

async function getAuthorById(authorId: number) : Promise<Author | undefined> {
  return authors.find(author => author.id === authorId);
};

async function getBookById(bookId: number) : Promise<Book | undefined> {
    return books.find(book => book.id === bookId)
}

export default { getAuthorById, getBookById };
