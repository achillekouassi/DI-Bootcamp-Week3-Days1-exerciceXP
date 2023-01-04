// 2- Dans le fichier js, créez un tableau appelé allBooks. Il s'agit d'un tableau d'objets. Chaque objet est un livre qui possède 4 clés (soit 4 propriétés) :
//Titre,
//auteur,
//image : une url,
//déjàRead : qui est un booléen (vrai ou faux).

const allBooks = []
console.log("allBooks", allBooks)

const book1 = {
    title: "Harry Potter",
    author: "J.K Rowling",
    image : "https://picsum.photos/200",
    alreadyRead : false
}

const book2 = {
    title: "Lord of the Rings",
    author: "George Orwell",
    image : "https://picsum.photos/201",
    alreadyRead : true
}


const book3 = {
    title: "1984",
    author: "Aldous huxley",
    image : "https://picsum.photos/202",
    alreadyRead: true
}

const book4 = {
    title: "Brave New world",
    author: "Tolien",
    image : "https://picsum.photos/203",
    alreadyRead : false
}

allBooks.push(book1, book2, book3, book4)
console.log('allBooks:', allBooks)

let htmlString =  "";
for (const book of allBooks){
console.log(book)
const rowString = `
<tr ${book.alreadyRead ? 'is-read' : ''}>
<td>${book.title} written by ${book.author}</td>
<td><img src = "${book.image} "</td>
<td>${book.alreadyRead} </td>
</tr>
`
htmlString = htmlString + rowString
}

const table = document.createElement("table")
table.innerHTML = 
                `<thead>
                        <tr>
                         <th colspan="3"> My Book List</th>
                        </tr>
                    </thead> 
                    <tbody>
                   ${htmlString}
                       
                    </tbody>`
const bookListDiv = document.querySelector(".list-books")
console.log('bookListDiv:', bookListDiv)
bookListDiv?.appendChild(table)
