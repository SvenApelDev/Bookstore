
// ===== DATA =====

let books = [
    {
        title: 'Dieter Rams: Less and More',
        image: 'assets/images/book-rams.png',
        author: 'Klaus Klemp & Keiko Ueki-Polet',
        likes: 123,
        liked: false,
        price: 80.00,
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
        price: 50.00,
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
        price: 35.00,
        publishedYear: 2011,
        genre: 'Biografie / Sachbuch',
        comments: []
    },
    {
        title: 'Sagmeister: Made You Look',
        image: 'assets/images/book-sagmeister.png',
        author: 'Stefan Sagmeister & Peter Hall',
        likes: 304,
        liked: true,
        price: 45.00,
        publishedYear: 2001,
        genre: 'Grafikdesign / Visuelle Kunst / Monografie',
        comments: []
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

function getFormattedPrice(i) {
    const bookPrice = books[i].price;
    const fixedPrice = bookPrice.toFixed(2);
    const germanPrice = fixedPrice.replace('.', ',');
    return `${germanPrice} €`;
}

function getHeartIcon(i) {
    if (books[i].liked) {
        return 'assets/icons/favorite_fill_1.svg';
    } else {
        return 'assets/icons/favorite_fill_0.svg';
    }
}

function getBookTemplate(i) {
    return /*html*/`
        <div class="book-card">
            <h2>${books[i].title}</h2>
            <img src="${books[i].image}" alt="${books[i].title}">
            <span>${books[i].likes}</span>
            <button onclick="toggleLike(${i})" class="like-heart-btn"><img src="${getHeartIcon(i)}" alt=""></button>
            <div class="product-details">
                <!-- Autor -->
                <p class="product-author">Von: <span>${books[i].author}</span></p>
    
                <!-- Genre -->
                <p class="product-genre">Genre: <span>${books[i].genre}</span></p>
    
                <!-- Veröffentlichung -->
                <p class="product-date">
                    Erschienen: ${books[i].publishedYear}
                </p>
    
                <!-- Preis -->
                <p class="product-price">
                    Preis: <data value="${books[i].price}">${getFormattedPrice(i)}</data>
                </p>
            </div>
            <div class="user-comments">
                ${getCommentsTemplate(i)}
                <input type="text" id="comment-input-${i}" placeholder="Kommentar schreiben...">
                <button onclick="addComment(${i})">Senden</button>
            </div>  
        </div>       
    `;
}

function getCommentsTemplate(i) {
    if (books[i].comments.length === 0) {
        return `<p class="no-comments">Bitte schreibe einen Kommentar!</p>`;
    }
    let commentsHTML = "";
    for (let j = 0; j < books[i].comments.length; j++) {
        commentsHTML += /*html*/`
            <p class="comments-name">${books[i].comments[j].name}</p>
            <p class="comments-text">${books[i].comments[j].comment}</p>        
        `;        
    }
    return commentsHTML;
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

function addComment(i) {
    const input = document.getElementById(`comment-input-${i}`);
    const text = input.value;

    if (text === '') {
        return;
    }
    
    books[i].comments.push({ name: "Du", comment: text });

    renderBooks();
}

