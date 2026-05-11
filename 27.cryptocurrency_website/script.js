var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin,ethereum,dogecoin&x_cg_demo_api_key=CG-cXoYHD6DvNfjSVEHh6mjxpvt",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});
