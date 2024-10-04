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
import { refs } from "./js/refs"


document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet">`)

