let btc = document.getElementById('bitcoin');
let eth = document.getElementById('ethereum');
let doge = document.getElementById('dogecoin');

let settings = {
  async: true,
  crossDomain: true,
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd',
  method: 'GET',
  headers: {},
};

$.ajax(settings).done(function (response) {
  // console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});

// let btc = document.getElementById('bitcoin');

// fetch(
//   'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
// )
//   .then(response => response.json())
//   .then(data => {
//     btc.innerHTML = `$${data.bitcoin.usd}`;
//   })
//   .catch(error => console.error('Error:', error));
