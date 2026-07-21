
// ===== DATA =====

let books = [
    {
        title: 'Less and More',
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
        ]
    },
    {
        title: 'A Designers Art',
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
        title: 'Made You Look',
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
    getFromLocalStorage();
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
            <img class="product-img" src="${books[i].image}" alt="${books[i].title}">
            <h3>${books[i].title}</h3>

            <div class="product-details">
                <!-- Autor -->
                <p class="product-author">${books[i].author}</p>    
                <!-- Genre -->
                <p class="product-genre">${books[i].genre}</p>    
                <!-- Veröffentlichung -->
                <p class="product-date">${books[i].publishedYear}</p>
                <hr class="divider">
                <div class="cont-like-price">
                    <div class="like-group">
                        <button onclick="toggleLike(${i})" class="like-heart-btn"><img src="${getHeartIcon(i)}" alt=""></button>
                        <span>${books[i].likes}</span>
                    </div>
                    <data value="${books[i].price}">${getFormattedPrice(i)}</data>              
                </div>
                <hr class="divider">
            </div>
            <div class="user-comments">
                ${getCommentsTemplate(i)}
                <div class="form-comments">
                    <input type="text" id="comment-input-${i}" placeholder="Kommentar schreiben...">
                    <button class="send-btn" onclick="addComment(${i})"><img src="assets/icons/send.svg" alt="send commit"></button>
                </div>
            </div>  
        </div>       
    `;
}

function getCommentsTemplate(i) {
    if (books[i].comments.length === 0) {
        return `<p class="no-comments">Deine Meinung hier!</p>`;
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

function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
        books = JSON.parse(savedBooks);
    }
}

// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");

//function saveData()

// ===== ACTIONS =====

function toggleLike(i) {
  if (books[i].liked) {
    books[i].liked = false;
    books[i].likes = books[i].likes - 1;   
  } else {
    books[i].liked = true;
    books[i].likes = books[i].likes + 1;   
  }
  saveToLocalStorage();
  renderBooks();
}

function addComment(i) {
    const input = document.getElementById(`comment-input-${i}`);
    const text = input.value;

    if (text === '') {
        return;
    }
    
    books[i].comments.push({ name: "Sven Apel", comment: text });

    saveToLocalStorage();
    renderBooks();
}

