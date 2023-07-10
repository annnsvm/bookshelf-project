import getBookById from './service/getBookById';

const KEY_LIST = 'bookList';

const listEl = document.querySelector('.books-shoppingList');

console.dir(listEl);

const dataEl = localStorage.getItem(KEY_LIST);
const parsedDataEl = JSON.parse(dataEl);

function markupBooks(parsedDataEl) {
  listEl.innerHTML = '';
  const markupItem = parsedDataEl
    .map(parsedDataEl => {
      return `
      <li class="shoppingList-item">
        <img class="shoppingList-img" src="./img/book-testImg.png" alt="" />
        <div class="shoppingList-container">
          <div id="content" class="box-shoppingList">
            <div>
              <h2 class="shoppingList-title">I will find you</h2>
              <p class="shoppingList-category">Hardcover fiction</p>
            </div>
            <button class="shoppingList-trash-btn" id="$">
              <svg class="shoppingList-icon-trash">
                <use href="./img/symbol-defs.svg#icon-trash"></use>
              </svg>
            </button>
          </div>
          <p class="shoppingList-content">
            David Burroughs was once a devoted father to his three-year-old son
            Matthew, living a dream life just a short drive away from the
            working-class suburb where he and his wife, Cheryl, first fell in
            love--until one fateful night when David woke suddenly to discover
            Matthew had been murdered while David was asleep just down the hall.
          </p>
          <div class="shoppingList-link-container">
            <p class="text-shoppingList-author">Harlan Coben</p>
            <ul class="box-shoppingList-shop">
              <li>
                <a class="shop-shoppingList-link" href="https://www.amazon.com">
                  <img
                    class="shop-shoppingList-img1"
                    src="./img/1-amazon.jpg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  class="shop-shoppingList-link"
                  href="https://goto.applebooks.apple"
                >
                  <img
                    class="shop-shoppingList-img2"
                    src="./img/2-ibook.jpg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  class="shop-shoppingList-link"
                  href="https://du-gae-books-dot-nyt-du-prd.appspot.com"
                >
                  <img
                    class="shop-shoppingList-img2"
                    src="./img/3-bookshop.jpg"
                    alt=""
                  />
                </a>
              </li>`;
    })
    .join('');

  listEl.innerHTML = markupItem;
}

const id = '643282b2e85766588626a12a';

const getBookInfo = async () => {
  const data = await getBookById(id);
  console.log(data);
};

getBookInfo();
