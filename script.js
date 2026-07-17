
// ===== DATA =====

let books = [
    {
        title: 'Erstes Buch',
        image: 'assets/img/erstes-buch.jpg',
        author: 'Sven Apel',
        likes: 123,
        liked: false,
        price: 12.80,
        publishedYear: 1980,
        genre: 'Fantasy',
        comments: [
            {
                name: 'Leser123',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'FantasyGuru',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'BookFan',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'Unbekannt',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            }
        ]
    },
    {
        title: 'Zweites Buch',
        image: 'assets/img/zweites-buch.jpg',
        author: 'Emil Eckl',
        likes: 126,
        liked: false,
        price: 15.60,
        publishedYear: 2000,
        genre: 'Drama',
        comments: [
            {
                name: 'Leser123',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'FantasyGuru',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'BookFan',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'Unbekannt',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            }
        ]
    },
    {
        title: 'Drittes Buch',
        image: 'assets/img/drittes-buch.jpg',
        author: 'Nick Tunger',
        likes: 1263,
        liked: false,
        price: 19.10,
        publishedYear: 2001,
        genre: 'Adventure',
        comments: [
            {
                name: 'Leser123',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'FantasyGuru',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'BookFan',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'Unbekannt',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            }
        ]
    },
    {
        title: 'Viertes Buch',
        image: 'assets/img/viertes-buch.jpg',
        author: 'Linda Tunger',
        likes: 304,
        liked: true,
        price: 10.90,
        publishedYear: 2012,
        genre: 'Comedy',
        comments: [
            {
                name: 'Leser123',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'FantasyGuru',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'BookFan',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            },
            {
                name: 'Unbekannt',
                comment: 'Die Handlung ist sehr gut gelungen und handelt von einem abenteuerlichen Leben.'
            }
        ]
    }
];

// ===== INIT =====

function init() {
  renderBooks();
}

init();

// ===== RENDER =====

function renderBooks() {
    const bookCardRef = document.getElementById("content");
    bookCardRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        bookCardRef.innerHTML += getBookTemplate(i);  
    }
}

// ===== TEMPLATES =====

function getBookTemplate(i) {
    return /*html*/`
        <div class="book-card">

        </div>
        
        
    `
}

// ===== ACTIONS =====

function toggleLike(i) {
  if (books[i].liked) {
    books[i].liked = false;
    books[i].likes = books[i].likes - 1;   
  } else {
    books[i].liked = true;
    books[i].likes = books[i].likes + 1;   
  }

  renderBooks();
}
// toggleLike(index)
// addComment(index)