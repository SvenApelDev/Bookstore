
// ===== DATA =====

let books = [
    {
        title: 'Dieter Rams: Less and More',
        image: 'assets/images/book-rams.png',
        author: 'Klaus Klemp & Keiko Ueki-Polet',
        likes: 123,
        liked: false,
        price: '80,00 €',
        publishedYear: 2009,
        genre: 'Design / Monografie / Produktgestaltung',
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
        title: 'Paul Rand: A Designers Art',
        image: 'assets/images/book-rand.png',
        author: 'Paul Rand',
        likes: 126,
        liked: false,
        price: '50,00 €',
        publishedYear: 1985,
        genre: 'Grafikdesign / Kunstgeschichte / Corporate Design',
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
        title: 'Steve Jobs',
        image: 'assets/images/book-jobs.png',
        author: 'Walter Isaacson',
        likes: 1263,
        liked: false,
        price: '35,00 €',
        publishedYear: 2011,
        genre: 'Biografie / Sachbuch',
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
        title: 'Sagmeister: Made You Look',
        image: 'assets/images/book-sagmeister.png',
        author: 'Stefan Sagmeister & Peter Hall',
        likes: 304,
        liked: true,
        price: '45,00 €',
        publishedYear: 2001,
        genre: 'Grafikdesign / Visuelle Kunst / Monografie',
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
            <h2>${books[i].title}</h2>
            <img src="${books[i].image}" alt="${books[i].title}">
            <span>${books[i].likes}</span>
            <button onclick="toggleLike(${i})" class="like-btn"><img src="${getHeartIcon(i)}" alt=""></button>           
        </div>       
    `;
}

function getHeartIcon(i) {
    if (books[i].liked) {
        return 'assets/icons/favorite_fill_1.svg';
    } else {
        return 'assets/icons/favorite_fill_0.svg';
    }
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