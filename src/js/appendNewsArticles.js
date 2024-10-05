import { truncate } from "./truncateText.js";

function timeAgo(dateString) {
  const now = new Date();
  const publishedDate = new Date(dateString);
  const secondsAgo = Math.floor((now - publishedDate) / 1000);

  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (daysAgo > 0) {
    return `Last updated ${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  } else if (hoursAgo > 0) {
    return `Last updated ${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  } else if (minutesAgo > 0) {
    return `Last updated ${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
  } else {
    return `Last updated just now`;
  }
}

export function appendNewsArticles(articles, wrapper) {
    const filteredArticles = articles.filter(article => article.title !== "[Removed]" && article.urlToImage !== null)
    const articlesMarkup =  filteredArticles.map(
    ({title, description, url, urlToImage, publishedAt}) => `<article class="card">
        <img
          class="card-img-top"
          src="${urlToImage ? urlToImage : 'https://placehold.co/600x400?text=Hot news'}"
          alt="${title}"
        />
        <div class="card-body">
          <h5 class="card-title">${truncate(title, 30)}</h5>
          <p class="card-text">
            ${truncate(description)}
          </p>
          <p class="card-text">
            <small class="text-body-secondary">${timeAgo(publishedAt)}</small>
          </p>
          <a href="${url}" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer" >Read more</a>
        </div>
      </article>`
  ).join("");
  wrapper.insertAdjacentHTML("beforeend", articlesMarkup)
}