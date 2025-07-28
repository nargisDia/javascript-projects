const apiKey = `40ffa6c23cef489493063176f0cb28b1`;

const blogContainer = document.getElementById('blog-container');

// searching page & button
const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apikey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);
    return data.articles;
  } catch (error) {
    console.error('Error fetching random news', error);
    return [];
  }
}
// search function
searchButton.addEventListener('click', async () => {
  const query = searchField.value.trim();
  if (query !== '') {
    try {
      const articles = await fetchNewsQuery(query);
      displayBlogs(articles);
    } catch (error) {
      console.log('Error fetching news by query', error);
    }
  }
});

async function fetchNewsQuery(query) {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=20&apikey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);
    return data.articles;
  } catch (error) {
    console.error('Error fetching random news', error);
    return [];
  }
}

function displayBlogs(articles) {
  blogContainer.innerHTML = '';
  articles.forEach(article => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    const img = document.createElement('img');
    img.src = article.urlToImage;
    img.alt = article.title;
    const title = document.createElement('h2');
    // title.textContent = article.title;
    // if title is so large then we use this code to short
    const truncatedTitle =
      article.title.length > 30
        ? article.title.slice(0, 30) + '....'
        : article.title;
    title.textContent = truncatedTitle;
    const description = document.createElement('p');
    // if description is so large then we use this code to short
    const truncatedDescription =
      article.description.length > 120
        ? article.description.slice(0, 120) + '....'
        : article.description;
    description.textContent = truncatedDescription;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);

    blogCard.addEventListener('click', () => {
      window.open(article.url, '_blank');
    });

    blogContainer.appendChild(blogCard);
  });
}

(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  } catch (error) {
    console.error('Error fetching random news', error);
    return [];
  }
})();
