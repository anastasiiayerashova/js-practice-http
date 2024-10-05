// fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(json => {
//     const ul = document.querySelector(".posts-list");
   
//       json.forEach((item, index) => {
//         const post = document.createElement("li");
//         const postIndex = document.createElement("span");
//         const postTitle = document.createElement("h4");
//         const postText = document.createElement("p");
//         const link = document.createElement("a");
        
//         post.classList.add("posts-list-item");
//         postIndex.classList.add("post-index");
//          postTitle.classList.add("post-title");
//         postText.classList.add("post-text");
//         link.classList.add("post-link");

//         postIndex.innerHTML = index + 1;
//         postTitle.innerHTML = item.title;
//         postText.innerHTML = item.body;
//         link.innerHTML = "Read more";

//         post.append(postIndex, postTitle, postText, link);
//         ul.append(post);
//     })
// })

import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { refs } from "./js/refs";
import { fetchNews } from "./js/news-service";
import { appendNewsArticles } from "./js/appendNewsArticles";
import { PER_PAGE } from "./js/config";


document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet">`)

let currentPage = 1;
let searchQuery = null;
let pages = 0;

refs.form.addEventListener("submit", handleSubmit);
refs.loadMoreBtn.addEventListener("click", handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  searchQuery = form.elements.newsKeyword.value;
  refs.loadMoreBtn.classList.add("is-hidden");
  refs.container.innerHTML = "";
  currentPage = 1;

  try {
    const { articles, totalResults } = await fetchNews(searchQuery, currentPage);
      if (currentPage === 1) {
      iziToast.success({ message: 'First page 😎'});
    }

    pages = Math.ceil(totalResults / PER_PAGE);
    appendNewsArticles(articles, refs.container);
    refs.loadMoreBtn.classList.remove("is-hidden");
  }
  catch (error) {
    refs.loadMoreBtn.classList.add("is-hidden");
     iziToast.error({
      message: error.message
    });
  }
  finally {
    form.reset()
  }
}

async function handleLoadMore() {
  currentPage += 1;
  try {
    refs.loader.classList.remove("is-hidden");
    const { articles, totalResults } = await fetchNews(searchQuery, currentPage);
    appendNewsArticles(articles, refs.container);
    handleScroll()

    if (currentPage >= Math.min(pages, 16)) {
      refs.loadMoreBtn.classList.add("is-hidden");
       iziToast.success({ message: 'Last page 🥺'});
    }
  }
  catch (error) {
    console.log(error);
  }
  finally {
refs.loader.classList.add("is-hidden");
  }
}

function handleScroll() {
  const lastArticle = refs.container.lastElementChild;
  const articleHeight = lastArticle.getBoundingClientRect().height;
  window.scrollBy({
    top: articleHeight * 2,
    left: 0,
    behavior: "smooth",
  });
}
