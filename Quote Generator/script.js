const quote = document.getElementById('quote');
const author = document.getElementById('author');

const apiUrl = 'https://random-quotes-freeapi.vercel.app/api/random';

async function getquote(url) {
  const response = await fetch(url);
  let data = await response.json();
  // console.log(data);
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}
getquote(apiUrl);

function tweet() {
  window.open(
    'https://twitter.com/intent/tweet?text=' +
      quote.innerHTML +
      '---- by ' +
      author.innerHTML,
    'Tweet Window',
    'width=600, height=300'
  );
}
