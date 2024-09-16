fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(json => { 
    const ul = document.querySelector(".posts-list");
   
      json.forEach((item, index) => { 
        const post = document.createElement("li");
        const postIndex = document.createElement("span");
      const postTitle = document.createElement("h4");
        const postText = document.createElement("p");
        const link = document.createElement("a");
        
        post.classList.add("posts-list-item");
        postIndex.classList.add("post-index");
         postTitle.classList.add("post-title");
        postText.classList.add("post-text");
        link.classList.add("post-link");

        postIndex.innerHTML = index + 1;
        postTitle.innerHTML = item.title;
        postText.innerHTML = item.body;
        link.innerHTML = "Read more";

        post.append(postIndex, postTitle, postText, link);
        ul.append(post);
    })
})